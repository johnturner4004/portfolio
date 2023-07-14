import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import FilledInput from '@mui/material/FilledInput'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import TextField from '@mui/material/TextField'
import moment from 'moment/moment'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

export default function NewEducation() {
  const dispatch = useDispatch()

  const [formState, setFormState] = useState()
  const [count, setCount] = useState(0)

  const submit = () => {
    if (
      formState.school
      && formState.start_date
      && formState.major
      && formState.education_description) {
      dispatch({ type: 'NEW_EDUCATION', payload: formState })
      setCount(count + 1)
    }
  }

  const handleChange = async (e) => {
    switch (e.target.name) {
    case 'start_date':
    case 'end_date':
      setFormState({
        ...formState,
        [e.target.name]: moment(e.target.value),
      })
      break
    case 'job_description':
      setFormState({
        ...formState,
        [e.target.name]: [...e.target.value.split('; ')],
      })
      break
    default:
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      })
    }
  }

  return (
    <div className="new-education">
      <h1 className="new-education__title">New Education Entry</h1>
      <Box component="form" sx={{ width: 600, mx: 'auto' }}>
        <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextField
            name="school"
            label="School"
            variant="filled"
            onChange={handleChange}
            sx={{
              mr: 1, mt: 1, mb: 1, width: '100%',
            }}
          />
          <TextField
            name="major"
            label="Major"
            variant="filled"
            onChange={handleChange}
            sx={{
              ml: 1, mt: 1, mb: 1, width: '100%',
            }}
          />
        </FormControl>
        <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
          <TextField
            name="start_date"
            label="Start Date"
            variant="filled"
            onChange={handleChange}
            sx={{
              mr: 1, mt: 1, mb: 1, width: '100%',
            }}
          />
          <TextField
            name="end_date"
            label="End Date"
            variant="filled"
            onChange={handleChange}
            sx={{
              ml: 1, mt: 1, mb: 1, width: '100%',
            }}
          />
        </FormControl>
        <FormControl fullWidth sx={{ m: 1, mx: 'auto' }}>
          <InputLabel variant="filled">Academic Achievement and/or Description (separate points with &lsquo;;&rsquo;)</InputLabel>
          <FilledInput
            multiline
            name="education_description"
            variant="filled"
            onChange={handleChange}
          />
        </FormControl>
        <br />
        <Button variant="contained" onClick={() => submit()} sx={{ mt: 1 }}>Submit</Button>
        <p>{(count > 0) ? `Added ${count} new education` : ''}</p>
      </Box>
    </div>
  )
}
