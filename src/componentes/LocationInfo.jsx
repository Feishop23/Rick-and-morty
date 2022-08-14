import React from 'react'

export const LocationInfo = ({location}) => {
   
  return (
    <article className='Container'>
        <h2 className='name'>{location?.name}</h2>
        <ul>
        <li className='Li1'><b>Type:</b>{location?.type}</li>
        <li className='Li2'><b>Dimention:</b> {location?.dimension}</li>
        <li className='li3'><b>Population: </b>{location?.residents.length}</li>
        </ul>
    </article>
  )
}
