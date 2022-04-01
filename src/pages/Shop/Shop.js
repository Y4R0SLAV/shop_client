import React, { useEffect } from "react"
import s from "./shop.module.css"
import headerImg from "../../assets/shopPage/defaultShopHeader.png"
import saleImg from "../../assets/shopPage/saleImg.png"
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import ShopItems from '../../components/ShopItems/ShopItems'

import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from "../../redux/selectors/productSelector"

import {
  requestProducts, requestAccessories,
  requestClothes, requestCollections
} from './../../redux/reducers/shopReducer'

const Shop = () => {
  // isSale буду брать из url (в роутс написано)
  const shopItemsArray = useSelector(selectProducts)
  const isSale = false

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestAccessories())
    dispatch(requestCollections())
    dispatch(requestClothes())
    dispatch(requestProducts())
  }, []);

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
