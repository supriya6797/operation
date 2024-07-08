import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [users,setUsers] = useState([])

    useEffect(()=>{
   axios.get('http://localhost:3001/user')
    .then(result=>setUsers(result.data))
    .catch(err=>console.log(err))
    },[])


    const handleDelete=(id)=>{
  axios.delete('http://localhost:3001/deleteUser/'+id)
  .then(res=>{console.log(res)
window.location.reload()})
  .catch(err=>console.log(err))
    }

    return (<>
        <div style={{ display:"flex",justifyContent:"center",marginTop:"100px"}}>

        <Link to="/add"
         style={{backgroundColor:"blue",
         textDecoration:"none",
         color:"white",width:"100px",
         padding:"7px",
         borderRadius:"20%",
         textAlign:"center",
         border:"1px solid blue"}}>Add User</Link>
        </div>
    <div className='user'>
      <table className='table'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Contact</th>
          <th>Email</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {
            users.map((user)=>{
                 return <tr>
                    <td>{user.name}</td>
                    <td>{user.mobile}</td>
                    <td>{user.email}</td>
                    <td>
                    <Link to={`/update/${user._id}`}
         style={{backgroundColor:"blue",
         textDecoration:"none",
      padding:"5px",
         borderRadius:"20%",
         textAlign:"center",
         marginRight:"15px",
         color:"white",
         border:"1px solid blue"
         }}>
          Edit
          </Link>
          
         <button onClick={(e)=>{handleDelete(user._id)}}
         style={{backgroundColor:"red",
         textDecoration:"none",
     color:"black",
        
         padding:"5px",
         borderRadius:"20%",
         textAlign:"center",
         border:"1px solid blue"
         }}>
          Delete
          </button>
          </td>
                </tr>
            })
        }
      </tbody>
    </table>
    </div>
 
    </>  );
}
 
export default User;