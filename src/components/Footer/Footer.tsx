import React from 'react'
import s from "./footer.module.css"
import FooterAboutDelivery from './FooterAboutDelivery/FooterAboutDelivery'
import FooterInfo from './FooterInfo/FooterInfo'

import "../../index.css"
import BottomNavigation from './../BottomNavigation/BottomNavigation'

const Footer = () => {
  return (
    <div className="noprint">
      <BottomNavigation />
      <div className={s.border}> </div>
      <div className={s.wrapper}>
        <FooterAboutDelivery />
      </div>
      <FooterInfo />
    </div>
  )
}

export default Footer
