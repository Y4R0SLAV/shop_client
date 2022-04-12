import { Link } from 'react-router-dom'
import s from "./bottomNavigation.module.css"

import { FileDoneOutlined, HeartOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons'
import { CART_ROUTE, FAVOURITE_ROUTE, SEARCH_ROUTE } from "../../routes"


const BottomNavigation = () => {
  // потом брать их из локального стоража
  const favouritesCount = 5;
  const basketCount = 27;

  const getNavItem = (link, Component, text) => {
    return <div className={s.navItem}>
      <Link to={link} className={s.item}>
        <Component className={s.logo} />
        {text}
      </Link>
    </div>
  }

  return (
    <div className={s.navigation}>
      {getNavItem(SEARCH_ROUTE, SearchOutlined, "Поиск")}
      {/* хз что делать потом сделаю*/}
      {getNavItem("#", FileDoneOutlined, "Отследить заказ")}
      {getNavItem(FAVOURITE_ROUTE, HeartOutlined, `Избранное ${favouritesCount > 0 ? "(" + favouritesCount + ")" : ""}`)}
      {getNavItem(CART_ROUTE, ShoppingOutlined, `Корзина ${basketCount > 0 ? "(" + basketCount + ")" : ""}`)}
    </div>
  )
}



export default BottomNavigation
