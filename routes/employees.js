import express from 'express'
const router = express.Router()

import {
  getAllEmployees,
  createEmployee,
  getEmployee,
  updateEmployee,
  deleteEmployee
} from '../controllers/employees.js'


router.get('/', getAllEmployees)

router.post('/', createEmployee)

router.route('/:id').delete(deleteEmployee).patch(updateEmployee).get(getEmployee)

export default router;

// module.exports = router;