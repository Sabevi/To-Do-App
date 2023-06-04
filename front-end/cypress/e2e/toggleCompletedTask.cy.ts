describe("Completed tasks", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should mark an item as completed", () => {
    //create an item
    cy.get("[data-cy='add-task']").type("Buy cinema tickets");
    cy.get("[data-cy='submit']").click();

    //set item as completed
    cy.get("[data-cy='toggle-check']").check();
    cy.get("[data-cy='toggle-check']").should('be.checked');
  });

  it("should mark a task as not completed if check is removed", () => {
    //create an item
    cy.get("[data-cy='add-task']").type("Go to the supermarket");
    cy.get("[data-cy='submit']").click();

    //set item as completed
    cy.get("[data-cy='toggle-check']").check();
    cy.get("[data-cy='toggle-check']").should('be.checked');

    //set item as not completed
    cy.get("[data-cy='toggle-check']").uncheck();
    cy.get("[data-cy='toggle-check']").should('not.be.checked');
  })

});