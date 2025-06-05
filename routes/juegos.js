const express = require('express');
const router = express.Router();
const Juego = require('../models/Juego');

// Obtener todos los juegos
router.get('/', async (req, res) => {
  try {
    const juegos = await Juego.find();
    res.json(juegos);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Agregar un nuevo juego
router.post('/', async (req, res) => {
  const juego = new Juego(req.body);
  try {
    const nuevoJuego = await juego.save();
    res.status(201).json(nuevoJuego);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
