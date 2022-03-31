import React, { useState } from "react"
import s from "./shop.module.css"
import headerImg from "../../assets/shopPage/defaultShopHeader.png"
import saleImg from "../../assets/shopPage/saleImg.png"
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import ShopItems from '../../components/ShopItems/ShopItems'

import { useDispatch } from 'react-redux'
import { requestProducts } from './../../redux/reducers/shopReducer'

const Shop = () => {
  // isSale буду брать из url (в роутс написано)
  // shopItemsArray буду брать из стейта через хуки
  const isSale = false
  const shopItemsArray = []

  const dispatch = useDispatch()

  return (
    <div className={s.wrapper}>

      <button onClick={() => dispatch(
        requestProducts(null, null, false)
      )}>
        ЧЕК ЧЕК ЧЕК
      </button>

      {isSale
        ? <img className={s.headerImg} src={saleImg} alt="Sale" />
        : <img className={s.headerImg} src={headerImg} alt="Ovsyankin Boutique" />
      }

      <ShopItems shopItemsArray={shopItemsArray} />
      <BottomNavigation />

    </div>
  )
}

export default Shop
