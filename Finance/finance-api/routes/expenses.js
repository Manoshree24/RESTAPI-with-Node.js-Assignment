const express = require('express');
const router = express.Router();
const expensesController = require('../controllers/expensesControllers');

router.get('/', expensesController.getExpenses);
router.post('/', expensesController.addExpense);
router.put('/:id', expensesController.updateExpense);
router.delete('/:id', expensesController.deleteExpense);

module.exports = router;
