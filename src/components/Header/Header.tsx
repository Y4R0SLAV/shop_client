import React from 'react'
import s from "./Header.module.css"
import Navigation from './HeaderNavigation'
import { Link } from 'react-router-dom'
import "../../index.css"
import { instagamURL, vkURL } from './../../assets/links'


const Header = () => {
  return (
    <div className={s.content + " noprint"}>
      <div className={s.contentHeader}>
        
        <div> {/* просто пустой блок чтобы сервисы и название норм встали по центру и в конец */} </div>

        <div>
          <h3 className={s.shopName}> <Link to="/"> OVSYANKIN BOUTIQUE </Link> </h3>
        </div>

        <nav className={s.servicesBlock}>
          <ul className={s.services}>
            <li className={s.serviceItem}> <a href={instagamURL}> Instagram </a> </li>
            <li className={s.serviceItem}> <a href={vkURL}> VK </a>  </li>
          </ul>
        </nav>

      </div>

      <Navigation />
    </div>
  )
}

export default Header
