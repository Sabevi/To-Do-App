describe("Add task", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("Should add a task", () => {
    cy.get("[data-cy='add-task']").type("Do the laundry");
    cy.get("[data-cy='submit']").click();
    cy.contains("Do the laundry").should("exist");
  });

});


