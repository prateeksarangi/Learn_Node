const path = require('path');
const express = require('express');
const hbs = require('hbs');

const geocode = require('./utils/geocode.js');
const forcast = require('./utils/forcast.js');

const app = express();
const port = process.env.PORT || 5000;

const publicDir = path.join( __dirname, '../public' );
const viewDir = path.join( __dirname, '../templates/views' );
const partialDir = path.join( __dirname, '../templates/partials' );

app.set ('view engine', 'hbs');
app.set ('views', viewDir);
hbs.registerPartials(partialDir);

app.use (express.static(publicDir));

app.get ('/', ( req, res ) => {
  res.render('index', {
    title: 'Weather',
    head: 'Weather Application',
    name: 'Prateek'
  });
});

app.get ('/help', ( req, res ) => {
  res.render('help', {
    message: 'This is the help page',
    title: 'Help',
    head: 'Head of the help page',
    name: 'Prateek'
  });
});

app.get ('/help/*', ( req, res ) => {
  res.render('help404', {
    header: '404 Help',
    message: 'Help article not found',
    name: 'Prateek'
  });
});

app.get ('/about', ( req, res ) => {
  res.render('about', {
    title: 'About',
    head: 'About page head',
    name: 'Prateek'
  });
});

app.get ('/weather', ( req, res ) => {
  if (!req.query.address) {
    return res.send({
      error: 'You must provide a address term!!'
    });
  }

  geocode(req.query.address, (error, data) => {
    if (error) {
      return res.send({
        error
      });
    }
    const location = {longitude: data.longitude,
      latitude: data.latitude};
    forcast(location, (error, forcastData) => {
      if (error) {
        return res.send({
          error
        });
      }

      res.send({
        forcast: forcastData,
        location: location,
        address: data.location
      });
    });
  });
});

app.get ('/products', ( req, res ) => {
  if (!req.query.search) {
    return res.send({
      error: 'You must provide a search term!!'
    });
  }

  console.log(req.query);

  res.send({
    products: []
  });
});

app.get ('*', ( req, res ) => {
  res.render('404', {
    header: '404 Page',
    message: '404 page not found',
    name: 'Prateek'
  });
});

app.listen ( port, ( ) => {
  console.log('Server is running at port ' + port );
} );
