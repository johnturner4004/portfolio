const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

const mongoUri = process.env.MONGO_URI;

connection().catch(err => console.error(err));

async function connection() {
  await mongoose.connect(
    mongoUri,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  )
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const workHistory = require('./routes/work-history.router');
const education = require('./routes/education.router');
const user = require('./routes/user.router');

app.use('/api/work-history', workHistory);
app.use('/api/education', education);
app.use('/api/user', user);

app.use(express.static('build'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})