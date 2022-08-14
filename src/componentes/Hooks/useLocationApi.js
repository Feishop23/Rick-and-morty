import axios from 'axios'
import React, { useEffect, useState } from 'react'

const useLocationApi = Serch => {

    const [location, setLocation] = useState()  

    useEffect(()=>{
        let locationNumber
        if(Serch){locationNumber = Serch}else{locationNumber = Math.ceil(Math.random() * 126)
        }

        const URL =  `https://rickandmortyapi.com/api/location/${locationNumber}`
        axios.get(URL)
        .then(res => setLocation(res.data))
        .catch(err => console.log(err))
      }, [Serch])
  return location
}

export default useLocationApi