describe("Filter items", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show only the completed tasks", () => {
    cy.fixture("taskList").then((taskList) => {
      //create 2 tasks
      cy.get("[data-cy='add-task']").type(taskList[2].task);
      cy.get("[data-cy='submit']").click();
      cy.contains(taskList[2].task).should("exist");

      cy.get("[data-cy='add-task']").type(taskList[3].task);
      cy.get("[data-cy='submit']").click();
      cy.contains(taskList[3].task).should("exist");

      //set the first task as completed
      cy.get("[data-cy='toggle-check']").first().check();
      cy.get("[data-cy='toggle-check']").should('be.checked');

      //show only the completed task
      cy.get("[data-cy='filter']").select("done").should("have.value", "done");
      cy.contains("Do the dinner").should("exist");
      cy.contains(taskList[3].task).should("not.exist");
    });
  });
});