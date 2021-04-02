import React from 'react'
import { Category, Image, Link } from './styles'
import PropTypes from 'prop-types'

export const Categories = ({ cover, emoji = '?', id }) => {
  return (
    <Category>
      <Link to={`/pet/${id}`}>
        <Image src={cover} alt={`Image ${id}`} />
        <p>{emoji}</p>
      </Link>
    </Category>
  )
}

Categories.propTypes = {
  cover: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  emoji: PropTypes.string
}
