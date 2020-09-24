const path = require('path');
const http = require('http');
const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

const port = process.env.PORT || 5000;

const publicDir = path.join( __dirname, '../public' );
const viewDir = path.join( __dirname, '../templates/views' );

app.set ('views', viewDir);

app.use (express.static(viewDir));

app.get ('/', ( req, res ) => {
  res.render('index');
});

io.on('connection', ( ) => {
  console.log('New websocket connected!!');
});

server.listen ( port, ( ) => {
  console.log(`Server is running at port: ${port}!`);
} );
