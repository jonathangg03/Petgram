import React from 'react'
import { Query } from 'react-apollo'
import { gql } from 'apollo-boost'
import { Categories } from '../Components/Categories'
import { CategoriesContainer } from '../Components/Categories/styles'

const GET_CATEGORIES = gql`
  query getCategories {
    categories {
      id,
      emoji,
      cover
    }
  }
`
export const CategoriesFromQuery = () => {
  return (
    <Query query={GET_CATEGORIES}>
      {
        ({ loading, error, data }) => {
          if (loading) {
            return <p>Loading...</p>
          }
          if (error) {
            return <p>Error</p>
          }
          const { categories } = data
          return (
            <CategoriesContainer>
              {
                categories.map(category => {
                  return (
                    <Categories key={category.id} {...category} />
                  )
                })
              }
            </CategoriesContainer>
          )
        }
      }
    </Query>
  )
}
