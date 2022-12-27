const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

const mongoUri = process.env.MONGO_URI;

mongoose.connect(
  mongoUri,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
)

// const jobSchema = new mongoose.Schema({
//   company: String,
//   start_date: String,
//   end_date: String,
//   job_title: String,
//   job_desscription: [String]
// })

// const Job = mongoose.model('Job', jobSchema)

// const job = new Job({
//   company: "Media Junction",
//   start_date: "October 2021",
//   end_date: "Present",
//   job_title: "Full Stack Engineer",
//   job_description: [
//     "Created website templates for HubSpot using HTML, javascript, jQuery, SCSS, CSS, and HubL",
//     "Integrated apis with the HubSpot CRM and CMS",
//     "Met with clients and potential clients to discuss their needs",
//     "Followed design documents in Figma while crating the templates"
//   ]
// })

// job
//   .save()
//   .then(
//     () => console.log("One job added"),
//     (err) => console.error(err)
//   );

app.get('/', (req, res) => {
  Job.find({}, (err, found) => {
    if (!err) {
      console.log(found);
      res.send(found);
    }

    console.error(err);
    res.send("Some error has occured");
  }).catch((err) => {
    console.error(err);
    console.log("Error occured");
  })
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})