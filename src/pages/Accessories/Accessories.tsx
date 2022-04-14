import { useSelector } from "react-redux"
import { selectAccessories } from './../../redux/selectors/accessoriesSelector'
import { getBlocksFromArray } from './../../assets/getBlocksForColAccClo/getBlocksForColAccClo';


export const Accessories = () => {
  let accessories = useSelector(selectAccessories)

  return getBlocksFromArray(accessories)
}