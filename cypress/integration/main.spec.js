describe('Cypress Viewport Test', () => {
  it('works', () => {
  	cy.visit('/');
  	cy.viewport(1000, 600);
  	cy.screenshot();
  	cy.matchImageSnapshot('Desktop');
    cy.viewport('ipad-2');
  	cy.screenshot();
    cy.matchImageSnapshot('Tablet');
    cy.viewport('iphone-x');
  	cy.screenshot();
    cy.matchImageSnapshot('Mobile');
  });
});