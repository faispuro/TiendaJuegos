const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const juegosRoutes = require('./routes/juegos');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/TiendaJuegos', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use('/api/juegos', juegosRoutes);

app.listen(3001, () => console.log('Servidor corriendo en puerto 3001'));
