const url = "https://parabank.parasoft.com/parabank/index.htm"
const userName = 'Dyoipayan_Das'
const passWord = 'Das@parabank2024'
describe('Validate Assertion Tests', ()=>{
    it('Verifiy implicit assertions', () => {
        
        cy.visit(url)
        cy.get('[name=\'username\']').type(userName)

        // cy.get('[name=\'username\']').should('not.have.value', '')
        // cy.get('[name=\'username\']').should('have.value', userName)

        // cy.get('[name=\'username\']').should('not.have.value', '')
        // .should('have.value', userName)

        cy.get('[name=\'username\']').should('not.have.value', '')
        .and('have.value', userName)

        cy.get('[name=\'password\']').type(passWord)
        cy.get('[name=\'password\']').should('have.value', passWord)
        cy.get('[type=\'submit\']').click()
        cy.get('#showOverview').should('be.visible')
        cy.get('[href=\'logout.htm\']').should('be.visible').click()
    })

    // it('Verifiy explicit assertions', () => {
        
    //     // cy.visit(url)
    // })
})