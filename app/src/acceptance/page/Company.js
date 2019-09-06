const {Builder, By, Key, until} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');

module.exports = class Company {
    constructor(){
       

    }
    basicExample(){
        let driver = new Builder().forBrowser("chrome").build();
        console.log("----------------------------------------");

        try{

            driver.get('https://aptitus.com/empresa');
            console.log(driver.getTitle());

            console.log(driver.getTitle());
        } catch(err){
            console.log(err)

           // handleFailure(err, driver)
        }
    
    }
};
