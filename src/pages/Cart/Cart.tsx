import style from "./cart.module.css"
import { CartItemsBlock } from './CartItemsBlock'
import { CartOrderBlock } from './CartOrderBlock'

export const Cart = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.container}>
        <CartItemsBlock />
        <CartOrderBlock />
      </div>
    </div>
  )
}

