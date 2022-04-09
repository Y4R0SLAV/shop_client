import style from './productInfo.module.css'
import {HeartOutlined} from '@ant-design/icons'

export const AddToFavourite = () => {
  return <div className={style.favBlock}>
    <h6 className={style.favouriteTitle}>Сохраните товар в закладках</h6> 
    <div className={style.favButton} onClick={() => alert('hoi')}>
      <HeartOutlined className={style.heart}/>
      В избранное
      </div>
  </div>
}