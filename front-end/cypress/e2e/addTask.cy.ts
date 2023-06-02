describe("create todo spec", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("successfully add a task", () => {
    cy.get("[data-cy='add-task']").type("Do the laundry");
    cy.get("[data-cy='submit']").click();
    cy.contains("Do the laundry").should("exist");
  });

});


