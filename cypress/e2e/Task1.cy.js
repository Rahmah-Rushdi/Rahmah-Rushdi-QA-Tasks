///<reference types="cypress"/>

describe("Task1",()=>{

    it("Selectors Task1",()=>{
        cy.visit("/register")
        cy.get(".navbar-brand")
        cy.get(".navbar-nav ").find("a").contains("Home")
        cy.get(".navbar-nav a ").contains("Sign up")
        cy.get("h1")
        cy.contains("Have an account?")
        cy.get("[type='text']")
        cy.get("form").find("fieldset").eq(2)
        cy.get("form").find("fieldset").last()
        cy.get("form").find("fieldset").last().next()
        cy.get('[type="submit"]')
        cy.get("footer a").contains("conduit")
        cy.get("footer span")
    })
   
});
