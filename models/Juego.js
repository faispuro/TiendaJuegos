const mongoose = require('mongoose');

const juegoSchema = new mongoose.Schema({
  nombre: String,
  precio: Number,
  requisitos: {
    procesador: String,
    ram: String,
    grafica: String,
    almacenamiento: String
  },
  genero: String,
  multijugador: Boolean,
  desarrollador: String
});

module.exports = mongoose.model('Juego', juegoSchema);
