describe('Google Search', () => {
  it('Searches for "vadesecure" and retrieves titles of the first three results', () => {
    cy.visit('https://www.google.com');
    cy.get('#L2AGLb').click();
    cy.get('.gLFyf').type('vadesecure');
    cy.contains('vadesecure').click();


    cy.wait(2000);


    cy.get('div.rc h3').each(($result, index) => {
      if (index < 3) {
        cy.log($result.text());
      }
    });
  });
});