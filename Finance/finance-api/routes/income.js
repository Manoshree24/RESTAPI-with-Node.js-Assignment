
const express = require('express');
const router = express.Router();
const incomeControllers= require('../controllers/incomeControllers');

router.get('/', incomeControllers.getAllIncome);
router.post('/', incomeControllers.createIncome);
router.put('/:id', incomeControllers.updateIncome);
router.delete('/:id', incomeControllers.deleteIncome);

module.exports = router;
