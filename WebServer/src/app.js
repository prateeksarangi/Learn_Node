const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join( __dirname, '../public' )));

app.get ('/', ( req, res ) => {
  res.render('index', {
    title: 'Weather',
    name: 'Prateek'
  });
});

app.get ('/help', ( req, res ) => {
  res.send('Inside help page');
});

app.get ('/about', ( req, res ) => {
  res.render('about', {
    title: 'About',
    head: 'About pade HBS'
  });
});

app.get ('/weather', ( req, res ) => {
  res.send('Inside weather page');
});


app.listen ( 5000, ( ) => {
  console.log('Server is running!');
} );
