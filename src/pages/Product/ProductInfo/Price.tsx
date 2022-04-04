import React, {FC} from 'react';
import style from "./productInfo.module.css"

const numToPrice = (price: number) => {
  return `${price > 1000 ? Math.floor(price / 1000) + " " + price % 1000 : price } ₽`
}

export const Price: FC<{price: number, sale_price: number }> = ({price, sale_price}) => {
  return <div className={style.price}>
    {sale_price > 0 ? numToPrice(price - sale_price) : numToPrice(price) }
    {sale_price > 0 ?
        <div className="">
          <div className={style.salingLogo}> SALE </div>
          <div className={style.saling}> 
            <span className={style.oldPrice}> {price} &#8381;
            </span>  Скидка {sale_price} &#8381;
          </div>
        </div> : ''}
  </div>
}