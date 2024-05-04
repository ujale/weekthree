import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
const { faker } = require("@faker-js/faker")
let data
let basic
let other
let iden


before(() => {
    cy.fixture('selectors').then(sel => {
        data = sel
        basic = data.basicDetailsPage
        other = data.otherDetailsPage
        iden = data.otpPage
    })
})



Given(/^I click "([^"]*)" button$/, (element) => {
	cy.clickSpecifiedElement(element)
});

// // method1
// When(/^I fill in the username$/, () => {
// 	cy.typeAText(basic.fullnameField,'Osman Shire');
// });

// method 2
When(/^I fill in the "([^"]*)" with data "([^"]*)"$/, (args1,args2) => {
	cy.fillDetails(args1,args2);
});


// When(/^I fill in the business name$/, () => {
// 	cy.typeAText(basic.businessnameField, 'Eniola');
// });

When(/^I insert the business email$/, () => {
	cy.insertEmail();
});

When(/^I insert a unique phone number$/, () => {
	cy.get(basic.businessPhoneNumberField).fill(faker.phone.number('+23480########'))
	//cy.typeAText(basic.businessPhoneNumberField, "faker.phone.number('+23480########')")

});

// When(/^I fill in the business registration number$/, () => {
// 	cy.typeAText(basic.businessRegNumberField,'RC-0987');
// 	//cy.fillDetails(args1,args2);
// });

// When(/^I click Next button$/, () => {
// 	cy.clickSpecifiedElement(element)
// });


When(/^I select "([^"]*)" as how I heard about Mima$/, (text) => {
	cy.heardAboutUs(text);
});

// When(/^I fill in the password$/, () => {
// 	cy.get(other.passwordField).fill('Test1234@')
// });

When(/^I click Sign Up button$/, () => {
	cy.clickSpecifiedElement(element)
});

Then(/^I should see the OTP page$/, () => {
	cy.verifyOtpPage();
});

When(/^I insert the OTP$/, () => {
	cy.insertOTP();
});


Then(/^I should see the following on the dashboard$/, (datatable) => {
	datatable.hashes().forEach((row) => {
		cy.contains(row.Sidebar).should('exist').and('contain', row.Sidebar)
	});
});
// Then(/^I should see the dashboard$/, () => {
// 	cy.clickSpecifiedElement('Welcome back');
//     //cy.clickSpecifiedElement('Select a Plan');
// });


// When(/^I fill in the "([^"]*)"$/, (args1) => {
// 	cy.insertDetails(args1)
// });




// const { faker } = require("@faker-js/faker")
// let data
// let basic
// let other
// let iden
// let inboxId
// let emailAddress

// describe('Sign Up Journey', () => {
//     before(() => {
//         cy.fixture('selectors').then(sel => {
//             data = sel
//             basic = data.basicDetailsPage
//             other = data.otherDetailsPage
//             iden = data.otpPage
//         })
//     })
//     it('A successful sign up with all fields filled', () => {
//         cy.visit('/')
//         cy.contains('Sign up').should('be.visible').click()
//         cy.get(basic.fullnameField).should('be.visible').fill('Osman Shire')
//         cy.get(basic.businessnameField).fill('Eniola')
//         cy.mailslurp().then(mailslurp => mailslurp.createInbox().then(inbox => {
//             inboxId = inbox.id
//             emailAddress = inbox.emailAddress
//             cy.get(basic.businessEmailField).fill(emailAddress)

//             const userDetails = `
//                     {
//                         "email": "${emailAddress}",
//                         "password": "Test1234@"
//                     }
//             `
//             cy.writeFile('cypress/fixtures/creds.json', userDetails)
//         }))
//         cy.get(basic.businessPhoneNumberField).fill(faker.phone.number('+23480########'))
//         cy.get(basic.businessRegNumberField).fill('RC-0987')
//         cy.contains('Next').click()
//         cy.get(other.WebField).should('be.visible').fill('https://www.osmanshire.org')
//         cy.get(other.igField).fill('@osmanshire')
//         cy.get(other.xField).fill('@osmanshire')
//         cy.get(other.heardAboutUs).click()
//         cy.contains('Google Search').should('be.visible').click()
//         cy.get(other.passwordField).fill('Test1234@')
//         cy.contains('Sign Up').click()
//         cy.mailslurp().then(mailslurp => mailslurp.waitForLatestEmail(inboxId, 30000, true).then(email => {
//             const emailBody = email.body
//             const parser = new DOMParser()
//             const doc = parser.parseFromString(emailBody, "text/html")
//             const code = doc.querySelector('tr:nth-of-type(2) > td > table td > p:nth-of-type(3) > strong').textContent
//             const otp = code.trim()
//             cy.get(iden.inputBox).each(($el, index) => {
//                 cy.wrap($el).should('be.visible').type(otp[index])
//             })
//         }))
//         cy.contains('Welcome back').should('exist').and('be.visible')
//         cy.contains('Select a Plan').should('be.visible')
//     })
// })