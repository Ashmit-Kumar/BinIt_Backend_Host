const express = require('express');
require('dotenv').config();
const connectDB  =require('./db/connectDB')
const reportRoutes=require('./routes/reportRoutes')
const ngoRegistrationRoutes = require('./routes/ngoRegistrationRoutes');
const subscribeRoutes = require('./routes/subscribeRoutes');
const cors = require('cors');
const contactRoutes= require('./routes/contactRoutes');
const dbName=process.env.DBNAME;
const port=process.env.PORT || 8080;
// CORS configuration
const corsOptions = {
    origin: ['http://localhost:5174','http://localhost:5173','http://localhost:3000','https://www.admin.binit.site','https://admin.binit.site','www.binit.site','binit.site','binit-ruddy.vercel.app'], // Allow only requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow specific methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allow specific headers
  };
  
connectDB(dbName);
const app=express();
app.use(express.json());
app.use(cors(corsOptions));

app.use('/reports', reportRoutes);
app.use('/ngo',ngoRegistrationRoutes);
app.use('/subscribe', subscribeRoutes); 
app.use('/contact', contactRoutes);
app.listen(port,()=>{
console.log(`server is running at http://localhost:${port}`);
});