const geocode = require('./utils/geocode.js');
const forcast = require('./utils/forcast.js');

const findWeather = process.argv[2];

if (!findWeather) {
  console.log('Provide a location to search for!!');
} else {
  geocode(findWeather, (error, data) => {
    if (error) {
      return console.log(error);
    }
    const location = {longitude: data.longitude,
      latitude: data.latitude};
    forcast(location, (error, forcastData) => {
      if (error) {
        return console.log(error);
      }

      console.log(data.location);
      console.log(forcastData);
    });
  });
}
