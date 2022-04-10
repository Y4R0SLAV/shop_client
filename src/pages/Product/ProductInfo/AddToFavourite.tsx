import {useState} from 'react'
import style from './productInfo.module.css'
import { HeartOutlined, HeartFilled} from '@ant-design/icons'
import { addItemToFavourite, getItemsFromFavourite, deleteItemFromFavourite } from './../../../localStorageInteraction'
import { useSelector } from 'react-redux'
import { selectCurrentProductId } from '../../../redux/selectors/productSelector'
import { Link } from 'react-router-dom'
import { FAVOURITE_ROUTE } from './../../../routes';

export const AddToFavourite = () => {
  const id = useSelector(selectCurrentProductId)
  const [favIds, setFavIds] = useState(getItemsFromFavourite)

  if (favIds.includes(id)) {
    return <div className={style.favBlock}>
      <h6 className={style.favouriteTitle}>Сохраните товар в закладках</h6> 

      <div className={style.favButton} onClick={() => {deleteItemFromFavourite(id); setFavIds(getItemsFromFavourite)}}>
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
    <div className={style.favButton} onClick={() => {addItemToFavourite(id); setFavIds(getItemsFromFavourite)}}>
      <HeartOutlined className={style.heart}/>
      В избранное
    </div>
  </div>
}