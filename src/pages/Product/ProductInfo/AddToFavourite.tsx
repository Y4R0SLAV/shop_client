import style from './productInfo.module.css'
import { useSelector } from 'react-redux'
import { selectProductToFav } from '../../../redux/selectors/productSelector'
import { selectFavItems } from './../../../redux/selectors/favSelector'
import { AddDeleteFavButton } from './../../../assets/AddDeleteFavButton/AddDeleteFavButton'

export type currentItemToFavType = {
  title: string,
  price: number,
  sale_price: number, 
  url: string, 
  id: number
}

export const AddToFavourite = () => {
  const favItems = useSelector(selectFavItems)
  const currentItem = useSelector(selectProductToFav)
  const id = currentItem.id

  const itemInArray = (id: number) => {
    for (let i = 0; i < favItems.length; i++) {
      if (favItems[i].id === id) return true
    }
    return false
  }
  
  if (favItems && itemInArray(currentItem.id)) {
    return <div className={style.favBlock}>
      <h6 className={style.favouriteTitle}> Сохраните товар в закладках </h6> 
      <AddDeleteFavButton added id={id} item={currentItem} showToFav />
    </div>
  }

  return <div className={style.favBlock}>
    <h6 className={style.favouriteTitle}>Сохраните товар в закладках</h6> 
    <AddDeleteFavButton added={false} id={id} item={currentItem} />
  </div>
}