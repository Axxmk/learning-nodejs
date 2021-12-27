const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const location = process.argv[2];

if (!location) {
	return console.log("Please provide location in command.");
}

geocode(location, (error, { latitude, longitude, place_name } = {}) => {
	if (error) {
		return console.log(error);
	}

	forecast(latitude, longitude, (error, data) => {
		if (error) {
			return console.log(error);
		}

		console.log("Location: " + place_name);
		console.log("Weather: " + data);
	})
})

