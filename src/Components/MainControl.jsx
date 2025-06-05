import Balance from './Balance'; 
import FormAddJuegos from './FormAddJuegos';
import DisplayItems from './DisplayItems';
import { useState } from 'react';
const MainControl=({count})=> {
    const [juegos, setJuegos]= useState([]);
    const [type, setType]= useState(""); 
    const [price, setPrice]= useState("");
    const [editId, setEditId]=useState("");
    const [spent, setSpent]= useState(0);

    const eliminarItem=(id)=>{
        const newList = juegos.filter(item=> item.id !== id);
        setJuegos(newList);
    }
    const editItem=(id)=>{
        setEditId(id);
        juegos.map(item=>{
            if(item.id===id){
                setType(item.type);
                setPrice(item.price);
            }
        })
    }
    return (
        <>
            <div className="main-control">
                <Balance count={count} juegos={juegos} spent={spent} setSpent={setSpent}/>
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
            </div>
            <DisplayItems juegos={juegos} eliminarItem={eliminarItem} editItem={editItem}/>
        </>
        
    );
}
export default MainControl;