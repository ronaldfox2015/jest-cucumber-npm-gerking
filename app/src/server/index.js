const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./config');
require('./authentication/accesstoken');
require('./authentication/basic');

const app = express();

app.use(passport.initialize());
app.use(bodyParser.json());

let name = 'Graham';

app.get('/api/insecure', (req, res) => {
	res.send({
		answer: 42,
		name: name
	});
});

app.post('/api/reset', (req, res) => {
	name = 'Graham';
	res.send();
});

app.post('/api/insecure', (req, res) => {
	name = req.body.name;
	res.send({
		answer: 42,
		name: name
	});
});

app.get('/api/list', (req, res) => {
	res.send({
		offset: 0,
		total: 100,
		data: [
			{
				id: 1,
				name: 'One'
			},
			{
				id: 2,
				name: 'Two'
			},
			{
				id: 3,
				name: 'Three'
			},
			{
				id: 4,
				name: 'Four'
			},
			{
				id: 5,
				name: 'Five'
			},
		]
	});
});

app.get('/api/secure',
	passport.authenticate('bearer', { session: false }),
	(req, res) => {
		res.send(req.user);
	});

app.get('/api/auth',
	passport.authenticate('basic', { session: false }),
	(req, res) => {
		res.send({
			'token_type': 'Bearer',
			'access_token': 'abc123'
		});
	});

const port = config.get('http.port');
app.listen(port, () => {
	console.log('Server listening on port ' + port);
});
