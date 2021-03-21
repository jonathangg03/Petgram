import React from 'react'
import { Category, Image, Link } from './styles'

export const Categories = ({ cover, emoji, id, path }) => {
  return (
    <>
      <Category href='#'>
        <Link href='#'>
          <Image src={cover} alt={`Image ${id}`} />
          <div>{emoji}</div>
        </Link>
      </Category>
    </>
  )
}
