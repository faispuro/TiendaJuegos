import axios from 'axios';
import { useState, useEffect } from 'react';

const FormAddJuegos = ({ type, price, setType, setPrice, juegos, setJuegos, editId, setEditId }) => {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      if (editId) {
        // Aquí iría la lógica para actualizar un juego (PUT o PATCH)
        // Ejemplo:
        await axios.put(`http://localhost:3001/api/juegos/${editId}`, {
          nombre: type,
          precio: Number(price)
        });
        // Actualizá localmente el array para evitar recargar toda la lista
        const juegosActualizados = juegos.map(juego =>
          juego._id === editId ? { ...juego, nombre: type, precio: Number(price) } : juego
        );
        setJuegos(juegosActualizados);
        setEditId("");
      } else {
        // Crear nuevo juego
        const res = await axios.post('http://localhost:3001/api/juegos', {
          nombre: type,
          precio: Number(price),
          requisitos: {
            procesador: "No especificado",
            ram: "No especificado",
            grafica: "No especificado",
            almacenamiento: "No especificado"
          },
          genero: "No especificado",
          multijugador: false,
          desarrollador: "No especificado"
        });
        setJuegos([...juegos, res.data]);
      }

      setType("");
      setPrice("");
    } catch (error) {
      console.error("Error agregando/actualizando juego:", error);
    } finally {
      setLoading(false);
    }
  };

  
};

export default FormAddJuegos;
