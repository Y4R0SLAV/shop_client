import React, {useEffect} from 'react'
import s from "./Header.module.css"
import Navigation from './HeaderNavigation'
import { Link } from 'react-router-dom'
import "../../index.css"
import { instagamURL, vkURL } from '../../assets/linksAndConstants'
import { requestAccessories, requestClothes, requestCollections } from '../../redux/reducers/shopReducer'
import { useDispatch } from 'react-redux'

import { InstagramOutlined } from '@ant-design/icons'

const Header = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(requestAccessories())
    dispatch(requestCollections())
    dispatch(requestClothes())
  }, []);

  return (
    <div className={s.content + " noprint"}>
      <div className={s.contentHeader}>
        
        <div> {/* просто пустой блок чтобы сервисы и название норм встали по центру и в конец */} </div>

        <div>
          <h3 className={s.shopName}> <Link to="/"> OVSYANKIN BOUTIQUE </Link> </h3>
        </div>

        <nav className={s.servicesBlock}>
          <ul className={s.services}>

            <li className={s.serviceItem}> 
              <a href={instagamURL}> <InstagramOutlined style={{fontSize: "32px", color: "#333333"}} /> </a>
            </li>

            <li className={s.serviceItem}>
              <a href={vkURL}><svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" color="#333"><path d="M29.7333 2.26667C27.5333 0 23.8667 0 16.6667 0H15.3333C8.13333 0 4.46667 0 2.26667 2.26667C0 4.46667 0 8.13333 0 15.3333V16.6667C0 23.9333 0 27.5333 2.26667 29.8C4.46667 32 8.13333 32 15.3333 32H16.6667C23.9333 32 27.5333 32 29.8 29.7333C32 27.5333 32 23.8667 32 16.6667V15.3333C32 8.13333 32 4.46667 29.7333 2.26667ZM22.9333 23.0667C22.1333 20.5333 20.0667 18.6 17.4 18.3333V23.0667H17C9.73333 23.0667 5.53333 18.0667 5.4 9.73333H9.06667C9.2 15.8667 11.8667 18.4 14 18.9333V9.73333H17.4667V15C19.6 14.8 21.8 12.4 22.5333 9.73333H26C25.4 13 23 15.4 21.3333 16.4C23.0667 17.2 25.8 19.2667 26.8 23.0667H22.9333Z" fill="currentColor"></path></svg> </a>
            </li>

          </ul>
        </nav>

      </div>

      <Navigation />
    </div>
  )
}

export default Header
