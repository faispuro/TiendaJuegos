const DisplayItems = ({ juegos, agregarAlCarrito }) => {
  if (!juegos.length) return <p>No hay juegos para mostrar.</p>;

  return (
    <ul>
      {juegos.map(juego => (
        <li key={juego._id}>
          {juego.nombre} - ${juego.precio}
          <button onClick={() => agregarAlCarrito(juego)}>Agregar al carrito</button>
        </li>
      ))}
    </ul>
  );
};
export default DisplayItems;