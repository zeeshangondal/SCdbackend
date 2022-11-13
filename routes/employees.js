const express =require('express')
const router = express.Router()

const {
  getAllEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} =require('../controllers/employees.js')


router.get('/', getAllEmployees)

router.post('/', createEmployee)

router.route('/:id').delete(deleteEmployee).patch(updateEmployee).get(getEmployee)

module.exports= router;

// module.exports = router;