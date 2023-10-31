import SauceDemoPageElements from "../pageObjects/sauceDemoPOM";
import { clear } from "console"


const sauceDemo = new SauceDemoPageElements();

describe('Login', () => {

  beforeEach(() => {
    
    cy.visit('/')
    
  })
  
  it('Logs in with valid credentials', () => {
    sauceDemo.setUserName('standard_user')
     sauceDemo.setPassword('secret_sauce')
     sauceDemo.clickLogin() 
     
     
 });

it('Fliter Invetory', () => {
  sauceDemo.setUserName('standard_user')
  sauceDemo.setPassword('secret_sauce')
  sauceDemo.clickLogin() 
   sauceDemo.sortByLowPrice()
   sauceDemo.sortByHighPrice()
   sauceDemo.sortByAtoZ()
   sauceDemo.sortByZtoA()
});

it('add items to cart, remove items from cart, checkout and log out', () => {
  sauceDemo.setUserName('standard_user')
     sauceDemo.setPassword('secret_sauce')
     sauceDemo.clickLogin() 
 sauceDemo.addTestAllThingsShirtToCart()
 sauceDemo.addBackPackToCart()
 sauceDemo.addBikeLightToCart()
 sauceDemo.addFleeceJacketToCart()
 
 //to view items in cart
 sauceDemo.viewCart 

 //to remove items from cart
 sauceDemo.removeBikeLightFromCart()
 sauceDemo.removeTestAllThingsShirtFromCart()

 // to checkout and log out
 sauceDemo.checkOutCart()

});


});

