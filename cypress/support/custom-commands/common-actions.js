let loginDet
let data
let basic
let other
let iden
let inboxId
let emailAddress


before(() => {
    cy.fixture('creds').then(cred => {
        loginDet = cred
    })
    cy.fixture('selectors').then(sel => {
        data = sel
        basic = data.basicDetailsPage
        other = data.otherDetailsPage
        iden = data.otpPage
    })
})

Cypress.Commands.add('clickSpecifiedElement', (text) => {
    cy.contains(text).should('exist').and('be.visible').click()
})
//method 1
Cypress.Commands.add('typeAText', (field, text) => {
    cy.get(field).should('be.visible').and('exist').fill(text)
})
// method 2
Cypress.Commands.add('fillDetails', (field, text) => {
    cy.get(`#${field}`).should('be.visible').and('exist').fill(text)
})
Cypress.Commands.add('verifyOtpPage', () => {
    cy.get(iden.otpVerification).should('be.visible').and('have.text', 'Please enter the code below')
})

Cypress.Commands.add('heardAboutUs', (element) => {
    cy.get(other.heardAboutUs).should('be.visible').and('exist').click()
    cy.get(other.aboutUsList).contains(element).should('exist').click()
})

Cypress.Commands.add('insertDetails', (string) => {
    switch (string) {
        case 'username':
            cy.typeAText(basic.fullnameField, 'Osman Shire');
            break
        case 'business name':
            cy.typeAText(basic.businessnameField, 'Eniola');
            break
        case 'business reg number':
            cy.typeAText(basic.businessRegNumberField, 'RC-9976');

    }
})

Cypress.Commands.add('insertEmail', () => {
    cy.mailslurp().then(mailslurp => mailslurp.createInbox().then(inbox => {
        inboxId = inbox.id
        emailAddress = inbox.emailAddress
        cy.get(basic.businessEmailField).fill(emailAddress)

        const userDetails = `
                    {
                        "email": "${emailAddress}",
                        "password": "Test1234@"
                    }
            `
        cy.writeFile('cypress/fixtures/creds.json', userDetails)
    }))
})

Cypress.Commands.add('insertOTP', () => {
    cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true).then(email => {
        const emailBody = email.body
        const parser = new DOMParser()
        const doc = parser.parseFromString(emailBody, "text/html")
        const code = doc.querySelector('tr:nth-of-type(2) > td > table td > p:nth-of-type(3) > strong').textContent
        const otp = code.trim()
        cy.get(iden.inputBox).each(($el, index) => {
            cy.wrap($el).should('be.visible').type(otp[index])
        })
    }))
})

Cypress.Commands.add('Login', () => {
    cy.clickSpecifiedElement('Log in')
    cy.typeAText(other.emailField, loginDet.email)
    cy.typeAText(other.passwordField, loginDet.password)
    cy.clickSpecifiedElement('Login')
    cy.clickSpecifiedElement('Welcome back')
    cy.clickSpecifiedElement('Select a Plan')
})


