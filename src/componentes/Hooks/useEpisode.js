import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const useEpisode = character => {
    const [episodeLocation, setEpisodeLocation] = useState()

useEffect(() => {
  if(character) {
    const URLEP = character.episode[0]
    axios.get(URLEP)
    .then(ress => setEpisodeLocation(ress.data))
    .catch(errr => console.log(errr))} 
  
},[character])
  return episodeLocation
}
