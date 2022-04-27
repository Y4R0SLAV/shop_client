import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom';
import { BUREAUCRACY_ROUTE, PRIVACY_POLICY, SHIPPING_PAYMENT } from './../../../routes'
import {LockOutlined} from '@ant-design/icons'
import style from "./cartOrder.module.css"
import { useState } from 'react'
import cn from 'classnames'
import { SuccessBlock } from './SuccessBlock';

type UserEmailProps = {
  setCurrentStage: (a: number) => void
  currentStage: number
  n: number
  email: string
  setEmail: (x: string) => void
  mailing: boolean
  setMailing: (x: boolean) => void
}

export const UserEmail: React.FC<UserEmailProps> = ({setCurrentStage, currentStage, n, email, setEmail, mailing, setMailing}) => {
  if (currentStage === n) {
    return <div className=""> 
      <div className={style.header}>
        Введите адрес своей электронной почты. На этот адрес будут отправляться уведомления о статусе заказа.
      </div>

      <Formik
        initialValues={{ email, conditions: false, mailing }}
        validate={values => {
          const errors = {} as {email?: string, conditions?: string}
          if (!values.email) {
            errors.email = 'Пожалуйста, введите адрес электронной почты'
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'С введённым адресом что-то не так. Пожалуйста, убедитесь, что ввели электронный адрес правильно.'
          }
          
          if (!values.conditions) {
            errors.conditions = 'Required'
          }
          return errors
        }}

        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {

            setEmail(values.email)
            setMailing(values.mailing)

            setCurrentStage(n + 1)
            setSubmitting(false)
          }, 400)
        }}
      >

      {({ isSubmitting, touched, errors }) => (
      <Form>
        <div className={style.textField}>
          <Field  type="email" name="email"  placeholder="Ваш адрес электронной почты" 
                  className={cn(style.input, {[style.inputError]: errors.email && touched.email})}/>
          <ErrorMessage name="email" component="div" className={style.error}/>
        </div>
        
        <label className={style.label}>
          <Field type="checkbox" name="conditions" />
          <span> </span>
          <div className={errors.conditions && touched.conditions ? style.conditionsError : style.conditionsSuccess }>Я принимаю условия:
            <span><Link to={BUREAUCRACY_ROUTE + "" + SHIPPING_PAYMENT}> Условия доставки и оплаты / Shipping and Payment </Link>,</span> 
            <span><Link to={BUREAUCRACY_ROUTE + "" + PRIVACY_POLICY}> Согласие на обработку персональных данных / Consent to the Processing of Personal Data </Link> </span>
          </div>
        </label>

        <label className={style.label}>
          <Field type="checkbox" name="mailing" className={style.checkbox} />
          <span> </span>
          <div className="">Подписаться на новости и эксклюзивные предложения</div>
        </label>

        <div className={style.buttonBlock }>

          <button type="submit" disabled={isSubmitting} className={style.button} >
            Оформить заказ
          </button>

          <div className={style.lockBlock}>
            <LockOutlined className={style.lock} />
            <span className={style.span}>Все данные защищены сертификатом TLS и передаются в зашифрованном виде.</span>
          </div>
        </div>
      </Form>
      )}
      </Formik>

      <div className={style.continue}>Далее</div>
    </div>
  } else {
    return <SuccessBlock title="Адрес эл. почты" params={[email]} setStage={setCurrentStage} stage={n} change="Изменить адрес почты"/>
  }
} 