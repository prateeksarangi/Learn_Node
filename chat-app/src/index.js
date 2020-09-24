const path = require('path');
const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

const publicDir = path.join( __dirname, '../public' );
const viewDir = path.join( __dirname, '../templates/views' );

app.set ('views', viewDir);

app.use (express.static(viewDir));

app.get ('/', ( req, res ) => {
  res.render('index');
});

app.listen ( port, ( ) => {
  console.log(`Server is running at port: ${port}!`);
} );
