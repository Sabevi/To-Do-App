describe("Delete task", () => {
  before(() => {
    cy.visit("/");
  });

  it("should delete a task", () => {
    cy.fixture("taskList").then((taskList) => {
      //create the task
      cy.get("[data-cy='add-task']").type(taskList[1].task);
      cy.get("[data-cy='submit']").last().click();
            
      //remove the task
      cy.get("[data-cy='remove-todo']").last().click();
      cy.contains(taskList[1].task).should("not.exist");
    })
  })
});