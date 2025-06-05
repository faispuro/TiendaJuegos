import axios from 'axios';
import { useEffect, useState } from 'react';
import Balance from './Balance'; 
import FormAddJuegos from './FormAddJuegos';
import DisplayItems from './DisplayItems';

const MainControl = ({ count }) => {
  const presupuesto=Number(count);
  const [juegos, setJuegos] = useState([]);
  const [type, setType] = useState(""); 
  const [price, setPrice] = useState("");
  const [editId, setEditId] = useState("");
  const [spent, setSpent] = useState(0);
  const [carrito, setCarrito] = useState([]);
  const [orden, setOrden] = useState("");
  const [searchNombre, setSearchNombre] = useState("");
  const [searchPrecioMin, setSearchPrecioMin] = useState("");
  const [searchPrecioMax, setSearchPrecioMax] = useState("");
  const [buscar, setBuscar] = useState(false); 

  useEffect(() => {
    axios.get('http://localhost:3001/api/juegos')
      .then(res => setJuegos(res.data))
      .catch(err => console.error('Error al cargar juegos:', err));
  }, []);
  const finalizarCompra = () => {
  if (carrito.length === 0) {
    alert("El carrito está vacío.");
    return;
  }

  alert("¡Compra finalizada con éxito!");
  setCarrito([]);
  setSpent(0);
};

  const agregarAlCarrito = (juego) => {
    const yaEnCarrito = carrito.some(item => item._id === juego._id);
    const disponible = count - spent;

    if (yaEnCarrito) {
      alert("Este juego ya está en el carrito.");
      return;
    }

    if (juego.precio > disponible) {
      alert("No tenés suficiente presupuesto para agregar este juego.");
      return;
    }

    setCarrito(prev => [...prev, juego]);
    setSpent(prev => prev + juego.precio);
  };

  const eliminarDelCarrito = (id) => {
    const item = carrito.find(j => j._id === id);
    if (!item) return;
    setCarrito(prev => prev.filter(j => j._id !== id));
    setSpent(prev => prev - item.precio);
  };

  const juegosFiltrados = juegos.filter(juego => {
    const nombreMatch = juego.nombre.toLowerCase().includes(searchNombre.toLowerCase());
    const precioMinVal = searchPrecioMin === "" ? 0 : Number(searchPrecioMin);
    const precioMaxVal = searchPrecioMax === "" ? Infinity : Number(searchPrecioMax);
    return nombreMatch && juego.precio >= precioMinVal && juego.precio <= precioMaxVal;
  });
  const juegosOrdenados = [...juegosFiltrados].sort((a, b) => {
  if (orden === "nombre") {
    return a.nombre.localeCompare(b.nombre);
  } else if (orden === "precioAsc") {
    return a.precio - b.precio;
  } else if (orden === "precioDesc") {
    return b.precio - a.precio;
  }
  return 0; // sin orden
  });

  return (
    <>
      <div className="main-control">
        <Balance count={count} carrito={carrito} />
        <FormAddJuegos 
          setType={setType} 
          setPrice={setPrice}
          type={type}
          price={price}
          setJuegos={setJuegos}
          juegos={juegos}
          editId={editId}
          setEditId={setEditId}
          spent={spent}
          count={count}
        />

        <input
          type="text"
          placeholder="Buscar por nombre"
          value={searchNombre}
          onChange={(e) => {
            const soloLetras = e.target.value.replace(/[^a-zA-Z]/g, '');
            setSearchNombre(soloLetras);
          }}
        />
        <input
          type="number"
          placeholder="Precio mínimo"
          value={searchPrecioMin}
          onChange={(e) => setSearchPrecioMin(e.target.value)}
          min="0"
        />
        <input
          type="number"
          placeholder="Precio máximo"
          value={searchPrecioMax}
          onChange={(e) => setSearchPrecioMax(e.target.value)}
          min="0"
        />
        <div className="centrado">
          <button onClick={() => setBuscar(true)}>Buscar</button>
        </div>
            <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="">Ordenar por...</option>
            <option value="nombre">Nombre (A-Z)</option>
            <option value="precioAsc">Precio (menor a mayor)</option>
            <option value="precioDesc">Precio (mayor a menor)</option>
        </select>

      </div>

      {buscar && (
        <DisplayItems juegos={juegosOrdenados} agregarAlCarrito={agregarAlCarrito} />
      )}

      <h2>Carrito</h2>
      <ul>
        {carrito.map(juego => (
          <li key={juego._id}>
            {juego.nombre} - ${juego.precio}
            <button onClick={() => eliminarDelCarrito(juego._id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <h2>Carrito ({carrito.length})</h2>
      <div className="centrado">
        <button onClick={finalizarCompra}>Finalizar compra</button>
      </div>
      

    </>
  );
};

export default MainControl;
