import React, { useEffect, useRef, useState } from 'react'
import { Category, Image, Link, Title } from './styles'

export const Categories = ({ cover, emoji, id }) => {
  const Categories = useRef(null)
  const [isOn, setIsOn] = useState(true)
  useEffect(() => {
    const intersection = new window.IntersectionObserver((entries) => {
      setIsOn(entries[0].isIntersecting)
    })
    intersection.observe(Categories.current)
  }, [isOn])

  return (
    <div ref={Categories}>
      {
        !isOn && (
          <Title>Hola</Title>
        )
      }
      <Category>
        <Link to={`/pet/${id}`}>
          <Image src={cover} alt={`Image ${id}`} />
          <div>{emoji}</div>
        </Link>
      </Category>
    </div>
  )
}
