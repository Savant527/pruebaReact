import React from 'react'
import './indicador.css'

const Indicador = ({contador}) => {
  return (
    <div>
        <h1 className='titulo'>Contador</h1>
        <h1 className='titulo'>{contador}</h1>
    </div>
  )
}

export default Indicador