const sizes = ["iphone-6", "ipad-mini"]

describe('Visual regression test for Sports betting Home Page', () => {
    sizes.forEach(size => {
        it('Sports-betting : Home Page Test', () => {
            cy.setResolution(size)
            cy.server()
            cy.route("GET", "/Bet/GetBrandPayoutLimits").as("waitForApi")
            cy.visit("https://www.betway.co.za/")
            cy.wait("@waitForApi").its("status").should("eq", 200)
            matchImageSnapshot()
        })

        it('Sports-betting : Login Page', () => {
            cy.setResolution(size)
            cy.server()
            cy.route("GET", "/Bet/GetBrandPayoutLimits").as("waitForApi")
            cy.visit("https://www.betway.co.za/")
            cy.wait("@waitForApi").its("status").should("eq", 200)
            cy.get("#LoginModalPopUp").click()

            cy.wait(5000)
            cy.get(".modal-body")
            .matchImageSnapshot()
        })
    })
})