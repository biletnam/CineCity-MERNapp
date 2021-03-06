const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const movies = require('./routes/api/movies');

const app = express();

//BodyParser Middleware
app.use(bodyParser.json());

//DB config
const db = require('./config/config').mongoURI;

//Connect to Mongo
mongoose
  .connect(db, ({useNewUrlParser: true}))
  .then(() => console.log('MongoDB is connected.'))
  .catch(err => console.log('err'));

//Use routes
app.use('/api/movies', movies);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
