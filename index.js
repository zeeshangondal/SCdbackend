import express from 'express'
const app = express();
import employees from './routes/employees.js'
import connectDB from './db/connect.js'
import dotenv from 'dotenv'
import notFound from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'
import cors from 'cors'

//DB name HospitalManagementSystemDB
const MONGO_URI = "mongodb+srv://zeeshan:asdfg12345@cluster0.q8osuvr.mongodb.net/HospitalManagementSystemDB?retryWrites=true&w=majority"
// middleware

app.use(express.json());
app.use(cors());

// routes

app.use('/api/v1/employees', employees);

app.use(notFound);
app.use(errorHandlerMiddleware);
const port =  process.env.PORT || 3001;

const start = async () => {
  try {
    await connectDB(MONGO_URI);
    console.log("DB connected")
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
















/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express from('express')
// import express from 'express'; // <-- Module Style import
// import bodyParser from 'body-parser';
// import cors from 'cors'

// // Importing user route
// import employeesRouter from './routes/employees.js';

// // const router from('router')

// // const bodyParser from('body-parser')

// const app = express()
// const port = 3001

// app.use(bodyParser.json())
// app.use(cors())

// // Adding a Router
// app.use('/api/v1/employees', employeesRouter);



// app.get('/', (req, res) => {
//     res.send('Hello Universe!')
// })

// app.get('/todos', (req, res) => {
//     res.send('A list of todo items will be returned')
// })

// app.post('/', (req, res) => {
//     console.log(req.body)
//     res.send('Posting a Request')
// })

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`)
// })



