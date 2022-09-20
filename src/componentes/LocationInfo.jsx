import React from 'react'

export const LocationInfo = ({location}) => {
   
  return (
    <article className='Container'>
        <h1 className='name'>{location?.name}</h1>
        <h3 className='Li2'><b>Dimention:</b> {location?.dimension}</h3>
    </article>
  )
}
