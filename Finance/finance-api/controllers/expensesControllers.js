const { db } = require('../config/firebase');

// GET all expenses
exports.getExpenses = async (req, res) => {
  try {
    const snapshot = await db.ref('expenses').once('value');
    res.json(snapshot.val() || {});
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST create expense
exports.addExpense = async (req, res) => {
  try {
    const newExpenseRef = db.ref('expenses').push();
    await newExpenseRef.set(req.body);
    res.status(201).json({ id: newExpenseRef.key, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// PUT update expense
exports.updateExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await db.ref(`expenses/${id}`).update(req.body);
    res.json({ message: 'Expense updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE expense
exports.deleteExpense = async (req, res) => {
  try {
    const { id } = req.params;
    await db.ref(`expenses/${id}`).remove();
    res.json({ message: 'Expense deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
