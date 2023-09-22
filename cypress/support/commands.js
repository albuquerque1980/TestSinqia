Cypress.Commands.add('Consulta', (item) => {
    cy.get('#search-open').click()
        if (!item.textoConsulta) 
          cy.get('.desktop-search > .search-form > .search-submit').click()
        else{
          cy.get('.desktop-search').type(item.textoConsulta)
          cy.get('.desktop-search > .search-form > .search-submit').click()}
        cy.get('#primary').should('contain', item.msgRetornoConsulta)   
})

