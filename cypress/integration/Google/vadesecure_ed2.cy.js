describe('Test de recherche sur Google', () => {
    it('Effectue une recherche et vérifie les résultats', () => {
      cy.visit('https://www.google.com')

      cy.get('#L2AGLb').click();
      cy.get('.gLFyf').type('vadesecure');
      cy.contains('vadesecure').click() ;
  
      cy.get('h3')
      .eq(0)
      .invoke('text')
      .then((title) => {
        cy.log('First search result title:', title);
        if (title.includes('les plus beaux')) {
        
          cy.log('Test is red');
        } else {
          
          cy.log('Test is green');
        }
      });
      })
    })