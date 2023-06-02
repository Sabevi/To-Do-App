describe("create todo spec", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("successfully add a task", () => {
    cy.get("[data-cy='add-task']").type("Sprint meeting");
    cy.get("[data-cy='submit']").click();
    cy.contains("Sprint meeting").should("exist");
  })
});