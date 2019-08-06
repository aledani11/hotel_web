const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { title: 'main page' });
  });

router.get('/habitaciones', (req, res) => {
  res.render('habitaciones', { title: 'habitaciones' });
});

router.get('/reservas', (req, res) => {
  res.render('habitaciones', { title: 'reservas' });
});

module.exports = router;
