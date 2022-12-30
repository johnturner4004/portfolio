import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ManageWorkHistory() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'GET_WORK_HISTORY' })
  }, [dispatch]);

  const workHistory = useSelector(store => store.workHistory)

  return (
    <div className='manage-work-history'>
      <h1 className='manage-work-history__title'>Manage Work History</h1>
      <ul>
        {
          workHistory.data && workHistory.data.length > 0 ?
            workHistory.data.map(job => {
              return (
                <li key={job._id}>
                  <Box className="manage-work-history__box">
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TextField name="company" value={job.company} label='Company' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} />
                      <TextField name="company" value={job.job_title} label='Job Title' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} />
                    </FormControl>
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TextField name="company" value={job.start_date} label='Start Date' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} />
                      <TextField name="company" value={job.end_date} label='End Date' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, mx: 'auto' }}>
                      <InputLabel variant='filled' shrink>Job Description (separate points with ';')</InputLabel>
                      <FilledInput
                        multiline
                        name="job_description"
                        value={job.job_description.map(entry => `${entry}; `)}
                        variant="filled"
                      // onChange={handleChange}
                      />
                    </FormControl>
                  </Box>
                </li>
              )
            }) : ''
        }
      </ul>{JSON.stringify(workHistory.data)}
    </div>
  )
}