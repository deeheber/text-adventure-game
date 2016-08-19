const express = require('express');
const app = express();

// app.use( ( req, res, next ) => {
//   const url = '*';
//   res.header( 'Access-Control-Allow-Origin', url );
//   res.header( 'Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, DELETE' );
//   res.header( 'Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept' );
//   next();
// });

app.use( express.static( __dirname + '/public' ) );

app.listen(3000);
