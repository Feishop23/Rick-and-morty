import axios from 'axios'
import React, { useEffect, useState } from 'react'
import useCharacterCard from './Hooks/useCharacterCard'
import { useEpisode } from './Hooks/useEpisode'

export const CardCharacter = ({resident}) => {
const character = useCharacterCard(resident)

const episodeLocation = useEpisode(character)



  return (
    
    <article>
      <div className='Father'>
        <img className='Photo' src={character?.image} alt="" />
        <p><b className='Titulos'>Name</b>  <br/> {character?.name}</p>
        <p>{character?.status}</p>
        <p><b className='Titulos'>Primera aparicion</b> <br/> {episodeLocation?.episode}</p>
        <p><b className='Titulos'>Identificacion personaje</b> <br/> {character?.id}</p>
        </div>
        
    </article>
  )
}
