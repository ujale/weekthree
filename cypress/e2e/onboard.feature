Feature: SignUp Journey

    As a new user, I should be able to signup successfully

    Scenario Outline: Successful registration with valid credentials choosing <option>.
        Given I click "Sign up" button
        When I fill in the "fullname" with data "Mercy Ayegbeni"
        And I fill in the "businessname" with data "Mercy"
        And I insert the business email
        And I insert a unique phone number
        And I fill in the "businessRegNum" with data "RC-3456"
        And I click "Next" button
        And I select "<option>" as how I heard about Mima
        And I fill in the "password" with data "Test1234@"
        And I click "Sign Up" button
        Then I should see the OTP page
        When I insert the OTP
        Then I should see the following on the dashboard
            | Sidebar                 |
            | Home                 |
            | Customer             |
            | Invoice & Accounting |
            | Orders               |
            | Payment Link         |
            | Booking              |
            | Paybills             |
        
        Examples:
            | option | 
            | Twitter |
            | Instagram |
            | Facebook|
