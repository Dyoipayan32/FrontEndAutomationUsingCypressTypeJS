// const cypress = require('cypress')
// const  {it}  = require('mocha')
describe('Test Suite: Validate XPATH_Locator tests.', () => {
    it('Test case 1: ', () => {
        cy.visit('https://automationexercise.com/products')
        cy.xpath(".//*[@id='search_product']").type("Polo")
        // cy.get(".//*[@class='form-control input-lg'and @name='search']").type("Polo")
        // cy.get(".//*[@name='search']").type("Polo")
        cy.xpath(".//*[@id='submit_search']").click()
    }   
    )
}
)