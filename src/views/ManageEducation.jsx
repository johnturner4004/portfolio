import TextField from "@mui/material/TextField";
import FormControl from '@mui/material/FormControl';
import Box from '@mui/material/Box';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';

import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function ManageEducation() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_EDUCATION' })
  }, [dispatch]);

  const education = useSelector(store => store.education);
  const [change, setChange] = useState();

  const handleChange = (e) => {
    let tempChange = change
    if (change && change[e.target.id]) {
      if (e.target.name === 'school_description') {
        tempChange[e.target.id].school_description = e.target.value.split('; ');
      } else {
        tempChange[e.target.id][e.target.name] = e.target.value
      }
    } else {
      if (e.target.name === 'school_description') {
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
      dispatch({ type: 'UPDATE_EDUCATION', payload: { id: e.target.dataset.id, update: change[e.target.dataset.id] }})
    }
  }

  const handleDelete = (e) => {
    const id = e.target.dataset.id;
    dispatch({ type: 'DELETE_EDUCATION', payload: id });
  }

  return (
    <div className='manage-education'>
      <h1 className='manage-education__title'>Manage Education</h1>
      <ul>
        {
          education.data && education.data.length > 0 ?
            education.data.map(school => {

              return (
                <li key={school._id} className="manage-education__li">
                  <Box className="manage-education__box" mx='auto'>
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TextField name="school" defaultValue={school.school} label='School/University' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${school._id}` }} onChange={handleChange} />
                      <TextField name="major" defaultValue={school.major} label='Major' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${school._id}` }} onChange={handleChange} />
                    </FormControl>
                    <FormControl sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <TextField name="start_date" defaultValue={school.start_date} label='Start Date' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${school._id}` }} onChange={handleChange} />
                      <TextField name="end_date" defaultValue={school.end_date} label='End Date' variant="filled" sx={{ mr: 1, mt: 1, mb: 1, width: '100%' }} inputProps={{ 'id': `${school._id}` }} onChange={handleChange} />
                    </FormControl>
                    <FormControl fullWidth sx={{ m: 1, mx: 'auto' }}>
                      <InputLabel variant='filled' shrink>Academic Achievement and/or Description (separate points with ';')</InputLabel>
                      <FilledInput
                        multiline
                        name="education_description"
                        defaultValue={school.education_description.map(entry => `${entry}; `)}
                        variant="filled"
                        inputProps={{ 'id': `${school._id}` }}
                        onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl className='manage-education__row' fullWidth sx={{ mx: 'auto', display: 'flex', flexDirection: 'row' }}>
                      <Button variant='contained' sx={{ mr: 1, mt: 1, p: 2, width: '50%' }} data-id={school._id} onClick={handleSubmit}>Submit Change</Button>
                      <Button variant='contained' color='error' sx={{ mt: 1, p: 2, width: '50%' }} data-id={school._id} onClick={handleDelete}>Delete</Button>
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