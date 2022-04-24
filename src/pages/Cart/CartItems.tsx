import { useState  } from "react"
import { cartItemType, deleteItemFromCart } from "../../localStorageInteraction"
import style from "./cart.module.css"
import { CloseOutlined, DownOutlined } from '@ant-design/icons'
import { Link } from 'react-router-dom'
import { numToPrice } from './../Product/ProductInfo/ProductComponents/Price'
import { setCartArrFromLS } from './../../redux/reducers/cartReducer'
import { useDispatch } from "react-redux"


type CartItemsProps = {
  cartItems: Array<cartItemType>
}

const getItemBlock = (item: cartItemType, dispatch: any) => {
  return <div className={style.itemBlock}>
    
    <Link to={'/product/' + item.id }className={style.itemImg}>
      <img src={item.url} alt={item.title} />
    </Link>

    <div className={style.itemInfo}>
      <Link to={'/product/' + item.id }className={style.itemTitle}> {item.title} </Link>
      <div className={style.itemSizing}> Размер: {item.size?.toUpperCase()} </div>
      <div className={style.itemCount}> 
        <span> Кол-во: {item.count} </span>
        <DownOutlined className={style.itemDown}/> 
      </div>
    </div>

    <CloseOutlined className={style.itemClose} onClick={
      () => 
      {
        deleteItemFromCart(item.id, item.size || '');
        dispatch(setCartArrFromLS())
    }}
      /> 
    <div className={style.itemTotalPrice}> {numToPrice(item.price * item.count)} </div>

  </div>
}

export const CartItems: React.FC<CartItemsProps> = ({cartItems}) => {
  const [showAllItems, setShowAllItems] = useState(cartItems.length <= 3)
  const dispatch = useDispatch()

  if (cartItems.length === 0) {
    return <div style={{marginBottom: "15px", fontSize: "18px"}}> В корзине пока что нет товаров</div>
  }

  if (showAllItems) {
    return <div className=""> 
      {cartItems.map(item => getItemBlock(item, dispatch))}
    </div>
  } else {
    const firstFourItems = cartItems.slice(0, 4).map(item => item.url)

    return <div className={style.moreThanThree} onClick={() => setShowAllItems(true)}>
      <div className={style.fourItems}> 
        {firstFourItems.map(item => {
          return <div className={style.itemImg + ' ' + style.img}> <img src={item} alt="" /> </div>
        })}
      </div>
      <div className={style.itemCount} style={{margin: "15px 0"}}>
        <span>{cartItems.length} товаров</span>
        <DownOutlined className={style.itemDown}/> 
      </div>
    </div>
  }
}