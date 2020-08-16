const request = require('request');


const geocode = (address, callback) => {
  const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURI(address) + '.json?access_token=pk.eyJ1IjoicHJhdGVla3NhcmFuZ2k4MCIsImEiOiJja2R3dm1wb2kwbDRpMnRxaWpwNjk5NXAwIn0.6U9HEc_-TQvlEFXG96fIAQ&limit=1';

  request( { url: url, json: true }, (error, response) => {
    if ( error ) {
      callback('Unable to connet to location services!!');
    } else if ( response.body.features.length === 0 ) {
      callback('Unable to find location. Try another search!!');
    } else {
      callback(undefined, {
        latitude: response.body.features[0].center[0],
        longitude: response.body.features[0].center[1],
        location: response.body.features[0].place_name
      });
    }
  } );
};

module.exports = geocode;
