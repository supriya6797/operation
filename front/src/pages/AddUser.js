import React, { useState } from 'react';
import { Container, FormControl,  Input, InputLabel } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
    const [name,setName] = useState()
    const [mobile,setMobile] = useState()
    const [email,setEmail] = useState()
const navigate= useNavigate()

    const Submit=(e)=>{
        e.preventDefault();
    axios.post("http://localhost:3001/add",{name,mobile,email})
    .then(result=>{console.log(result)
      navigate('/user')
    }).catch(err=>console.log(err)) }

    return ( 
    <>

    <Container style={{display:"flex" ,justifyContent:"center",marginTop:"100px"}}>
   <form className='addForm' onSubmit={Submit}>

   <h2 style={{ textAlign:"center",marginTop:"-20px",padding:"3px"}}> Add User</h2>
   
    <div className='add' >
        
   <FormControl>
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
  onChange={(e)=>setName(e.target.value)}
   />
</FormControl>
   </div>
   <div className='add'>
   <FormControl>
  <InputLabel htmlFor="my-input">mobile</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
   onChange={(e)=>setMobile(e.target.value)}/>
</FormControl>
   </div>

   <div className='add'>
   <FormControl>
  <InputLabel htmlFor="my-input">Email address</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text"
   onChange={(e)=>setEmail(e.target.value)} />
</FormControl>
       </div>
       <div className='add'>
<button type='submit'>Submit</button>
       </div>
       </form>
    </Container>
    </> );
}
 
export default AddUser;