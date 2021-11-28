import React, { useState } from "react"
import s from "./shop.module.css"
import headerImg from "../../assets/shopPage/defaultShopHeader.png"
import BottomNavigation from '../../components/BottomNavigation/BottomNavigation'
import ShopItems from '../../components/ShopItems/ShopItems'
import Pagination from '../../components/Pagination/Pagination';

const Shop = ({ shopItemsArray, totalItemsCount, currentPageNumber, itemsPerPage, setCurrentPage }) => {
  return (
    <div className={s.wrapper}>
      <img className={s.headerImg} src={headerImg} alt="Магазинчек" />
      <ShopItems shopItemsArray={shopItemsArray} />
      <Pagination totalItemsCount={totalItemsCount}
                  currentPageNumber={currentPageNumber}
                  itemsPerPage={itemsPerPage} 
                  setCurrentPage={setCurrentPage} />
      <BottomNavigation />
    </div>
  )
}

export default Shop
