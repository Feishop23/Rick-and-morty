import React, { useState } from 'react'


const Serch = ({setvalueSercht}) => {

    const searchLocation = e => {
        e.preventDefault()
        setvalueSercht(e.target.children[0].value)

    }
  return (
    <form action="" onSubmit={searchLocation} className='Search'>
        <input type="text" placeholder='Ingrese solo numeros'/>
        <button className='searchText'>Search</button>
        
    </form>
  )
}

export default Serch