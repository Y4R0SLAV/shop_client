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
import { selectCollections } from "../../redux/selectors/collectionSelector"

const Shop = () => {
  const location = useLocation()
  const dispatch = useDispatch()

  const isSale = location.pathname === SALES_ROUTE
  const typeOfPage = location.pathname.split('/')[1] || undefined
  const id = +location.pathname.split('/')[2] || undefined

  const curPageIsCollections = typeOfPage === 'collections'
  const collections = useSelector(selectCollections)
  let headerUrl = headerImg

  if (curPageIsCollections && collections.length > 0) { 
    headerUrl = collections.filter(item => item.id === id)[0].header 
  } else if (isSale) { 
    headerUrl = saleImg 
  } else if (typeOfPage !== undefined) {
    // я либо в одеждах либо в аксессуарах
    headerUrl = ''
  }

  const shopItemsArray = useSelector(selectProducts)

  useEffect(() => {
    if (curPageIsCollections) {
      dispatch(requestProducts(undefined, id, isSale))
    } else {
      dispatch(requestProducts(id, undefined,isSale))
    }
  }, [location.pathname]);

  return (
    <div className={s.wrapper}>
      {headerUrl !== '' && <img className={s.headerImg} src={headerUrl} alt="" />}

      <ShopItems shopItemsArray={shopItemsArray}/>
    </div>
  )
}

export default Shop
