const express = require('express');
const app = express();

app.get ('/', ( req, res ) => {
  res.send('Hello express!');
} );

app.get ('/help', ( req, res ) => {
  res.send('Inside help page');
});

app.get ('/about', ( req, res ) => {
  res.send('Inside about page');
});

app.get ('/weather', ( req, res ) => {
  res.send('Inside weather page');
});

app.listen ( 5000, ( ) => {
  console.log('Server is running!');
} );
