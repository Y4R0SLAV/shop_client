import React, { useEffect } from "react"
import s from "./shop.module.css"
import headerImg from "../../assets/shopPage/defaultShopHeader.png"
import { useLocation } from 'react-router-dom'
import saleImg from "../../assets/shopPage/saleImg.png"
import ShopItems from '../../components/ShopItems/ShopItems'

import { useDispatch, useSelector } from 'react-redux'
import { selectProducts } from "../../redux/selectors/productSelector"

import { requestProducts } from '../../redux/reducers/shopReducer'
import { SALES_ROUTE } from "../../routes"

const Shop = () => {
  let location = useLocation()
  const shopItemsArray = useSelector(selectProducts)
  const isSale = location.pathname === SALES_ROUTE

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestProducts(undefined, undefined, isSale))
  }, [location.pathname]);

  return (
    <div className={s.wrapper}>

      {isSale
        ? <img className={s.headerImg} src={saleImg} alt="Sale" />
        : <img className={s.headerImg} src={headerImg} alt="Ovsyankin Boutique" />
      }

      <ShopItems shopItemsArray={shopItemsArray}/>
    </div>
  )
}

export default Shop
