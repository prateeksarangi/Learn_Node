const request = require('request');

const forcast = (location, callback) => {
  const url = 'http://api.weatherstack.com/current?access_key=d28ac7afbe74e9246448e2a4c74d2b23&query=' + encodeURI(location.longitude) + ',' + encodeURI(location.latitude);

  request( { url: url, json: true }, (error, response) => {
    if ( error ) {
      callback('Unable to connect to the weather service!!');
    } else if ( response.body.error ) {
      callback('Unable to find location!!');
    } else {
      const weatherDetails = 'The current temperature is:- '+
      response.body.current.temperature+
      '. Temperature feels like:- '+
      response.body.current.feelslike+
      '. The weather is  '+
      response.body.current.weather_descriptions[0]+
      '  type.';
      callback(undefined, weatherDetails);
    };
  } );
};

module.exports = forcast;
