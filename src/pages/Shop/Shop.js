import React, { useState } from "react"
import s from "./shop.module.css"
import headerImg from "../../assets/shopPage/defaultShopHeader.png"
import saleImg from "../../assets/shopPage/saleImg.png"
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import ShopItems from '../../components/ShopItems/ShopItems'

const Shop = () => {
  // isSale буду брать из url (в роутс написано)
  // shopItemsArray буду брать из стейта через хуки

  return (
    <div className={s.wrapper}>

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
