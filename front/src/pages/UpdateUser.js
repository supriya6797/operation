import React, { useEffect, useState } from 'react';
import { Container, FormControl,  Input, InputLabel } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { FormLabel } from 'react-bootstrap';

const UpdateUser = () => {
    const {id}=useParams()
    const [name,setName] = useState()
    const [mobile,setMobile] = useState()
    const [email,setEmail] = useState()
const navigate= useNavigate()

useEffect(()=>{
    axios.get('http://localhost:3001/user/getUser/'+id)
     .then(result=>{
        console.log(result)
     setName(result.data.name)
     setMobile(result.data.mobile)
     setEmail(result.data.email)
    })
     .catch(err=>console.log(err))
     },[])
const Update = (e)=>{
    e.preventDefault();
    axios.put('http://localhost:3001/user/updateUser/'+id,{name,mobile,email})
    .then(result=>{
        console.log(result)
      navigate('/user')
    })
    .catch(err=>console.log(err))}

    return ( <>
    <Container style={{display:"flex" ,justifyContent:"center",marginTop:"100px"}}>

   <form className='addForm' onSubmit={Update}>
   <h2 style={{ textAlign:"center",marginTop:"-20px",padding:"3px"}}> Update User</h2>
    <div className='add'>
   <FormControl>
   <FormLabel htmlFor="my-input">Name </FormLabel>
  <Input 
  value={name}  onChange={(e)=>setName(e.target.value)}/>
</FormControl>
   </div>
   <div className='add'>
   <FormControl>
   <FormLabel htmlFor="my-input">Contact</FormLabel>
  <Input 
  value={mobile}  onChange={(e)=>setMobile(e.target.value)}/>

</FormControl>
   </div>
   <div className='add'>
   <FormControl>
  <FormLabel htmlFor="my-input">Email </FormLabel>
  <Input 
  value={email}
  onChange={(e)=>setEmail(e.target.value)}
   />
</FormControl>
       </div>
       <div className='add'>
<button type='submit'>Update</button>
       </div>
       </form>
    </Container>
    </> );
}
 
export default UpdateUser;;