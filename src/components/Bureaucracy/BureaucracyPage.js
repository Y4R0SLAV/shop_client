import React from "react"
import { useParams } from 'react-router-dom'
import { PRIVACY_POLICY, SHIPPING_PAYMENT, BUREAUCRACY_ROUTE } from '../../routes'
import s from "./bureaucracy.module.css"
import PageNotFound from '../../pages/PageNotFound'
import { Link } from 'react-router-dom'
import PrivacyPolicy from './PrivacyPolicy'
import ShippingPaymnet from './ShippingPaymnet'
import "../../index.css"

const Bureaucracy = () => {
  const { currentPage } = useParams()

  const privacePolicyTitle = "Согласие на обработку персональных данных/Consent to the Processing of Personal Data"
  const shippingPaymentTitle = "Условия доставки и оплаты / Delivery and Payment"

  if (currentPage !== PRIVACY_POLICY & currentPage !== SHIPPING_PAYMENT) {
    return <PageNotFound />
  }

  return (
    <div>
      <div className={s.navigation + " " + "noprint"}>
        <div className={s.links}>
          {currentPage !== PRIVACY_POLICY
            ? <Link to={BUREAUCRACY_ROUTE + "/" + PRIVACY_POLICY}>  {privacePolicyTitle} </Link>
            : <p>  {privacePolicyTitle} </p>}
        </div>

        <div>
          {currentPage !== SHIPPING_PAYMENT
            ? <Link to={BUREAUCRACY_ROUTE + "/" + SHIPPING_PAYMENT}>  {shippingPaymentTitle} </Link>
            : <p>  {shippingPaymentTitle} </p>}
        </div>
      </div>

      {currentPage === PRIVACY_POLICY
        ? <PrivacyPolicy />
        : <ShippingPaymnet />
      }


      <div className={s.printButton + " " + "noprint"}>
        <a class="print-doc" href="javascript:(print());">
          Распечатать
        </a>
      </div>

    </div >
  )

}

export default Bureaucracy
