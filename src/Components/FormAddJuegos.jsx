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
<<<<<<< HEAD
  };

  
};

=======
    return (
        <div className="add-juegos"> 
            <h3>Agregar Juegos</h3>
            <form onSubmit={handleJuegos}> 
                <p>Juegos</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value="">Elegir</option>
                    <option value="csgo2">Counter Strike 2</option>
                    <option value="gtav">Grand Theft Auto V</option>
                    <option value="ark">ARK: Survival Evolved</option>
                    <option value="rocket">Rocket League</option>
                    <option value="raft">Raft</option>
                    <option value="r6">Tom Clancy's Rainbow Six Siege</option>
                </select>
                <p>Cantidad</p>
                <input type="number" placeholder="15$" onChange={e => setPrice(e.target.value)} value={price}/>
                {editId != "" ? <input type="submit" value="Guardar Cambios" /> 
                    : <input type="submit" value="Agregar" />}
            </form>
            {error ? <p className="error">Campos invalidos</p> : null}
            {errorMoney ? <p className="error">No tienes suficiente Presupuesto</p> : null}
        </div>
    )
}
>>>>>>> 60768928e19c70a30f39c0270c67979c1f0c30b4
export default FormAddJuegos;
