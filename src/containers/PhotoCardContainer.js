import { withPhotos } from '../HOCS/withPhotos'
import { ListOfPhotos } from '../Components/ListOfPhotos'

export const PhotoCardContainer = withPhotos(ListOfPhotos)
