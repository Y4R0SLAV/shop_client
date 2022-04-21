import style from "./cart.module.css"
import { CartItemsBlock } from './CartItemsBlock'
import { CartFormBlock } from './CartFormBlock'


export const Cart = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <CartItemsBlock />
        <CartFormBlock />
      </div>
    </div>
  )
}

