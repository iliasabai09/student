// server/routes/admin.js
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { adminUsername, adminPassword, jwtSecret } = require('./config');
const User = require('./models/User'); // Если требуется для управления продуктами

// Обработка входа администратора
router.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === adminUsername && bcrypt.compareSync(password, adminPassword)) {
    const token = jwt.sign({ role: 'admin' }, jwtSecret, { expiresIn: '1h' });
    res.status(200).json({ token });
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
});

module.exports = router;
