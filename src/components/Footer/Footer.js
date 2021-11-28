import React from 'react'
import s from "./footer.module.css"
import FooterAboutDelivery from './FooterAboutDelivery/FooterAboutDelivery'
import FooterInfo from './FooterInfo/FooterInfo'
import "../../index.css"

const Footer = () => {
  return (
    <div className="noprint">
      <div className={s.border}> </div>
      <div className={s.wrapper}>
        <FooterAboutDelivery />
      </div>
      <FooterInfo />
    </div>
  )
}

export default Footer
