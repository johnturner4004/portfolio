import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { useState } from "react";
import { useDispatch } from "react-redux";


export default function Login() {
  const [state, setState] = useState();
  const dispatch = useDispatch();
  
  const handleChange = (e) => {
    setState({...state,
      [e.target.name]: e.target.value});
  }
  
  const handleClick = (e) => {
    dispatch({ type: 'LOGIN', payload: state });
  }

  return (
    <div className='login'>
      <h1>Login</h1>
      <TextField label='Username' name='username' onChange={handleChange} />
      <TextField label='Password' name='password' onChange={handleChange} />
      <Button variant='contained' onClick={handleClick} >Submit</Button>
      </div>
  )
}