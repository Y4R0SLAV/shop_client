import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import s from "./bottomNavigation.module.css"

import favouritesImg from '../../assets/footerNavigationIcons/favourite.png'
import searchImg from '../../assets/footerNavigationIcons/search.png'
import userImg from '../../assets/footerNavigationIcons/user.png'
import trackingImg from '../../assets/footerNavigationIcons/evaluation.png'
import backetImg from '../../assets/footerNavigationIcons/bag.png'

import { CART_ROUTE, PRODUCT_ROUTE, FAVOURITE_ROUTE, SEARCH_ROUTE } from "../../routes"

const BottomNavigation = () => {

  // потом брать их из локального стоража
  const favouritesCount = 5;
  const basketCount = 27;

  const getNavItem = (link, img, text) => {
    return <div className={s.navItem}>
      <Link to={link}>
        <div> <img alt="" className={s.img} src={img} /> </div>
        {text}
      </Link>
    </div>
  }

  return (
    <div className={s.navigation}>
      {getNavItem(SEARCH_ROUTE, searchImg, "Поиск")}
      {/* хз что делать потом сделаю*/}
      {getNavItem("#", trackingImg, "Отследить заказ")}
      {getNavItem(FAVOURITE_ROUTE, favouritesImg, `Избранное ${favouritesCount > 0 ? "(" + favouritesCount + ")" : ""}`)}
      {getNavItem(CART_ROUTE, backetImg, `Корзина ${basketCount > 0 ? "(" + basketCount + ")" : ""}`)}
    </div>
  )
}



export default BottomNavigation
