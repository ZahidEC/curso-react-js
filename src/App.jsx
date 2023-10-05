import { useState } from 'react'
import './App.css'
import { Button } from './components/button';

function App({texto}) {
  const [estado, setEstado] = useState("verdadero")
 return <>
 <div>
  <h1>
    {estado}
  </h1>
  <div>


  <button onClick={() =>{
    if (estado =="Verdadero"){
      setEstado("8=====D");
    }else{
      setEstado("Verdadero");
    }
  }} >
Cambiame esta
  
  </button>
  
  
     <Button texto ={"compras"}></Button>
     <Button texto ={"compras"}></Button>
     <Button texto ={"compras"}></Button>
  </div>
 </div>
 </>;
 
}

export default App
