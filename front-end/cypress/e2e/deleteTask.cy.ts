describe("delete item", () => {
  before(() => {
    cy.visit("http://localhost:3000");
  });

  it("should delete an item", () => {
    cy.get("[data-cy='add-task']").clear();

    //create an item
    cy.get("[data-cy='add-task']").type("Call Mark");
    cy.get("[data-cy='submit']").last().click();

    //remove the item
    cy.get("[data-cy='remove-todo']").last().click();
    cy.contains("Call Mark").should("not.exist");
  })

});