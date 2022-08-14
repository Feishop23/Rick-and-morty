import React, { useState } from 'react'


const Serch = ({setvalueSercht}) => {

    const searchLocation = e => {
        e.preventDefault()
        setvalueSercht(e.target.children[0].value)

    }
  return (
    <form action="" onSubmit={searchLocation} className='Search'>
        <input type="text" placeholder='Ingrese solo numeros'/>
        <button><img src="./src/componentes/img/search.png" alt="" /></button>
        
    </form>
  )
}

export default Serch