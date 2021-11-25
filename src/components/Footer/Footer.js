import React from 'react'
import s from "./footer.module.css"
import FooterNavigation from './FooterNavigation/FooterNavigation'
import FooterAboutDelivery from './FooterAboutDelivery/FooterAboutDelivery'
import FooterInfo from './FooterInfo/FooterInfo'
import "../../index.css"

const Footer = ({ favouritesCount, basketCount }) => {
  return (
    <div className="noprint">
      <div className={s.wrapper}>
        <FooterNavigation favouritesCount={favouritesCount} basketCount={basketCount} />
      </div>
      <div className={s.border}> </div>
      <div className={s.wrapper}>
        <FooterAboutDelivery />
      </div>
      <FooterInfo />
    </div>
  )
}

export default Footer
