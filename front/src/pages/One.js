import { Box, Container, Grid, Paper, TextField,Button } from '@mui/material';
import axios from 'axios';

import React, {  useState } from 'react';
import { Link } from 'react-router-dom';
const One = () => {
const[user,setUser] = useState({
    name:"",
    mobile:"",
    email:"",
    password:""
});
const [errors,setErrors] = useState({});
const handleChange = (e)=>{
    const {name,value} = e.target;
    setUser({
        ...user,
        [name]:value
    })
};

const handleSubmit=(e)=>{
    e.preventDefault();
   const validationErrors={}
   if(!user.name.trim()){
    validationErrors.name="Name is required"
   }else if (user.name.length<3){
    validationErrors.name="name should containe more than 3 charchter"
   }
   if(!user.mobile.trim()){
    validationErrors.mobile="mobile is required"
   }else if (user.mobile.length<10 || user.mobile.length>10){
    validationErrors.mobile="mobile should  have 10 digit"
   }
   if(!user.email.trim()){
    validationErrors.email="email is required"
   }else if (!/\S+@\S+\.\S+/.test(user.email)){
    validationErrors.email="email not in  valid format"
   }
   if(!user.password.trim()){
    validationErrors.password="password is required"
   }else if (user.password.length<6){
    validationErrors.password="password should containe atleast 6 charchter"
   }
   setErrors(validationErrors)
  if(Object.keys(validationErrors).length === 0){
    alert("form submitted succesfully")
 
  }
  axios.post('http://localhost:3001/',{...user})
  .then(result=> console.log(result))
  .catch(err=>console.log(err))
}
   
 return (
    <>
    <div>first page</div>
    <Container maxWidth="md">
        <Paper sx={{p:4}}>
            <Box component="form" onSubmit={handleSubmit}>
                <Grid >
                    <TextField
                    variant='outlined'
                    fullWidth
                    label="Name"
                    name="name"
                    placeholder='Enter your name here'
                    value={user.name}
                    onChange={handleChange}
                    />
                    {errors.name && <span>{errors.name}</span>}
                </Grid>
                <Grid sx={12}>
                    <TextField
                    variant='outlined'
                    fullWidth
                    label="mobile"
                    name="mobile"
                    placeholder='Enter your mobile here'
                    value={user.mobile}
                    onChange={handleChange}
                    />
                    {errors.mobile && <span>{errors.mobile}</span>}
                </Grid>
                <Grid sx={12}>
                    <TextField
                    variant='outlined'
                    fullWidth
                    label="email"
                    name="email"
                    type="email"
                    placeholder='Enter your email here'
                    value={user.email}
                    onChange={handleChange}
                    />
                    {errors.email && <span>{errors.email}</span>}
                </Grid>
                <Grid sx={12}>
                    <TextField
                    variant='outlined'
                    fullWidth
                    label="password"
                    name="password"
                    placeholder='Enter your password here'
                    value={user.password}
                    onChange={handleChange}
                    />
                    {errors.password && <span>{errors.password}</span>}
                </Grid>
                <Grid sx={{textAlign:"center"}}>
                    <Button variant="contained" type="submit">submit</Button>
                </Grid>
            </Box>
                <Grid style={{ textAlign:'center',marginTop:"5px"}}>
                    <Button variant="contained" ><Link to="/login" style={{ textDecoration:"none",color:"white"}}>Login</Link></Button>
            
                </Grid>
        </Paper>
    </Container>
    </> );
}
 
export default One;
