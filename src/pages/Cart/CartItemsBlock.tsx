import { useSelector } from "react-redux"
import style from "./cart.module.css"
import { selectCartItems } from './../../redux/selectors/cartSelector'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { CartFormBlock } from "./CartFormBlock"
import { CartItems } from './CartItems';


const CartInfo: React.FC<{price: number}> = ({price}) => {
  const [formShowed, setFormShowed] = useState(false)

  return <div className={style.cartInfo}>

    <div className={style.totalPrice}>
      <span>ИТОГО</span>
      <span>{price} ₽</span>
    </div>

    { formShowed 
        ? <CartFormBlock />
        : <div className={style.promoCode} onClick={() => setFormShowed(true)}>
            <span>Есть промо-код или подарочный сертификат?</span>
            <div> Введите код</div>
          </div>
    }

    <div className={style.returnToMain}>
      <span>Что-то забыли? </span>
      <Link to="/">Вернитесь в каталог товаров</Link>
    </div>

  </div>
}


export const CartItemsBlock = () => {
  const cartItems = useSelector(selectCartItems)
  const totalPrice = cartItems.map(item => item.price * item.count).reduce((acc, a) => acc + a, 0)  

  return <div className={style.cartItemsBlock}> 
      <CartItems cartItems={cartItems}/>
      <CartInfo price={totalPrice}/> 
    </div>
}
