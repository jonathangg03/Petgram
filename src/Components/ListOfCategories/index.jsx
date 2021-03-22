import React, { useEffect, useRef, useState } from 'react'
import { CategoriesContainer } from './styles'
import { CategoriesFromQuery } from '../../containers/CategoriesFromQuery'

export const ListOfCategories = () => {
  const Categories = useRef(null)
  const [isOn, setIsOn] = useState(true)
  useEffect(() => {
    const intersection = new window.IntersectionObserver((entries) => {
      setIsOn(entries[0].isIntersecting)
    })
    intersection.observe(Categories.current)
  }, [])
  return (
    <div ref={Categories}>
      <CategoriesContainer isOn={isOn}>
        <CategoriesFromQuery />
        {!isOn && (
          <CategoriesFromQuery />
        )}
      </CategoriesContainer>
    </div>
  )
}
