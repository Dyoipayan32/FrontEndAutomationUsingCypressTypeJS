const checkBoxUrl = "https://demo.seleniumeasy.com/basic-checkbox-demo.html"
const radioButtonUrl = "https://demo.seleniumeasy.com/basic-radiobutton-demo.html"

describe('Validate Checkboxes and Radio-buttons', ()=>{
    it('Verifiy single checkbox is selected.', () => {
        
        cy.visit(checkBoxUrl)
        //Selecting a un-selected checkbox
        cy.get('#isAgeSelected').should('be.visible')
        .check().and('be.checked')
    })

    it('Verify selected checkbox is unchecked.', ()=>{
        //Un-selecting a selected checkbox
        cy.visit(checkBoxUrl)
        cy.get('form > :nth-child(2) > input').should('be.visible')
        .uncheck().and('not.be.checked')
    })

    it('Verify disabled checkbox is visible', ()=>{
        //Verifying disabled checkbox
        cy.visit(checkBoxUrl)
        cy.get('form > :nth-child(3)').should('be.visible')
        .then(($innerText) =>
        {
            let checkBoxType = $innerText.text()
            cy.wrap(checkBoxType).as('wrapValue')
            expect(checkBoxType).to.contain('Default Disabled')
        })
    })

    it('Verifiy select all checkboxes.', () => {
        
        cy.visit(checkBoxUrl)
        //Selecting all available checkboxes
        cy.get('input.cb1-element').check().should('be.checked')
    })

    it('Verifiy un-select all checkboxes.', () => {
        
        cy.visit(checkBoxUrl)
        //Un-selecting all checked checkboxes
        cy.get('input.cb1-element').uncheck().should('not.be.checked')
    })

    it('Verifiy radio buttons', () => {
        
        cy.visit(radioButtonUrl)
        //Selecting a radio button
        cy.get('input[value=\'Male\'][name=\'optradio\']').should('be.visible')
        .check().and('be.checked')
        //Verifying another radio button is unchecked
        cy.get('input[value=\'Female\'][name=\'optradio\']').should('be.visible')
        .and('not.be.checked')
        cy.get('#buttoncheck').click()
        cy.get('.radiobutton').then((confirmationBanner)=>{
            let confirmationText = confirmationBanner.text()
            cy.wrap(confirmationText).as('wrap')
            expect(confirmationText).to.equal('Radio button \'Male\' is checked')
        })
        //Doing the opposite
        cy.get('input[value=\'Female\'][name=\'optradio\']').should('be.visible')
        .check().and('be.checked')
        cy.get('input[value=\'Male\'][name=\'optradio\']').should('be.visible')
        .and('not.be.checked')
        cy.get('#buttoncheck').click()
        cy.get('.radiobutton').then((confirmationBanner)=>{
            let confirmationText = confirmationBanner.text()
            cy.wrap(confirmationText).as('wrap')
            expect(confirmationText).to.equal('Radio button \'Female\' is checked')
        })
    })

})