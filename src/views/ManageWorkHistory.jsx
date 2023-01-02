import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ManageWorkHistory() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_WORK_HISTORY' })
  }, [dispatch]);

  const workHistory = useSelector(store => store.workHistory);
  const [change, setChange] = useState();

  const handleChange = (e) => {
    let tempChange = change
    if (change && change[e.target.id]) {
      if (e.target.name === 'job_description') {
        tempChange[e.target.id].job_description = e.target.value.split('; ');
      } else {
        tempChange[e.target.id][e.target.name] = e.target.value
      }
    } else {
      if (e.target.name === 'job_description') {
        setChange({
          ...change,
          [e.target.id]: { [e.target.name]: e.target.value.split('; ') }

        })
      } else {
        setChange({
          ...change,
          [e.target.id]: {
            [e.target.name]: e.target.value
          }
        })
      }
    }
  }

  const handleSubmit = (e) => {
    if (change && change.hasOwnProperty(e.target.dataset.id)) {
      dispatch({ type: 'UPDATE_WORK_HISTORY', payload: { id: e.target.dataset.id, update: change[e.target.dataset.id] }})
    }
  }

  const handleDelete = (e) => {
    const id = e.target.dataset.id;
    dispatch({ type: 'DELETE_WORK_HISTORY', payload: id });
  }

  return (
    <div className='manage-work-history'>
      <h1 className='manage-work-history__title'>Manage Work History</h1>
      <ul>
        {
          workHistory.data && workHistory.data.length > 0 ?
            workHistory.data.map(job => {

              return (
                <li key={job._id} className="manage-work-history__li">
                  <Box className="manage-work-history__box" mx='auto'>
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TextField name="company" defaultValue={job.company} label='Company' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${job._id}` }} onChange={handleChange} />
                      <TextField name="job_title" defaultValue={job.job_title} label='Job Title' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${job._id}` }} onChange={handleChange} />
                    </FormControl>
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TextField name="start_date" defaultValue={job.start_date} label='Start Date' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${job._id}` }} onChange={handleChange} />
                      <TextField name="end_date" defaultValue={job.end_date} label='End Date' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${job._id}` }} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, mx: 'auto' }}>
                      <InputLabel variant='filled' shrink>Job Description (separate points with ';')</InputLabel>
                      <FilledInput
                        multiline
                        name="job_description"
                        defaultValue={job.job_description.map(entry => `${entry}; `)}
                        variant="filled"
                        inputProps={{ 'id': `${job._id}` }}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl className='manage-work-history__row' fullWidth sx={{ mx: 'auto', display: 'flex', flexDirection: 'row' }}>
                      <Button variant='contained' sx={{ mr: 1, mt: 1, p: 2, width: '50%' }} data-id={job._id} onClick={handleSubmit}>Submit Change</Button>
                      <Button variant='contained' color='error' sx={{ mt: 1, p: 2, width: '50%' }} data-id={job._id} onClick={handleDelete}>Delete</Button>
                    </FormControl>
                  </Box>
                </li>
              )
            }) : ''
        }
      </ul>
    </div>
  )
}