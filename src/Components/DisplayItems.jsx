import SimgleItem from "./SimgleItem";

const DisplayItems=({juegos, eliminarItem, editItem})=>{
    return(
        <>
            <h2>Compras</h2>
            {
                juegos.map(item=>(
                <SimgleItem 
                key={item.id}
                id={item.id} 
                price={item.price} 
                type={item.type}
                eliminarItem={eliminarItem} 
                editItem={editItem}
                />
                ))
            }
        </>
    );
}
export default DisplayItems;