import React, { useState } from "react"
import s from "./shop.module.css"
import headerImg from "../../assets/shopPage/defaultShopHeader.png"
import saleImg from "../../assets/shopPage/saleImg.png"
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import ShopItems from '../../components/ShopItems/ShopItems'
import Pagination from '../../components/Pagination/Pagination'

const Shop = ({ shopItemsArray, totalItemsCount, currentPageNumber, itemsPerPage, setCurrentPage, isSale = false }) => {


  return (
    <div className={s.wrapper}>
      {isSale ? <img className={s.headerImg} src={saleImg} alt="Sale" />
        : <img className={s.headerImg} src={headerImg} alt="Ovsyankin Boutique" />}
      <ShopItems shopItemsArray={shopItemsArray} isSale={isSale} />
      {/* isSale передаю просто потому что не могу сделать запрос сразу за продуктами со скидкой
        и приходится ручками фильтровать  */}
      <Pagination totalItemsCount={totalItemsCount}
        currentPageNumber={currentPageNumber}
        itemsPerPage={itemsPerPage}
        setCurrentPage={setCurrentPage} />
      <BottomNavigation />
    </div>
  )
}

export default Shop
