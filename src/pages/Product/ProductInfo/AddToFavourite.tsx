import {useState} from 'react'
import style from './productInfo.module.css'
import { HeartOutlined, HeartFilled} from '@ant-design/icons'
import { addItemToFavourite, getItemsFromFavourite, deleteItemFromFavourite } from './../../../localStorageInteraction'
import { useSelector } from 'react-redux'
import { selectProductToFav } from '../../../redux/selectors/productSelector'
import { Link } from 'react-router-dom'
import { FAVOURITE_ROUTE } from './../../../routes';

export type currentItemToFavType = {
  title: string,
  price: number,
  sale_price: number, 
  url: string, 
  id: number
}


export const AddToFavourite = () => {
  const [favItems, setFavItems] = useState(getItemsFromFavourite) || []

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
      <h6 className={style.favouriteTitle}>Сохраните товар в закладках</h6> 

      <div className={style.favButton} onClick={() => {deleteItemFromFavourite(id); setFavItems(getItemsFromFavourite)}}>
        <HeartFilled className={style.heart + " " + style.filledHeart}/>
          В избранном
      </div>

      <Link to={FAVOURITE_ROUTE}> 
        <div className={style.favButton + " " + style.favLink}> Смотреть избранное </div>
      </Link> 
    </div>
  }


  return <div className={style.favBlock}>
    <h6 className={style.favouriteTitle}>Сохраните товар в закладках</h6> 
    <div className={style.favButton} onClick={() => {addItemToFavourite(currentItem); setFavItems(getItemsFromFavourite)}}>
      <HeartOutlined className={style.heart}/>
      В избранное
    </div>
  </div>
}