const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const jobSchema = new mongoose.Schema({
  company: String,
  start_date: Date,
  end_date: Date,
  job_title: String,
  job_description: [String]
})

const Job = mongoose.model('Job', jobSchema)

router.get('/', async (req, res) => {
  try {
    const workHistory = await Job.find();
    workHistory.sort((a,b) => {
      return b.start_date - a.start_date;
    })
    if (!workHistory.end_date) {
      workHistory.end_date = 'Present'
    }
    res.send(workHistory);
  } catch (err) {
    console.error(err, 'Error getting work history');
  }
})

router.post('/new', async (req, res) => {
  try {
    console.log('request body: ', req.body);
    const input = req.body;
    const job = new Job({
      company: input.company,
      start_date: input.start_date,
      end_date: input.end_date,
      job_title: input.job_title,
      job_description: input.job_description
    })
    
    job
      .save()
      .then(
        () => console.log("One job added"),
        (err) => console.error(err)
      );
    res.sendStatus(200);
  } catch (err) {
    console.error(err, 'Unable to post to db');
  }
})

router.put('/update', (req, res) => {
  try {
    console.log(req.body);
  } catch (err) {
    console.error(err, 'Unable to update db');
  }
})

module.exports = router;