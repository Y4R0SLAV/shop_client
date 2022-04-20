import { Link } from 'react-router-dom'
import s from "./bottomNavigation.module.css"

import { FileDoneOutlined, HeartOutlined, SearchOutlined, ShoppingOutlined } from '@ant-design/icons'
import { CART_ROUTE, FAVOURITE_ROUTE, SEARCH_ROUTE } from "../../routes"
import { selectFavCount } from '../../redux/selectors/favSelector'
import { selectCartCount } from '../../redux/selectors/cartSelector'
import { useSelector } from 'react-redux'

const BottomNavigation = () => {
  const favCount = useSelector(selectFavCount)
  const cartCount = useSelector(selectCartCount)

  const getNavItem = (link: string, Component: any, text: string) => {
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
      {getNavItem(FAVOURITE_ROUTE, HeartOutlined, `Избранное ${favCount > 0 ? "(" + favCount + ")" : ""}`)}
      {getNavItem(CART_ROUTE, ShoppingOutlined, `Корзина ${cartCount > 0 ? "(" + cartCount + ")" : ""}`)}
    </div>
  )
}



export default BottomNavigation
