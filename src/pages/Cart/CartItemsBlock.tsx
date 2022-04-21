import { useSelector } from "react-redux"
import style from "./cart.module.css"
import { selectCartItems } from './../../redux/selectors/cartSelector'
import { Link } from 'react-router-dom'
import { useState } from "react"
import { Formik, Form, Field, ErrorMessage } from 'formik'

const CartInfo: React.FC<{price: number}> = ({price}) => {
  const [formShowed, setFormShowed] = useState(false)

  return <div className="">

    <div className={style.totalPrice}>
      <span>ИТОГО</span>
      <span>{price} ₽</span>
    </div>

    { formShowed 
        ? "форма"
        : <div className={style.promoCode} onClick={(e) => {e.stopPropagation(); setFormShowed(true)}}>
            <span>Есть промо-код или подарочный сертификат?</span>
            <div>Введите код</div>
          </div>
    }







    <Formik
      initialValues={{ promo: '', gift: '' }}

      validate={values => {
        const errors = {}
        if (values.promo !== "123") {
          // @ts-ignore
          errors.promo = 'Неверный код'
        }  

        if (values.gift !== "123") {
          // @ts-ignore
          errors.gift = 'Сертификата с таким кодом нет. Убедитесь, что ввели код верно.'
        }

        return errors
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }} 
    >
      {({ isSubmitting }) => (

      <Form>
        <Field type="text" name="promo" />
        <ErrorMessage name="promo" component="div" />
        <button type="submit" disabled={isSubmitting}>
          Применить
        </button>

        <Field type="text" name="gift" />

        <ErrorMessage name="gift" component="div" />
        <button type="submit" disabled={isSubmitting}>
          Применить
        </button>
      </Form>
      )}

    </Formik>






    <div className={style.returnToMain}>
      <span>Что-то забыли? </span>
      <Link to="/">Вернитесь в каталог товаров</Link>
    </div>

  </div>
}

export const CartItemsBlock = () => {
  const cartItems = useSelector(selectCartItems)
  const totalPrice = cartItems.map(item => item.price * item.count).reduce((acc, a) => acc + a, 0)


  return <div className=""> 
      {/* <CartItems /> */}
      <CartInfo price={totalPrice}/> 
    </div>
}
