import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useActivador from './Hooks/useActivador'
import useCharacterCard from './Hooks/useCharacterCard'
import { useEpisode } from './Hooks/useEpisode'

export const CardCharacter = ({resident}) => {
const character = useCharacterCard(resident)

const episodeLocation = useEpisode(character)
const {activador, activo} = useActivador()


  return (
    
    <article>
      <div className='Father'>

        <div className='circulo'> 
          <p>{character?.status}</p> 
          <span className={character?.status === "Alive" ? "Vivo" : "Muerto"
}></span> 
</div>
        <img className='Photo' src={character?.image} alt="" />
        <p><b className='Titulos'>Name</b>  <br/> {character?.name}</p>
        <p><b className='Titulos'>Primera aparicion</b> <br/> {episodeLocation?.episode}</p>
        <p><b className='Titulos'>Identificacion personaje</b> <br/> {character?.id}</p>
        </div>
        
    </article>
  )
}
