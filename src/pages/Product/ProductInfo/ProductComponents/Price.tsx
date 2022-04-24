import React, {FC} from 'react';
import style from "../productInfo.module.css"

export const numToPrice = (price: number) => {
  if (price > 1000) {
    const remain = price % 1000 
    let strRemain = ''
    if (remain < 100) { strRemain = "0"+ remain } else { strRemain = remain.toString() }

    return Math.floor(price / 1000) + " " + strRemain + " ₽"
  }
  return price
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