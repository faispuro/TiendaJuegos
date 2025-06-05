import {moneyFormat} from "../helpers";
const SimgleItem=({price, type, id, eliminarItem, editItem})=>{
    const urlImage=`/src/images/${type}.jpg`;
    const HandleDelete=(e)=>{
        e.preventDefault();
        const answer = window.confirm(`Estas seguro de eliminar ${type}?`);
        if(answer){
            eliminarItem(id);
        }
        
    }
    const HandleEdit = (e)=>{
        e.preventDefault();
        editItem(id);
    }
    return(
        <div className="simgle-item">
            <div className="item-row">
                <img src={urlImage} alt="Juegos"></img>
                <div className="item-center">
                    <h3>Precio: {moneyFormat(Number(price))}</h3>
                </div>
                <div className="item-actions">
                    <a href="" onClick={HandleDelete}>Borrar</a>
                    <a href="" onClick={HandleEdit}>Editar</a>
                </div>
            </div>
        </div>
    );
}
export default SimgleItem;