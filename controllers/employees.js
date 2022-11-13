const Employee =require('../models/Employee.js')

const asyncWrapper = require('../middleware/async.js')
const { createCustomError } =require('../errors/custom-error.js')



const getAllEmployees = asyncWrapper(async (req, res) => {
  const employees = await Employee.find({type:{$ne:"HR"}})
  res.status(200).json({ employees })
})

const createEmployee = asyncWrapper(async (req, res) => {

  const employee = await Employee.create(req.body)
  res.status(201).json({ employee })
})



const getEmployee = asyncWrapper(async (req, res, next) => {
  const { id: employeeID } = req.params
  console.log(employeeID)
  if (employeeID.includes("@HR")) {
    const HR = await Employee.findOne({ username: employeeID })
    console.log(HR)
    if (!HR) {
      return next(createCustomError(`No HR with username : ${employeeID}`, 404))
    }
    res.status(200).json({ HR })
  }
  else {
    const employee = await Employee.findOne({ _id: employeeID })
    if (!employee) {
      return next(createCustomError(`No employee with id : ${employeeID}`, 404))
    }
    res.status(200).json({ employee })
  }
})
const deleteEmployee = asyncWrapper(async (req, res, next) => {

  const { id: employeeID } = req.params
  const employee = await Employee.findOneAndDelete({ _id: employeeID })
  if (!employee) {
    return next(createCustomError(`No employee with id : ${employeeID}`, 404))
  }
  res.status(200).json({ employee })
})

const updateEmployee = asyncWrapper(async (req, res, next) => {
  const { id: employeeID } = req.params

  const employee = await Employee.findOneAndUpdate({ _id: employeeID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!employee) {
    return next(createCustomError(`No employee with id : ${employeeID}`, 404))
  }
  res.status(200).json({ employee })
})


module.exports={
  getEmployee,
  createEmployee,
  getAllEmployees,
  deleteEmployee,
  updateEmployee  
}