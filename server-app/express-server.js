/////////////
// Imports
/////////////

const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

/////////////
// Database
/////////////

const locations = [
  'Edmonton',
  'Toronto',
  'Winnipeg',
  'Vancouver',
  'St. John',
];

////////////////
// Initialization
////////////////

const app = express();
const PORT = 8500;

///////////////
// Middleware
///////////////

app.use(morgan('dev'));
app.use(cors()); // https://www.npmjs.com/package/cors

////////////
// Listener
////////////

app.listen(PORT, () => console.log('Express server running on port:', PORT));

///////////////
// Routes
///////////////

app.get('/api/locations', (req, res) => {
  res.json(locations);
});