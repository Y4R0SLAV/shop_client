import React from 'react'
import s from "./Header.module.css"
import Navigation from './HeaderNavigation'
import { Link } from 'react-router-dom'
import "../../index.css"


const Header = ({ collectionsTypes, clothesTypes, accessoriesTypes }) => {
  return (
    <div className={s.content + " " + "noprint"}>
      <div className={s.contentHeader}>
        <div> {/* просто пустой блок чтобы сервисы и название норм встали по центру и в конец */} </div>
        <div>
          <h3 className={s.shopName}> <Link to="/"> Название магазина </Link> </h3>
        </div>

        <nav className={s.servicesBlock}>
          <ul className={s.services}>
            <li className={s.serviceItem}> <a href="https://instagram.com/marys_username_"> Instagram </a> </li>
            <li className={s.serviceItem}> <a href="https://vk.com/ykorablev"> VK </a>  </li>
          </ul>
        </nav>
      </div>

      <Navigation collectionsTypes={collectionsTypes} clothesTypes={clothesTypes} accessoriesTypes={accessoriesTypes} />
    </div>
  )
}

export default Header
