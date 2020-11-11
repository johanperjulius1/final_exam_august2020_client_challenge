describe("visitor can see course list", () => {
  context("", () => {
    beforeEach(() => {
      cy.visit("http://localhost:3000");
    });
    it("displays first article", () => {
      cy.get("#article-1").within(() => {
        cy.get("h1").should("contain", "WORK THE WEB");
      });
    });

    it("displays second article", () => {
      cy.get("#article-2").within(() => {
        cy.get("p").should("contain", "Cypress is a cutting-edge");
      });
    });

    it("displays third article", () => {
      cy.get("#article-3").within(() => {
        cy.get(".capitalized").within(() => {
          cy.get(".bold").should("Vue");
        });
      });
    });
  });
});
