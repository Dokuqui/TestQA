describe('Test de recherche sur Google', () => {
  it('Effectue une recherche et vérifie les résultats', () => {
    cy.visit('https://www.google.com')

    cy.get('#L2AGLb').click();
    cy.get('.gLFyf').type('vadesecure');
    cy.contains('vadesecure').click();

    cy.get('h3').should('have.length', 22).then(($results) => {
      const titles = $results.map((index, element) => Cypress.$(element).text()).get()
      cy.log(titles)

      const firstResultTitle = titles[0]
      cy.log(firstResultTitle)

      if (firstResultTitle !== 'les plus beaux') {
        cy.log('Le test est au vert')
      } else {
        cy.log('Le test est au rouge')
      }
    })
  })
})