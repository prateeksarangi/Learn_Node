const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=d28ac7afbe74e9246448e2a4c74d2b23&query=37.8267,-122.4233';

request( { url: url }, (error, response) => {
  // console.log(response);
  const data = JSON.parse(response.body);
  console.log(data.current);
} );
