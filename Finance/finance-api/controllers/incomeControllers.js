const { db } = require('../config/firebase');

// GET all income entries
exports.getAllIncome = async (req, res) => {
  try {
    const snapshot = await db.ref('income').once('value');
    res.json(snapshot.val() || {});
  } catch (err) {
    res.status(500).json({ message: 'Error retrieving income', error: err.message });
  }
};

// POST create income
exports.createIncome = async (req, res) => {
  try {
    const newIncomeRef = db.ref('income').push();
    await newIncomeRef.set(req.body);
    res.status(201).json({ message: 'Income created', id: newIncomeRef.key });
  } catch (err) {
    res.status(500).json({ message: 'Error creating income', error: err.message });
  }
};

// PUT update income by ID
exports.updateIncome = async (req, res) => {
  const { id } = req.params;
  try {
    await db.ref(`income/${id}`).update(req.body);
    res.json({ message: 'Income updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating income', error: err.message });
  }
};

// DELETE income by ID
exports.deleteIncome = async (req, res) => {
  const { id } = req.params;
  try {
    await db.ref(`income/${id}`).remove();
    res.json({ message: 'Income deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting income', error: err.message });
  }
};

