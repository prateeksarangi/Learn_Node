const express = require('express');
const app = express();

app.get ('/', ( req, res ) => {
  res.send('Hello express!');
} );

app.listen ( 5000, ( ) => {
  console.log('Server is running!');
} )
