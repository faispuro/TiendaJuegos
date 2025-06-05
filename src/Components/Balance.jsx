import {moneyFormat} from "../helpers";
import { useState, useEffect } from "react";
const Balance=({count, juegos, spent, setSpent})=>{
    

    const updateBalance=()=>{
        const spent = juegos.reduce((total, juego)=> Number(juego.price) + total, 0);
        setSpent(spent);
    }

    useEffect(()=>{
        updateBalance();
    },[juegos]);

    return(
        <div className="balance">
            <h3>Presupuesto:{moneyFormat(count)}</h3>
            <h3>Dispoible:{moneyFormat(count-spent)}</h3>
            <h3>Gastado:{moneyFormat(spent)}</h3>

        </div>
    );
}
export default Balance;