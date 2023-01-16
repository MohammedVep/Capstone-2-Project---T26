// require models which are express, nodemon, cors ...
const express = require("express");
const cors = require("cors");
const app = express();
const regisRoutes=require("./routes/register")
const loginRoutes=require("./routes/login")
const adminRoutes=require("./routes/admin")

const mongoose =require("mongoose")

mongoose.connect("mongodb+srv://oz:2231874q@cluster0.g4wv7b7.mongodb.net/register?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true
})



app.use(cors());

// SERVER 
const SERVER_PORT =process.env.PORT || 3333
app.listen(SERVER_PORT,()=>{
    console.log("http://localhost:3333/")
})


// parse requests of content-type - application/x-www-form-urlencoded
// Bu calismadi
// app.use(express.urlencoded({ extended: true }));
app.use(express.json())


// Route     For Register
app.use("/home/",regisRoutes)
app.use("/home/",loginRoutes)
// app.use("/home/",adminRoutes)
app.use(adminBro.options.rootPath, router)
// app.use(adminBro.options.rootPath, router)
