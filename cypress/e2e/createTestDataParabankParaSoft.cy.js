const url = "https://parabank.parasoft.com/parabank/index.htm"
const userName = 'Dyoipayan_Das'
const expectedTitleText = "Welcome "+userName
const wrapValue = ''
describe('Validate User Registration', ()=>{
    it('Verifiy Account is created', () => {
        cy.visit(url)
        cy.get('a[href*=\'register\']').click()
        cy.get('[id=\'customer.firstName\']').type('Dyoipayan')
        cy.get('[id=\'customer.lastName\']').type('Das')
        cy.get('[id=\'customer.address.street\']').type('Kolkata')
        cy.get('[id=\'customer.address.city\']').type('Kolkata')
        cy.get('[id=\'customer.address.state\']').type('West Bengal')
        cy.get('[id=\'customer.address.zipCode\']').type('700001')
        cy.get('[id=\'customer.ssn\']').type('336699')
        // cy.get('[id=\'customer.username\']').type('DasD')
        // cy.get('[id=\'customer.password\']').type('Dyoi@parabank2024')
        // cy.get('[id=\'repeatedPassword\']').type('Dyoi@parabank2024')

        cy.get('[id=\'customer.username\']').type('Dyoipayan_Das')
        // cy.get('[id=\'customer.username\']').type('DyoiDas')
        // cy.get('[id=\'customer.username\']').type('DyoiD')
        // cy.get('[id=\'customer.username\']').type('DD')
        // cy.get('[id=\'customer.username\']').type('DDas')
        cy.get('[id=\'customer.password\']').type('Das@parabank2024')
        cy.get('[id=\'repeatedPassword\']').type('Das@parabank2024')
        cy.get('[type=\'submit\'][value=\'Register\']').click()
        cy.get('.title').should('be.visible')
        cy.get('.title').then(($value) =>{
         let getTitleText = $value.text()
          cy.wrap(getTitleText).as('wrapValue')

          expect(getTitleText).to.equal(expectedTitleText)
          assert.equal(getTitleText, expectedTitleText)
          assert.notEqual(getTitleText, '')
        })
        
    })
})
