describe("Completed tasks", () => {
  before(() => {
    cy.visit("/");
  });

  it("should mark an item as completed", () => {
    cy.fixture("taskList").then((taskList) => {
      //create an item
      cy.get("[data-cy='add-task']").type(taskList[4].task);
      cy.get("[data-cy='submit']").click();

      //set item as completed
      cy.get("[data-cy='toggle-check']").check();
      cy.get("[data-cy='toggle-check']").should('be.checked');
    });
  });

  it("should mark a task as not completed if check is removed", () => {
    cy.fixture("taskList").then((taskList) => {
      //create an item
      cy.get("[data-cy='add-task']").type(taskList[5].task);
      cy.get("[data-cy='submit']").click();

      //set item as completed
      cy.get("[data-cy='toggle-check']").check();
      cy.get("[data-cy='toggle-check']").should('be.checked');

      //set item as not completed
      cy.get("[data-cy='toggle-check']").uncheck();
      cy.get("[data-cy='toggle-check']").should('not.be.checked');
    });
  });

});