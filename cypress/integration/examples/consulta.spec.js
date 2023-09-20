/// <reference types="cypress" />

const retornoBuscaNOK = 'Não encontramos nada para estes termos de busca. Tente novamente com palavras-chave diferentes.'
const retornoBuscaOK = 'Resultados da busca por: '

context('Actions', () => {
  beforeEach(() => {
    cy.viewport( 1920 , 1080 )
    cy.visit('https://blogdoagi.com.br/')
  })

  it('Realizar busca correta', () => {
    cy.get('#search-open').click()
    cy.get('.desktop-search').type('Brasil')
    cy.get('.desktop-search > .search-form > .search-submit').click()
    cy.get('.archive-title').should('have.text', retornoBuscaOK + 'Brasil')
  })

  it('Realizar busca nula', () => {
    cy.get('#search-open').click()
    cy.get('.desktop-search > .search-form > .search-submit').click()
    cy.get('.archive-title').should('have.text', retornoBuscaOK)
  })

  it('Realizar busca incorreta', () => {
    cy.get('#search-open').click()
    cy.get('.desktop-search').type('Brasi1')
    cy.get('.desktop-search > .search-form > .search-submit').click()
    cy.get('.entry-title').should('have.text', 'Nenhum resultado')
    cy.get('.entry-content > p').should('have.text', retornoBuscaNOK)
  })
})
