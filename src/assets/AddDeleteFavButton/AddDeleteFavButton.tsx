import { HeartOutlined, HeartFilled} from '@ant-design/icons'
import { addItemToFavourite, deleteItemFromFavourite } from './../../localStorageInteraction'
import { setFavArrFromLS } from '../../redux/reducers/favReducer'
import { useDispatch } from 'react-redux'
import { currentItemToFavType } from '../../pages/Product/ProductInfo/AddToFavourite'
import { Link } from 'react-router-dom'
import { FAVOURITE_ROUTE } from './../../routes'
import style from './addDeleteFavButton.module.css'

export const AddDeleteFavButton: React.FC<{added: boolean, id: number, item: currentItemToFavType, showToFav?: boolean}> = ({added, id, item, showToFav = false}) => {
  const dispatch = useDispatch()

  if (added) {
    return  <div className="">
              <div className={style.favButton} onClick={() => {deleteItemFromFavourite(id); dispatch(setFavArrFromLS())}}>
                <HeartFilled className={style.heart + " " + style.filledHeart}/>
                  В избранном
              </div>
                  
              { showToFav && <Link to={FAVOURITE_ROUTE}> 
                <div className={style.favButton + " " + style.favLink}> Смотреть избранное </div>
              </Link> } 

            </div>

  } else {
    return <div className={style.favButton} onClick={() => {addItemToFavourite(item); dispatch(setFavArrFromLS())}}>
            <HeartOutlined className={style.heart}/>
            В избранное
          </div>
  }
}