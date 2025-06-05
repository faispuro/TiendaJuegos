import { useState } from 'react'
import Header from './Components/Header'
import MainControl from './Components/MainControl'
import FormAddMoney from './Components/FormAddMoney'
import Balance from './Components/Balance'
import './App.css'

const App=()=> {
  const [count, setCount] = useState(0);
  const [isValid, setIsValid] = useState(false);

  const component= isValid 
  ? <MainControl count={count}/> 
  : <FormAddMoney setCount={setCount} setIsValid={setIsValid}/>;
  return (
    
      <div className="App">
        <Header/>
        {component}
      </div>
 
  );
}

export default App;
