const express = require('express');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();

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

const jobSchema = new mongoose.Schema({
  company: String,
  start_date: String,
  end_date: String,
  job_title: String,
  job_desscription: [String]
})

const Job = mongoose.model('Job', jobSchema)

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

app.get('/api/work-history', async (req, res) => {
  try {
    const workHistory = await Job.find();
    console.log(workHistory)
    res.send(workHistory);
  } catch (err) {
    console.error(err);
  }
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})