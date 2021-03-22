import React from 'react'
import { Category, Image, Link } from './styles'

export const Categories = ({ cover = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg', emoji = '?', id = 0 }) => {
  return (
    <div>
      <Category>
        <Link to={`/pet/${id}`}>
          <Image src={cover} alt={`Image ${id}`} />
          <div>{emoji}</div>
        </Link>
      </Category>
    </div>
  )
}
