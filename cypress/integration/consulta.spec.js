describe('Realizando consulta', () => {

  const data = require('../fixtures/data') 

  context('Consulta blog', () => {
    beforeEach(() => {
      cy.viewport( 1920 , 1080 )
      cy.visit('https://blogdoagi.com.br/')
    })

    data.forEach((item, index) => {
      it(`${index + 1} - ${item.consulta}`, () => {
        cy.Consulta(item)
      })
    })
  })
})
