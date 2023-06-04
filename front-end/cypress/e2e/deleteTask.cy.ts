describe("Delete task", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should delete a task", () => {
    //create the task
    cy.get("[data-cy='add-task']").type("Call Mark");
    cy.get("[data-cy='submit']").last().click();

    //remove the task
    cy.get("[data-cy='remove-todo']").last().click();
    cy.contains("Call Mark").should("not.exist");
  })

});