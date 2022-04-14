import { useSelector } from "react-redux"
import { selectCollections } from './../../redux/selectors/collectionSelector'
import { getBlocksFromArray } from './../../assets/getBlocksForColAccClo/getBlocksForColAccClo'


export const Collections = () => {
  let collections = useSelector(selectCollections)

  return getBlocksFromArray(collections)
}