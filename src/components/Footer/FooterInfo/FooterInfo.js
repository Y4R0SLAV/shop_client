import React from 'react'
import footerS from "./footerInfo.module.css"
import headerS from "./../../Header/Navigation.module.css"
import { Link } from 'react-router-dom'
import { BUREAUCRACY_ROUTE, PRIVACY_POLICY, SHIPPING_PAYMENT } from './../../../routes';

const FooterInfo = () => {
  return (
    <div className={footerS.wrapper}>
      <div className={footerS.content}>
        <div className={footerS.links}>
          <Link to={BUREAUCRACY_ROUTE + "/" + PRIVACY_POLICY} reloadDocument={true}> Согласие на обработку персональных данных / Consent to the Processing of Personal Data</Link> <br />
          <Link to={BUREAUCRACY_ROUTE + "/" + SHIPPING_PAYMENT} reloadDocument={true}> Условия доставки и оплаты / Delivery and Payment </Link>
        </div>
        <span className={footerS.shopName}> &copy; Магазинчек </span>
        <div className={footerS.platform}>
          Работает на платформе <br />
          Пока что ни на какой
        </div>
      </div>
    </div>
  )
}

export default FooterInfo
