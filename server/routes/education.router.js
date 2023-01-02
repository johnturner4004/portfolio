const mongoose = require('mongoose');
const express = require('express');

const router = express.Router();

const schoolSchema = new mongoose.Schema({
  school: String,
  start_date: Date,
  end_date: Date,
  major: String,
  education_description: [String]
})

const School = mongoose.model('School', schoolSchema)

router.get('/', async (req, res) => {
  try {
    const education = await School.find();
    education.sort((a,b) => {
      return b.start_date - a.start_date;
    })
    if (!education.end_date) {
      education.end_date = 'Present'
    }
    res.send(education);
  } catch (err) {
    console.error(err, 'Error getting education');
  }
})

router.post('/new', async (req, res) => {
  try {
    const input = req.body;
    const school = new School({
      school: input.school,
      start_date: input.start_date,
      end_date: input.end_date,
      major: input.major,
      education_description: input.education_description
    })
    
    school
      .save()
      .then(
        () => console.log("One school added"),
        (err) => console.error(err)
      );
    res.sendStatus(200);
  } catch (err) {
    console.error(err, 'Unable to post to db');
  }
})

router.put('/update', async (req, res) => {
  try {
    const change = req.body;
    const response = await School.findByIdAndUpdate(change.id, change.update);
    console.log(response)
    res.sendStatus(200);
  } catch (err) {
    console.error(err, 'Unable to update db');
  }
});

router.delete('/delete/:id', async (req,res) => {
  const id = req.params.id;
  const result = await School.deleteOne({ _id: id });
  console.log(result);
  res.sendStatus(200);
});

module.exports = router;