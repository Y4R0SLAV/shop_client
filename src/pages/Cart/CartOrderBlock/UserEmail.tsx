import { Formik, Form, Field, ErrorMessage } from 'formik'
import { Link } from 'react-router-dom';
import { BUREAUCRACY_ROUTE, PRIVACY_POLICY, SHIPPING_PAYMENT } from './../../../routes'
import {LockOutlined} from '@ant-design/icons'
import style from "./cartOrder.module.css"
import { useState } from 'react';

type UserEmailProps = {
  setCurrentStage: (a: number) => void
  currentStage: number
  n: number
}

export const UserEmail: React.FC<UserEmailProps> = ({setCurrentStage, currentStage, n}) => {
  const [errorInInput, setErrorInInput] = useState(false)
  const [errorInConditions, setErrorInConditions] = useState(false)

  return <div className=""> 
    <div className="">
      Введите адрес своей электронной почты. На этот адрес будут отправляться уведомления о статусе заказа.
    </div>

    <Formik
      initialValues={{ email: '', conditions: false, mailing: false }}
      validate={values => {
        const errors = {} as {email?: string, conditions?: string}
        if (!values.email) {
          errors.email = 'Пожалуйста, введите адрес электронной почты'
          setErrorInInput(true)
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'С введённым адресом что-то не так. Пожалуйста, убедитесь, что ввели электронный адрес правильно.'
          setErrorInInput(true)
        } else {
          setErrorInInput(false)
        }
        
        if (!values.conditions) {
          errors.conditions = 'Required'
          setErrorInConditions(true)
        } else {
          setErrorInConditions(false)
        }

        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2))
          setSubmitting(false)
        }, 400)
      }}
    >

    {({ isSubmitting }) => (
    <Form>
      <div className={style.textField}>
        { errorInInput 
          ? <Field type="email" name="email" className={style.input + " " + style.inputError } placeholder="Ваш адрес электронной почты" />
          : <Field type="email" name="email" className={style.input} placeholder="Ваш адрес электронной почты" />
        }
        
        <ErrorMessage name="email" component="div" className={style.error}/>
      </div>
      


      <label className={style.label}>
        <Field type="checkbox" name="conditions" />
        <span> </span>
        <div className={errorInConditions ? style.conditionsError : style.conditionsSuccess }>Я принимаю условия:
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
} 