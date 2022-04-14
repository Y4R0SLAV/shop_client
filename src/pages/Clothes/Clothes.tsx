import { useSelector } from "react-redux"
import { selectClothes } from './../../redux/selectors/clothesSelector'
import { getBlocksFromArray } from './../../assets/getBlocksForColAccClo/getBlocksForColAccClo';


export const Clothes = () => {
  let clothes = useSelector(selectClothes)
  
  return getBlocksFromArray(clothes)
}