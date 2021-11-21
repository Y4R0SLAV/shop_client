import React from 'react'
import s from "./Header.module.css"
import Navigation from './Navigation'

const Header = ({ collectionsTypes, clothesTypes, accessoriesTypes }) => {
  return (
    <div className={s.content}>
      <div className={s.contentHeader}>

        <div>
          <h3 className={s.shopName}> Название магазина </h3>
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
