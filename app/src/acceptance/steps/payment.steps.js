const defineSupportCode = require('cucumber').defineSupportCode;
//const jsonpath = require('jsonpath');
const expect = require('unexpected');
const requester = require('./requester');
//const browser = require("browser");

defineSupportCode(function ({ When, Then }) {
  When("I'm generating a cart with the user {customer_id}:", function (customer_id, data) {
    data = data.hashes();
    const products = [];
    data.forEach((item) => {
      products.push({
        id: item['product_id'],
        quantity: item['quantity']
      });
    });

    return requester.post('v1/payment/cart/update', {
      grant_type: "client_credentials",
      client_id: "0a8a9af1-edb1-3d95-bcea-fad0a635dc71",
      client_secret: "07cc46fe-5ca8-4c22-b382-6cb91a3bba31",
      customer_id: customer_id,
      products: products,
      cart_id: "",
      state: null
    });
  });

  When('I update the Insecure Resource to have name {stringInDoubleQuotes}', function (newName) {
    //return requester.post('api/insecure', { name: newName });
  });

  Then('the Insecure Resource has details:', function (data) {
    // 
  });
});