const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const userData = require('./data');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

const secretKey = 'your_secret_key'; // Replace with a strong secret key
const tokenExpiry = '1h'; // Token expiry time

const generateToken = (user) => {
  return jwt.sign({ userId: user.id }, secretKey, { expiresIn: tokenExpiry });
};

app.post('/api/register', (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = userData.find(u => u.email === email);

    if (existingUser) {
      return res.status(400).json({ error: 'User already exists' });
    }

    // In a real app, hash the password before storing
    const newUser = {
      id: userData.length + 1,
      email,
      password,
    };

    userData.push(newUser);

    const token = generateToken(newUser);
    res.json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/login', (req, res) => {
  try {
    const { email, password } = req.body;

    const user = userData.find(u => u.email === email && u.password === password);

    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = generateToken(user);
    res.json({ token });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
