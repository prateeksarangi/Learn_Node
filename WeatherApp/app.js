const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=d28ac7afbe74e9246448e2a4c74d2b23&query=37.8267,-122.4233&units=s';

request( { url: url, json: true }, (error, response) => {
  // console.log(response);
  // console.log(response.body.current);
  console.log('The current temperature is:- ', response.body.current.temperature);
  console.log('Temperature feels like:- ', response.body.current.feelslike);
  console.log('The weather is ', response.body.current.weather_descriptions[0], ' type.');
} );
