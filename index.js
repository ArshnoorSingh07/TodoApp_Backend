// server instantiation
const express = require('express');
const app = express();

// load config from env
require("dotenv").config();

const PORT = process.env.PORT || 4000;


// middleware to parse json request body
app.use(express.json());


// import routes for todo api
const todoRoutes = require('./routes/todos');


// mount the todo API routes
app.use("/api/v1",todoRoutes);


// start server
app.listen(PORT,()=>{
    console.log(`Server Started at ${PORT}`)
})

// connect to database
const dbConnect = require('./config/database');
dbConnect();


// default Route
app.get('/',(req,res)=>{
    res.send(`<h1>This is Homepage</h1>`)
})