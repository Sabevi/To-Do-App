describe("Add task", () => {
  before(() => {
    cy.visit("/");
});

  it("Should add a task", () => {
    cy.fixture("taskList").then((taskList) =>{
      cy.get("[data-cy='add-task']", { timeout: 45000 }).type(taskList[0].task);
      cy.get("[data-cy='submit']").click();
      cy.contains(taskList[0].task).should("exist");
    })
  });
});

