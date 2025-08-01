const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3006;

app.use(cors());
app.use(express.json());

// API routes
app.use('/users', require('./routes/users'));
app.use('/income', require('./routes/income'));
app.use('/expenses', require('./routes/expenses'));

app.get('/', (req, res) => {
  res.send('Welcome to the Finance API!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
