describe("Add task", () => {
 it("Should add a task", () => {
    cy.visit("/");
    cy.fixture("taskList").then((taskList) =>{
      cy.get("[data-cy='add-task']").type(taskList[0].task);
      cy.get("[data-cy='submit']").click();
      cy.contains(taskList[0].task).should("exist");
    })
  });
});

