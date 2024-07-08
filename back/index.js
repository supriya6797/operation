const express = require ("express")
const mongoose = require("mongoose")
const cors = require("cors")
const AdminModel = require('./models/Admin')
const UserModel = require('./models/User')

const app = express();
app.use(express.json())
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/crud");
app.post('/login',(req,res)=>{
    const {email,password}= req.body;
    AdminModel.findOne({email:email})
    .then((user)=>{
        if(user) {
        if(user.password === password){
            res.json("success")
        } else{
            res.json("password incorrect")
      } } else {
res.json("data not found")
      } 
    })
})
app.post('/',(req,res)=>{
AdminModel.create(req.body)
.then((res)=>res.json(res))
.catch((err)=>res.json(err))
})

// getuser
app.get('/user',(req,res)=>{
    UserModel.find({})
    .then(user => res.json(user))
    .catch(err=>res.json(err))
})
app.get('/user/getUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findById({_id:id})
    .then((user)=>res.json(user))
.catch((err)=>res.json(err))
})
//update
app.put('/user/updateUser/:id',(req,res)=>{
    const id =req.params.id;
    UserModel.findByIdAndUpdate({_id: id},{
        name:req.body.name,
         mobile: req.body.mobile,
         email:req.body.email})
.then((user)=>res.json(user))
.catch((err)=>res.json(err))
})

//delete
app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    UserModel.findByIdAndDelete({_id:id})
    .then(res=>res.json(res))
    .catch(err=>res.json(err))
})


app.post('/add',(req,res)=>{
UserModel.create(req.body)
.then((user)=>res.json(user))
.catch((err)=>res.json(err))
})


app.listen(3001,()=>{
    console.log("server is running");
})