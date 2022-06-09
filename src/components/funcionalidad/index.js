import React, {useState} from 'react';
import './funcionalidad.css';
import Indicador from '../indicador';

const Fucionalidad = () => {
    const [Contador, setContador] = useState(0)
    const Disminuir = () => {
        if (Contador<=0) {
            setContador(0); 
        } else {
            setContador (Contador-1);
        }
    }
    const Reset = () => {
        setContador(0);
    }
    const Aumentar = () => {
        
        setContador (Contador+1)
    }
  return (
    <div>
    <Indicador contador={Contador}/>
      <button className='boton boton-menos' onClick={Disminuir}>-</button>
      <button className='boton boton-reset' onClick={Reset}>Reset</button>
      <button className='boton boton-mas' onClick={Aumentar}>+</button>
    </div>
  )
}

export default Fucionalidad
