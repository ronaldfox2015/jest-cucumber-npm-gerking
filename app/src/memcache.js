var memjs = require('memjs');

var client = memjs.Client.create('52.214.56.32:11410')

client.get('cn5n3nep7j1ljt5t5tim6tdqfj3liq8e', function(err, val) { console.log(val); })

client.get('jctqhh9n6cpoe83fv5dsdnn790ojf5fh', function(err, val) { console.log(val); })