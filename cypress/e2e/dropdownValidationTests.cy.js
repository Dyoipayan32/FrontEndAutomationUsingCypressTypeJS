const dropdownSelectUrl = "https://demo.seleniumeasy.com/basic-select-dropdown-demo.html"
const dropdownSugessionUrl = "https://www.dummyticket.com/dummy-ticket-for-visa-application/"
describe('Validate Dropdown Selection Tests', ()=>{

    it.skip('Test1: Verify select from dropdown list', ()=>{
        cy.visit(dropdownSelectUrl)
        // cy.get('#select-demo').click()
        cy.get('#select-demo').select('Sunday').should('have.value', 'Sunday')
        cy.get('p.selected-value').then(($x)=> {
            let selectedvalue = $x.text()
            cy.wrap(selectedvalue).as('wrap')
            expect(selectedvalue).to.equal('Day selected :- Sunday')
        })
        cy.get('p.selected-value').contains('Day selected :- Sunday')
    })

    it.skip('Test2: Verify select from dropdown sugesstions', ()=>{
        cy.visit(dropdownSugessionUrl)
        //A specified position to scroll the window or element to. Valid positions are ,
        //topLeft, top, topRight, left, center, right, bottomLeft, bottom, 
        //and bottomRight.
        // cy.scrollTo('center')
        cy.get('[id$=\'billing_country-container\']').click()
        cy.get('input.select2-search__field').type('Bhutan').type('{enter}')
        cy.get('[id$=\'billing_country-container\']').should('have.text', 'Bhutan')
    })

    it('Test3: Verify Select from Dynamic Dropdown', ()=>{
        cy.visit('https://www.google.com')
        cy.get("textarea[name='q'][role='combobox']").type('AI- powered interview preparation')
        cy.wait(3000)
        cy.get("div[id='Alh6id']>div>div>ul>li").should('have.length', 8)
        cy.get("div[id='Alh6id']>div>div>ul>li").each(($el, index, $list)=>{
            if ($el.text() === "ai tool for interview preparation"){
                cy.wrap($el).click()
            }
        })
    })
})