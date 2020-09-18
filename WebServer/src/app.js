const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();

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
    head: 'Head of root page',
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

app.get ('/about', ( req, res ) => {
  res.render('about', {
    title: 'About',
    head: 'About page head',
    name: 'Prateek'
  });
});

app.get ('/weather', ( req, res ) => {
  res.send('Inside weather page');
});

app.get ('*', ( req, res ) => {
  res.send('404 error page');
});

app.listen ( 5000, ( ) => {
  console.log('Server is running!');
} );
