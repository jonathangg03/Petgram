import React, { useEffect, useRef, useState, memo } from 'react'
import { CategoriesContainer } from './styles'
import { CategoriesFromQuery } from '../../containers/CategoriesFromQuery'

const ListOfCategoriesComponent = () => {
  const Categories = useRef(null)
  const [isOn, setIsOn] = useState(true)

  useEffect(() => {
    const intersection = new window.IntersectionObserver((entries) => {
      const { isIntersecting } = entries[0]
      if (!isIntersecting) {
        setIsOn(false)
      } else {
        setIsOn(true)
      }
    })
    intersection.observe(Categories.current)
  }, [Categories])
  return (
    <div ref={Categories}>
      <CategoriesContainer isOn={isOn}>
        <CategoriesFromQuery />
      </CategoriesContainer>
    </div>
  )
}

export const ListOfCategories = memo(ListOfCategoriesComponent)
