class SauceDemoPageElements 
{
    
    userNameField= '#user-name';
    passwordField = '#password';
    loginBtn= '#login-button';
    filterOption = '.product_sort_container'
    lowToHigh = 'lohi'
    highToLow = 'hilo'
    zToA = 'za'
    aToZ = 'az'
    inventory = '.inventory_item_name'
    testAllThingsShirt = '[data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]'
    FleeceJacket = '[data-test="add-to-cart-sauce-labs-fleece-jacket"]'
    backPack = '[data-test="add-to-cart-sauce-labs-backpack"]'
    bikeLight = '[data-test="add-to-cart-sauce-labs-bike-light"]'
    cart = '.shopping_cart_link'
    removeTestAllThings= '[data-test="remove-test.allthethings()-t-shirt-(red)"]'
    removeBikeLights = '[data-test="remove-sauce-labs-bike-light"]'
    checkOut = '[data-test="checkout"]'
    firstNameField = '[data-test="firstName"]'
    lastNameField = '[data-test="lastName"]'
    postalCodeField = '[data-test="postalCode"]'
    continueButton = '[data-test="continue"]'
    finishButton= '[data-test="finish"]'
    backHomeBtn= '[data-test="back-to-products"]'
    burgermenu =  '#react-burger-menu-btn'
    logOut = '#logout_sidebar_link'



 
 
 setUserName(username)
 {
     cy.get(this.userNameField).type(username)
 }
 
 setPassword(password)
 {
     cy.get(this.passwordField).type(password)
 }
 
 clickLogin()
 {
     cy.get(this.loginBtn).click()
     cy.url().should('include', '/inventory.html');
     
 }
 
 sortByLowPrice()
 {
    cy.get(this.filterOption).select(this.lowToHigh)
    cy.get(this.inventory).eq(0).should("have.text", "Sauce Labs Onesie");
    cy.get(this.inventory).eq(1).should("have.text", "Sauce Labs Bike Light");
    cy.get(this.inventory).eq(2).should("have.text", "Sauce Labs Bolt T-Shirt");
    cy.get(this.inventory).eq(3).should("have.text", "Test.allTheThings() T-Shirt (Red)");
    cy.get(this.inventory).eq(4).should("have.text", "Sauce Labs Backpack");
    cy.get(this.inventory).eq(5).should("have.text", "Sauce Labs Fleece Jacket");
    
 }
 
 sortByHighPrice()
 {
    cy.get(this.filterOption).select(this.highToLow)
    cy.get(this.inventory).eq(0).should("have.text", "Sauce Labs Fleece Jacket");
    cy.get(this.inventory).eq(1).should("have.text", "Sauce Labs Backpack");
    cy.get(this.inventory).eq(2).should("have.text", "Sauce Labs Bolt T-Shirt");
    cy.get(this.inventory).eq(3).should("have.text", "Test.allTheThings() T-Shirt (Red)");
    cy.get(this.inventory).eq(4).should("have.text", "Sauce Labs Bike Light");
    cy.get(this.inventory).eq(5).should("have.text", "Sauce Labs Onesie");
    
 }

 sortByAtoZ()
 {
    cy.get(this.filterOption).select(this.aToZ)
    cy.get(this.inventory).eq(0).should("have.text", "Sauce Labs Backpack");
    cy.get(this.inventory).eq(1).should("have.text", "Sauce Labs Bike Light");
    cy.get(this.inventory).eq(2).should("have.text", "Sauce Labs Bolt T-Shirt");
    cy.get(this.inventory).eq(3).should("have.text", "Sauce Labs Fleece Jacket");
    cy.get(this.inventory).eq(4).should("have.text", "Sauce Labs Onesie");
    cy.get(this.inventory).eq(5).should("have.text", "Test.allTheThings() T-Shirt (Red)");
 }

 sortByZtoA()
 {
    cy.get(this.filterOption).select(this.zToA)
    cy.get(this.inventory).eq(0).should("have.text", "Test.allTheThings() T-Shirt (Red)");
    cy.get(this.inventory).eq(1).should("have.text", "Sauce Labs Onesie");
    cy.get(this.inventory).eq(2).should("have.text", "Sauce Labs Fleece Jacket");
    cy.get(this.inventory).eq(3).should("have.text", "Sauce Labs Bolt T-Shirt");
    cy.get(this.inventory).eq(4).should("have.text", "Sauce Labs Bike Light");
    cy.get(this.inventory).eq(5).should("have.text", "Sauce Labs Backpack");
 }

 addTestAllThingsShirtToCart()
 {
    cy.get(this.testAllThingsShirt).click()
 }

 addFleeceJacketToCart()
 {
    cy.get(this.FleeceJacket).click()
 }

addBackPackToCart()
{
    cy.get(this.backPack).click()
}

addBikeLightToCart()
{
    cy.get(this.bikeLight).click()
}

viewCart()
{
    cy.get(this.cart).click()
    cy.contains('Test.allTheThings() T-Shirt (Red)').should('exist');
    cy.contains('Sauce Labs Fleece Jacket').should('exist');
    cy.contains('Sauce Labs Backpack').should('exist');
    cy.contains('Sauce Labs Bike Light').should('exist');
}

removeBikeLightFromCart()
{
    cy.get(this.cart).click()
    cy.get(this.removeBikeLights).click()
    cy.contains('Sauce Labs Bike Light').should('not.exist');
}

removeTestAllThingsShirtFromCart()
 {
   
    cy.get(this.removeTestAllThings).click()
    cy.contains('Test.allTheThings() T-Shirt (Red)').should('not.exist');
 }

 checkOutCart()
 {
    cy.get(this.checkOut).click()


    cy.get(this.firstNameField).type("Olaoluwa")
    cy.get(this.lastNameField).type("Oladokun")
    cy.get(this.postalCodeField).type("12345")
    cy.get(this.continueButton).click()
    cy.get(this.finishButton).click()
    cy.get(this.backHomeBtn).click()
    cy.get(this.burgermenu).click()
    cy.get(this.logOut).click();


    


 }

}

export default SauceDemoPageElements;
