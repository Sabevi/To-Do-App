describe("Add task", () => {
 it("Should add a task", () => {
    cy.visit("/");
    cy.fixture("taskList").then((taskList) =>{
      expect(taskList[0].task).to.eq('Do the laundry');
      cy.get("[data-cy='add-task']").type(taskList[0].task);
      cy.get("[data-cy='submit']").click().wait(0);
      cy.contains(taskList[0].task).should("exist");
    })
  });
});

