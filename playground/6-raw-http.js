const http = require('http')

const weather_apiKey = '9600987fbff5b91022fcd89869b84f02';
const url = `http://api.weatherstack.com/current?access_key=${weather_apiKey}&query=40,-75&units=f`;

const req = http.request(url, (res) => {
	let data = '';

	res.on('data', (chunk) => {
		data += chunk.toString();
	})

	res.on('end', () => {
		const body = JSON.parse(data);
		console.log(body);
	})
})

req.on('error', (e) => {
	console.log(e);
})

req.end();