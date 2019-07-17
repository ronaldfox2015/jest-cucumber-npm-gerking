const defineSupportCode = require('cucumber').defineSupportCode;
//const jsonpath = require('jsonpath');
const expect = require('unexpected');
const requester = require('./requester');
//const browser = require("browser");

defineSupportCode(function ({ When, Then }) {
  When("I'm generating a cart:", function(data) {
      console.log("------------------------------");
      console.log(data);

 
      
      console.log("------------------------------");
      const response = requester.post('checkout',
                {
                    "grant_type": "client_credentials",
                    "client_id": "0a8a9af1-edb1-3d95-bcea-fad0a635dc71",
                    "client_secret": "07cc46fe-5ca8-4c22-b382-6cb91a3bba31",
                    "document_type": "RUC",
                    "document_number": "20421574813",
                    "trade_name": "empresa-prueba",
                    "via": "AL",
                    "address": "fugku",
                    "door_number": "1234",
                    "payment_method": paymentMethod,
                    "customer_id": "3398504",
                    "name": "Admin",
                    "last_name": "admin-soporte",
                    "email": "emp.prueba@ecodigital.pe",
                    "entity_name": "Empresa",
                    "entity_id": "203654",
                    "cart_id": "5284db73-5e5f-43e6-bdf5-aa98d8936a24",
                    "url_ok": "https://dev4c.aptitus.com/empresa/pago/ok-pe-asyn/payment_method/pe/customer/203654/user/3398504",
                    "url_error": "https://dev4c.aptitus.com/empresa/comprar-producto/cart/5284db73-5e5f-43e6-bdf5-aa98d8936a24#payment-view",
                    "url_cip": "https://dev4c.aptitus.com/empresa/comprar-producto/pago-efectivo/r/",
                    "payment_url": "https://dev4c.aptitus.com/empresa/comprar-producto/cart/5284db73-5e5f-43e6-bdf5-aa98d8936a24#payment-view",
                    "voucher_number": "",
                    "bank_name": "",
                    "card_type": "",
                    "batch_number": "",
                    "purchase_number": "",
                    "issued_at": "",
                    "responsible": "",
                    "way_to_pay": "",
                    "call_center_id": "",
                    "state": null
                }
      );

    return response;
  });

  When('I update the Insecure Resource to have name {stringInDoubleQuotes}', function (newName) {
      //return requester.post('api/insecure', { name: newName });
  });

  Then('the Insecure Resource has details:', function(data) {
      // 
  });
});