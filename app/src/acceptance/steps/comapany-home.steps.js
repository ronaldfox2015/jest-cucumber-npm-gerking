const defineSupportCode = require('cucumber').defineSupportCode;
const {Builder, By, Key, until} = require('selenium-webdriver');
const Company = require('../page/Company');

//const jsonpath = require('jsonpath');
const expect = require('unexpected');
//const browser = require("browser");

defineSupportCode(function ({ Given, When, Then }) {
  Given("que el usuario se encuentra en el home de empresa", async function () {
    
    const response = new Company();
    await response.basicExample();

  });

  When('dé click al botón de {seleccion}', function (seleccion) {
    console.log(seleccion)
    //return requester.post('api/insecure', { name: newName });
  });

  Then('se debe redirigir a la url {redirec}', function (redirec) {
    // 
    console.log(redirec)

  });
});