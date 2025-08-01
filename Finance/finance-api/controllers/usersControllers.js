const { db } = require('../config/firebase');

// GET /users
exports.getUsers = async (req, res) => {
  try {
    const snapshot = await db.ref('users').once('value');
    const data = snapshot.val();
    if (!data) return res.json([]);
    const usersArray = Object.entries(data).map(([id, user]) => ({
      id,
      ...user,
    }));
    res.json(usersArray);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// POST /users
exports.addUser = async (req, res) => {
  try {
    const newUserRef = db.ref('users').push();
    await newUserRef.set(req.body);
    res.status(201).json({ id: newUserRef.key, ...req.body });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE /users/:id
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.ref(`users/${id}`).update(req.body);
    res.json({ message: 'User updated' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE /users/:id
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await db.ref(`users/${id}`).remove();
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
