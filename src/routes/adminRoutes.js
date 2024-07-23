// routes/adminRoutes.js
const express = require('express');
const router = express.Router();

// Пример маршрута для входа администратора
router.post('/login', (req, res) => {
  // Логика входа
});

// Другие маршруты для административной панели
// router.get('/some-route', someController);

module.exports = router;
