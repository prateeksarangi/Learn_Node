const path = require('path');
const express = require('express');

const app = express();

app.set('view engine', 'hbs');
app.use(express.static(path.join( __dirname, '../public' )));

app.get ('/', ( req, res ) => {
  res.render('index');
});

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
