describe("Filter items", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should show only the completed tasks", () => {
    //create 2 tasks
    cy.get("[data-cy='add-task']").type("Do the dinner");
    cy.get("[data-cy='submit']").click();
    cy.contains("Do the dinner").should("exist");

    cy.get("[data-cy='add-task']").type("Do the lunch");
    cy.get("[data-cy='submit']").click();
    cy.contains("Do the lunch").should("exist");

    //set the first task as completed
    cy.get("[data-cy='toggle-check']").first().check();
    cy.get("[data-cy='toggle-check']").should('be.checked');

    //show only the completed task
    cy.get("[data-cy='filter']").select("done").should("have.value", "done");
    cy.contains("Do the dinner").should("exist");
    cy.contains("Do the lunch").should("not.exist");
  })

});