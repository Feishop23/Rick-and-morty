import React from 'react'
import { useState } from 'react'

const useActivador = () => {
    const [activador, setactivador] = useState()
    const activo = ()=>{
        setactivador(!activador)
    }

  return {
activador,
activo
  }
}

export default useActivador