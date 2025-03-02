const express = require('express');
require('dotenv').config();
const {connect} =require('./db/connectDB')
const reportRoutes=require('./routes/reportRoutes')
const ngoRegistrationRoutes = require('./routes/ngoRegistrationRoutes');

const dbName=process.env.DBNAME;
const port=process.env.PORT;

connect(dbName);
const app=express();
app.use(express.json());

app.use('/reports', reportRoutes);
app.use('/ngo',ngoRegistrationRoutes);


app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`);
});