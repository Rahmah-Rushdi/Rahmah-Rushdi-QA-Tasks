///<reference types="cypress"/>

describe("Task2",()=>{

   beforeEach(()=>{
     // pre-condition (Given)
     cy.AdminAreaDemo()
     // action (When) 
     cy.get("#nopSideBarPusher").click()
     cy.contains("Catalog").click()
     cy.get("[href='/Admin/Product/List']").click({force:true})
     cy.get(".float-right").find("a").first().click()
     cy.get(".card-header").first().click({force:true})
     cy.get("#Name").type("Laptop123")
     
     cy.get(".select2-search__field").first().click();
     cy.get("#SelectedCategoryIds").select("Computers",{force:true});

     cy.get("#product-price").click({force:true})
     cy.get("#Price").clear().type("3000")
     cy.get("[name='save']").click()   
   })
    it('Add Product test case', () => {
        cy.screenshot({capture:"runner"})
        // assertions (Then)
        cy.get(".alert.alert-success").should("be.visible")
        .and("contain","The new product has been added successfully.")
       
        cy.get(".float-left").contains("Products").should("be.visible")
        cy.get("#delete-selected").should("be.visible")

       
    });
    it('Search for product test case', () => {
        cy.get(".card-body")
        cy.get(".row.search-row").click()
        cy.get("#SearchProductName").type("Laptop123")
        cy.get("#search-products").click({force:true})
        // assertions (Then)
        cy.get(".table.table-bordered").contains("Laptop123").should("be.visible")
        
    });
    it('Delete product test case', () => {
        cy.get(".card-body")
        cy.get(".row.search-row").click()
        cy.get("#SearchProductName").type("Laptop123")
        cy.get("#search-products").click({force:true})
        cy.wait(1000)
       cy.get("th > .mastercheckbox").first().click()
       cy.get("#delete-selected").click()
       cy.wait(1000)
       cy.get("#delete-selected-action-confirmation-submit-button").click()
       cy.get(".dataTables_empty").should("be.visible")
       .and("contain","No data available in table")
    });

});