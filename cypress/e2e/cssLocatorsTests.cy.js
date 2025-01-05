describe('Test Suite: Validate CSS_Locator tests.', () => {
    it('Test case 1: ', () => {
        cy.visit('https://automationexercise.com/products')
        cy.get("#search_product").type("Polo")
        // cy.get("[class='form-control input-lg'][name='search']").type("Polo")
        // cy.get("[name='search']").type("Polo")
        cy.get("#submit_search").click()
    }   
    )
}
)