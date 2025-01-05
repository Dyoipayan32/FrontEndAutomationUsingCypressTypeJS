describe('test case 1: verify postive scenario', () => {
    it('step1:', () => {
        cy.visit('https://www.cypress.io/')
        cy.title().should('eq', 'Testing Frameworks for Javascript | Write, Run, Debug | Cypress')
    }
    )
}
)