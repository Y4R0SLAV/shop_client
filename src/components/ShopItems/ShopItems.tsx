import React, { useState } from "react"
import { ProductType } from "../../redux/reducers/shopReducer"
import s from "./shopItems.module.css"
import { Link } from 'react-router-dom'

const ShopItems: React.FC<{shopItemsArray: Array<ProductType>}> = ({ shopItemsArray }) => {
  const [focusedItem, setFocusedItem] = useState(0)

  const getFinishedItem = (item: ProductType) => {
    let currentPhoto = item.front
    if (focusedItem === item.id) { currentPhoto = item.back }

    return <div className={s.shopItem}

      onMouseEnter={() => { setFocusedItem(item.id) }}
      onMouseLeave={() => { setFocusedItem(0) }}>

      <Link to={"/product/" + item.id}>
        <div className={s.imageBlock}>
          {item.sale > 0 && <div className={s.saleLabel}> РАСПРОДАЖА </div>}
          <div className={s.clickabled}>
            <img src={currentPhoto} /> <br />
            <span className={s.itemName}> {item.title} </span>
          </div>
        </div>
      </Link>

      {item.sale > 0 && <div> было <span className={s.oldPrice}> {item.price} </span> &#8381;.     Скидка {item.sale} &#8381;.</div>}
      {+item.price - +item.sale} &#8381;
    </div>
  }

  return <div className={s.shopItems}>
    {shopItemsArray.map(item => getFinishedItem(item))}
  </div>
}


export default ShopItems;