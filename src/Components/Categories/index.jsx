import React from 'react'
import { CategoriesContainer, Category, Image, Link } from './styles'

export const Categories = ({ src = 'https://res.cloudinary.com/midudev/image/upload/w_150/v1555671700/category_cats.jpg' }) => {
  return (
    <>
      <CategoriesContainer>
        {
        [1, 2, 3, 4, 5, 6, 7].map(element => {
          return (
            <Category href='#' key={element}>
              <Link href='#'>
                <Image src={src} alt={`Image ${element}`} />
                <div>?</div>
              </Link>
            </Category>
          )
        })
      }
      </CategoriesContainer>
    </>
  )
}
