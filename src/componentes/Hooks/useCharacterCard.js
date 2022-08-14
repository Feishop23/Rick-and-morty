import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useCharacterCard = resident => {
  
    const [character, setCharacter] = useState()
    useEffect(() => {
        axios.get(resident)
        .then(res => setCharacter(res.data))
        .catch(err => console.log(err))
    }, [character])

  return character
}

export default useCharacterCard