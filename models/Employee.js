import mongoose from 'mongoose'

const EmployeeSchema = new mongoose.Schema({
  
  fullName: {
    type: String,
  },
  email: {
    type: String,
    unique: true
  },
  mobile:{
    type: String
  },
  city:{
    type: String
  },
  gender:{
    type: String
  },
  hireDate:{
    type:Date
  },
  isPermanent:{
    type:Boolean
  },
  type:{
    type: String
  },
  password:{
    type:String
  },
  username:{
    type:String
  }
})

export default mongoose.model('Employee', EmployeeSchema)


// const initialFValues = {
//   id: 0,
//   fullName: '',
//   email: '',
//   mobile: '',
//   city: '',
//   gender: 'male',
//   hireDate: new Date(),
//   isPermanent: false,
//   type:''
// }