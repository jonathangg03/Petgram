import React from 'react'
import { PhotoCardContainer, PhotoCardItem, PhotoCardImage, LikesContainer, Likes } from './styles'
import { MdFavoriteBorder } from 'react-icons/md'
import { Query } from 'react-apollo'
import { withPhotos } from '../../HOCS/withPhotos'
// Like negro: MdFavorite

export const PhotoCard = ({ data }) => {
  return (
    <Query query={withPhotos}>
      {
      ({ loading, error, data = [] }) => {
        console.log(data)
        const { photos = [] } = data// data y photos las inicializamos por defecto en vacío, para no controlar el loading, de lo contrario, daría error
        return (
          <PhotoCardContainer>
            {
         photos.map(photo => {
           return (
             <PhotoCardItem key={photo.id}>
               <PhotoCardImage src={photo.src} alt={`Photo: ${photo.id}`} />
               <LikesContainer>
                 <MdFavoriteBorder />
                 <Likes>{photo.likes} Me gusta</Likes>
               </LikesContainer>
             </PhotoCardItem>
           )
         })
       }
          </PhotoCardContainer>
        )
      }
      }
    </Query>
  )

  // console.log(data)
  // if (data.loading) {
  //   return <h1>Loading...</h1>
  // }
  // if (data.error) {
  //   return <h1>Error</h1>
  // }
  // return (
  //   <PhotoCardContainer>
  //     {
  //       data.photos.map(photo => {
  //         return (
  //           <PhotoCardItem key={photo.id}>
  //             <PhotoCardImage src={photo.src} alt={`Photo: ${photo.id}`} />
  //             <LikesContainer>
  //               <MdFavoriteBorder />
  //               <Likes>{photo.likes} Me gusta</Likes>
  //             </LikesContainer>
  //           </PhotoCardItem>
  //         )
  //       })
  //     }
  //   </PhotoCardContainer>
  // )
}
