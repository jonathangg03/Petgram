import React from 'react'
import { Category, Image, Link } from './styles'

export const Categories = ({ cover, emoji, id }) => {
  return (
    <>
      <Category>
        <Link to={`/pet/${id}`}>
          <Image src={cover} alt={`Image ${id}`} />
          <div>{emoji}</div>
        </Link>
      </Category>
    </>
  )
}
