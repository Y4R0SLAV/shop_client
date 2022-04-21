import React from 'react'
import footerS from "./footerInfo.module.css"
import { Link } from 'react-router-dom'
import { BUREAUCRACY_ROUTE, PRIVACY_POLICY, SHIPPING_PAYMENT } from '../../../routes';


const FooterInfo = () => {
  return (
    <div className={footerS.wrapper}>
      <div className={footerS.content}>
        <span className={footerS.shopName}> &copy; 2022 Ovsyankin Boutique </span>
        <div className={footerS.links}>
          <Link to={BUREAUCRACY_ROUTE + PRIVACY_POLICY}> Согласие на обработку персональных данных / Consent to the Processing of Personal Data</Link> <br />
          <Link to={BUREAUCRACY_ROUTE + SHIPPING_PAYMENT} > Условия доставки и оплаты / Delivery and Payment </Link>
        </div>
      </div>
    </div>
  )
}

export default FooterInfo
