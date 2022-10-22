import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import UserService from "../services/UserService.js";
import TextField from '@mui/material/TextField';
import {Button} from '@mui/material';
import { Card } from '@mui/material';
import CardContent from '@mui/material';

const Signup = (props) => {
  let initialValue = {
    
    password: "",
    email: "",
    error: {
      password: "",
      email: "",
    },
  };
  const [formValue, setForm] = useState(initialValue);

  const setData = (obj) => {
    console.log();
    setForm({
      ...formValue,
      ...obj,
      // isUpdate:true,
      // id: obj.empId,

      password: obj.password,
      email: obj.email,
    });
    console.log(formValue);
  };

  const changeValue = (event) => {
    setForm({ ...formValue, [event.target.name]: event.target.value });
  };

  const save = async (event) => {
    event.preventDefault();

    let object = {
      password: formValue.password,
      email: formValue.email,
    };
    console.log(object);

    UserService.userLogin(object)
      .then((response) => {
        console.log(response);
        alert("User registration is Added", response);
      })
      .catch((error) => {
        console.log(error);
        // alert("Not Added User!!");
      });
  };

  const reset = () => {
    setForm({
      ...initialValue,
      id: formValue.id,
      isUpdate: formValue.isUpdate,
    });
  };
  

  return (
    <div>
     <Card sx={{ minWidth: 600}}>
       <form action="#" className="form" onSubmit={save} onReset={reset}>
        <div className="wrapper"><h2>Registration</h2></div>
        <div className='content'>
     <div className='content-box'>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Email" variant="filled" onChange={changeValue} value={formValue.email} name="email"/>
      </div>
      <div className='content-box'>
      <TextField sx={{ width: 300 }} id="filled-basic" label="Password" type="password" variant="filled" onChange={changeValue} value={formValue.password} name="password"/>
      </div>
      <div className='button'>
      <Button sx={{ width: 150 }} variant="contained" color="success" type ="submit" >Sign Up</Button>
      <div>
          <Link to ='/login'>Sign In</Link>
      </div>
      </div>
     </div>
   </form>
   </Card>
    </div>  
  )
}
export default Signup;
