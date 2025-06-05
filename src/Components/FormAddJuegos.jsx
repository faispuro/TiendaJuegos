import { useState } from "react";
const FormAddJuegos=({setType, setPrice, type, price, setJuegos, juegos, editId, setEditId, spent, count})=> {
    const [error, setError]= useState(false);
    const [errorMoney, setErrorMoney]= useState(false);
    const handleJuegos=(e) =>{
        e.preventDefault();
        if(price==="" || Number(price)<0 || type===""){
            setError(true);
            return;
        }
        if(count-spent < Number(price)){
            setErrorMoney(true);
            return;
        }
        setError(false);
        setErrorMoney(false);
        if(editId !==""){
            setEditId("");
            const newJuegos = juegos.map((juego) =>{
                if(juego.id===editId){
                    juego.type=type;
                    juego.price=price;
                }
                return juego;
            })
            setJuegos(newJuegos);
        }else{
            const data={
            type:type,
            price:Number(price),
            id:Date.now()
            }
            setJuegos([...juegos, data]);
        }
        setType("");
        setPrice("");
        
    }
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
export default FormAddJuegos;
