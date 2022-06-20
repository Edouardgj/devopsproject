describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://localhost3000/')
    cy.visit('https://localhost3000/404')
    cy.visit('https://localhost3000/FAQ')
  })
})