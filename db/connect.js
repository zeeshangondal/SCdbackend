const mongoose =require('mongoose')

const MONGO_URI = "mongodb+srv://zeeshan:asdfg12345@cluster0.q8osuvr.mongodb.net/HospitalManagementSystemDB?retryWrites=true&w=majority"

const connectDB = () => {
  return mongoose.connect(MONGO_URI, {})
}

module.exports= connectDB