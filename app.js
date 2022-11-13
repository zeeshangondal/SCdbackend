const express =require('express')
const app = express();
const employees =require('./routes/employees.js')
const connectDB =require('./db/connect.js')
const dotenv =require('dotenv')
const notFound =require('./middleware/not-found.js')
const errorHandlerMiddleware =require('./middleware/error-handler.js')
const cors =require('cors')

//DB name HospitalManagementSystemDB
const MONGO_URI = "mongodb+srv://zeeshan:asdfg12345@cluster0.q8osuvr.mongodb.net/HospitalManagementSystemDB?retryWrites=true&w=majority"
// middleware

app.use(express.json());
app.use(cors());

// routes
//sds

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

module.exports= {app,start}
// start();


















/**
 * This is a basic starting point of the assignment
 * Modify the code according to your own needs and requirements
 */

//const express =require(('express')
// const express =require( 'express'; // <-- Module Style const
// const bodyParser =require( 'body-parser';
// const cors =require( 'cors'

// // consting user route
// const employeesRouter =require( './routes/employees.js';

// // const router =require(('router')

// // const bodyParser =require(('body-parser')

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



