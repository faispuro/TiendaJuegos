import { moneyFormat } from "../helpers";

const Balance = ({ count, carrito }) => {
  const spent = carrito.reduce((total, juego) => total + Number(juego.precio), 0);
  const disponible = count - spent;

  return (
    <div className="balance">
      <h3>Presupuesto: {moneyFormat(count)}</h3>
      <p><strong>Total gastado:</strong> {moneyFormat(spent)}</p>
      <p><strong>Presupuesto disponible:</strong> {moneyFormat(disponible)}</p>
    </div>
  );
};

export default Balance;
