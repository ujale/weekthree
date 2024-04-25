
// const { faker } = require("@faker-js/faker")
// let data
// let basic
// let other
// describe('Sign Up Journey', () => {
//   before(()=>{
//     cy.fixture('selectors').then(sel=>{
//       data = sel
//       basic = data.basicDetailsPage
//       other = data.otherDetailsPage
//     })
//   })
//   beforeEach(()=>{
//     cy.contains('Sign up').should('be.visible').click()
//     cy.get(basic.fullnameField).should('be.visible').fill('Osman Shire')
//     cy.get(basic.businessnameField).fill('Eniola')
//     cy.get(basic.businessEmailField).fill(faker.internet.email())
//     cy.get(basic.businessPhoneNumberField).fill(faker.phone.number('+23480########'))
//     cy.get(basic.businessRegNumberField).fill('RC-0987')
//     cy.contains('Next').click() 
//   })
//   it('A successful sign up with all fields filled', () => {
//     cy.get(other.WebField).should('be.visible').fill('https://www.osmanshire.org')
//     cy.get(other.igField).fill('@osmanshire')
//     cy.get(other.xField).fill('@osmanshire')
//     cy.get(other.heardAboutUs).click()
//     cy.contains('Google Search').should('be.visible').click()
//     cy.get(other.passwordField).fill('Test1234@')
//     cy.contains('Sign Up').click()
    
//   })

//   it('A successful sign up with only required fields filled', () => {
//     cy.get(other.heardAboutUs).click()
//     cy.contains('Google Search').should('be.visible').click()
//     cy.get(other.passwordField).fill('Test1234@')
//     cy.contains('Sign Up').click()
//   })

//   it('A successful sign up with Google Search Option', () => {
//     cy.get(other.WebField).should('be.visible').fill('https://www.osmanshire.org')
//     cy.get(other.igField).fill('@osmanshire')
//     cy.get(other.xField).fill('@osmanshire')
//     cy.get(other.heardAboutUs).click()
//     cy.contains('Google Search').should('be.visible').click()
//     cy.get(other.passwordField).fill('Test1234@')
//     cy.contains('Sign Up').click()
//   })

//   it('A successful sign up with Instagram Option', () => {
//     cy.get(other.WebField).should('be.visible').fill('https://www.osmanshire.org')
//     cy.get(other.igField).fill('@osmanshire')
//     cy.get(other.xField).fill('@osmanshire')
//     cy.get(other.heardAboutUs).click()
//     cy.contains('Instagram').should('be.visible').click()
//     cy.get(other.passwordField).fill('Test1234@')
//     cy.contains('Sign Up').click()
//   })

//   it('A successful sign up with Facebook Option', () => {
//     cy.get(other.WebField).should('be.visible').fill('https://www.osmanshire.org')
//     cy.get(other.igField).fill('@osmanshire')
//     cy.get(other.xField).fill('@osmanshire')
//     cy.get(other.heardAboutUs).click()
//     cy.contains('Facebook').should('be.visible').click()
//     cy.get(other.passwordField).fill('Test1234@')
//     cy.contains('Sign Up').click()
//   })

//   it('A successful sign up with Twitter Option', () => {
//     cy.get(other.WebField).should('be.visible').fill('https://www.osmanshire.org')
//     cy.get(other.igField).fill('@osmanshire')
//     cy.get(other.xField).fill('@osmanshire')
//     cy.get(other.heardAboutUs).click()
//     cy.contains('Twitter').should('be.visible').click()
//     cy.get(other.passwordField).fill('Test1234@')
//     cy.contains('Sign Up').click()
//   })

//   it('A successful sign up with Others Option', () => {
//     cy.get(other.WebField).should('be.visible').fill('https://www.osmanshire.org')
//     cy.get(other.igField).fill('@osmanshire')
//     cy.get(other.xField).fill('@osmanshire')
//     cy.get(other.heardAboutUs).click()
//     cy.contains('Others').should('be.visible').click()
//     cy.get(other.passwordField).fill('Test1234@')
//     cy.contains('Sign Up').click()
//   })
// })