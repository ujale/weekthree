// let loginDet
// let data
// let other

describe('Sign Up Journey', () => {
    // before(() => {
    //     cy.fixture('creds').then(cred => {
    //         loginDet = cred
    //     })
    //     cy.fixture('selectors').then(sel => {
    //         data = sel
    //         other = data.otherDetailsPage
    //     })
    // })
    it('A successful login with the newly onboarded user', () => {
        // cy.clickSpecifiedElement('Log in')
        // cy.typeAText(other.emailField,loginDet.email)
        // //cy.get(other.passwordField).should('be.visible').fill(loginDet.password)
        // cy.typeAText(other.passwordField,loginDet.password)
        // cy.clickSpecifiedElement('Login')
        // cy.clickSpecifiedElement('Welcome back')
        // cy.clickSpecifiedElement('Select a Plan')
        cy.Login()
    })
})