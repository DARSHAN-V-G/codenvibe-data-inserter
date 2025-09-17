const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./config');
const mongoose = require('mongoose');
const User = require('./user.js').default || require('./user.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Connect to MongoDB
connectDB();

// Default home route
app.get('/', (req, res) => {
  res.send('Welcome to Codenvibe Data Inserter API');
});

// POST /user to add a new user
app.post('/user', async (req, res) => {
  try {
    const userData = req.body;
    const user = new User(userData);
    await user.save();
    res.status(201).json({ message: 'User added successfully', user });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
