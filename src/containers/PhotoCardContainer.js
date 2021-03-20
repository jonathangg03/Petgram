import { withPhotos } from '../HOCS/withPhotos'
import { PhotoCard } from '../Components/PhotoCard'

export const PhotoCardContainer = withPhotos(PhotoCard)
