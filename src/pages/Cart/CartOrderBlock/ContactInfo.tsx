import { useState } from 'react'
import style from './cartOrder.module.css'
import {CarOutlined, ShopOutlined} from "@ant-design/icons"
import { Formik, Form, Field, ErrorMessage } from 'formik'
import cn from 'classnames'
import {CheckCircleOutlined} from "@ant-design/icons"
import { SuccessBlock } from './SuccessBlock';
import { CartInfoBlock } from './CartInfoBlock';

type ContactInfoProps = {
  setCurrentStage: (a: number) => void
  currentStage: number
  n: number

  fullname: string
  setFullname: (x: string) => void
  tel: string
  setTel: (x: string) => void
  country: string
  setCountry: (x: string) => void
  address: string
  setAddress: (x: string) => void
  city: string
  setCity: (x: string) => void 
  index: string
  setIndex: (x: string) => void
}


const DeliveryForm = () => {
  return <div>
    <div className={style.header}>Все поля обязательны к заполнению, если не указано обратное.</div>
    <Formik
      initialValues={{ country: '', fullname: '', tel: '', address: '', city: '', index: '' }}

      validate={values => {
        const errors = {} as { country?: string, fullname?: string, tel?: string, address?: string, city?: string, index?: string }
        if (!values.country) { errors.country = 'Пожалуйста, укажите страну' }
        if (!values.fullname) { errors.fullname = 'Пожалуйста, укажите своё имя' }
        if (!values.tel) { errors.tel = 'Пожалуйста, введите номер телефона' }
        if (!values.address) { errors.address = 'Пожалуйста, введите адрес' }
        if (!values.city) { errors.city = 'Пожалуйста, укажите город' }
        if (!values.index) { errors.index = 'Введите почтовый индекс' }

        return errors;
      }}

      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      
    >
      {({ isSubmitting, errors, touched, handleChange }) => (
        <Form>
          <div className={style.formField}>
            <div className={style.formFieldName}>
              {errors.country && touched.country && <span className={style.pulse} />}
              Страна  
            </div>
            <Field  as="select" type="text" name="country" 
            className={cn(style.input, style.smallInput, {[style.inputError]: errors.country && touched.country})}>
              <option value=""> Пожалуйта, выберите страну</option>
              <option value="Russia">Россия</option>
              {/* <option value="Armenia">Armenia</option>
              <option value="Australia">Australia</option>
              <option value="Austria">Austria</option>
              <option value="Azerbaijan">Azerbaijan</option>
              <option value="Bahamas">Bahamas</option>
              <option value="Bangladesh">Bangladesh</option>
              <option value="Belarus">Belarus</option>
              <option value="Belgium">Belgium</option>
              <option value="Bolivia">Bolivia</option>
              <option value="Brazil">Brazil</option>
              <option value="Bulgaria">Bulgaria</option>
              <option value="Cameroon">Cameroon</option>
              <option value="Canada">Canada</option>
              <option value="Central African Republic">Central African Republic</option>
              <option value="Chile">Chile</option>
              <option value="China">China</option>
              <option value="Colombia">Colombia</option>
              <option value="Congo">Congo</option>
              <option value="Congo">Congo, the Democratic Republic of the</option>
              <option value="Costa Rica">Costa Rica</option>
              <option value="Cuba">Cuba</option>
              <option value="Czech Republic">Czech Republic</option>
              <option value="Denmark">Denmark</option>
              <option value="Dominican Republic">Dominican Republic</option>
              <option value="Egypt">Egypt</option>
              <option value="Estonia">Estonia</option>
              <option value="Finland">Finland</option>
              <option value="France">France</option>
              <option value="Germany">Germany</option>
              <option value="Greece">Greece</option>
              <option value="Greenland">Greenland</option>
              <option value="Iceland">Iceland</option>
              <option value="India">India</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Ireland">Ireland</option>
              <option value="Israel">Israel</option>
              <option value="Italy">Italy</option>
              <option value="Japan">Japan</option>
              <option value="Kazakhstan">Kazakhstan</option>
              <option value="Kyrgyzstan">Kyrgyzstan</option>
              <option value="Latvia">Latvia</option>
              <option value="Luxembourg">Luxembourg</option>
              <option value="Mexico">Mexico</option>
              <option value="Mongolia">Mongolia</option>
              <option value="Netherlands">Netherlands</option>
              <option value="Netherlands Antilles">Netherlands Antilles</option>
              <option value="Pakistan">Pakistan</option>
              <option value="Peru">Peru</option>
              <option value="Poland">Poland</option>
              <option value="Portugal">Portugal</option>
              <option value="Romania">Romania</option>
              <option value="Russia">Russian Federation</option>
              <option value="Slovakia">Slovakia (Slovak Republic)</option>
              <option value="Slovenia">Slovenia</option>
              <option value="Somalia">Somalia</option>
              <option value="Span">Spain</option>
              <option value="Sweden">Sweden</option>
              <option value="Switzerland">Switzerland</option>
              <option value="Tajikistan">Tajikistan</option>
              <option value="Thailand">Thailand</option>
              <option value="Turkey">Turkey</option>
              <option value="Turkmenistan">Turkmenistan</option>
              <option value="Turks and Caicos">Turks and Caicos Islands</option>
              <option value="Ukraine">Ukraine</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="United States">United States</option>
              <option value="Uzbekistan">Uzbekistan</option>  */}
            </Field>
            <ErrorMessage name="country" component="div" className={style.error}/>
          </div>

          <div className={style.doubleField}>
            <div className={style.formField}>
              <div className={style.formFieldName}>
                {errors.fullname && touched.fullname && <span className={style.pulse} />}
                ФИО (Укажите полностью фамилию и имя)
              </div>
              <Field  type="text" name="fullname" onChange = {handleChange}
                      className={cn(style.input, style.smallInput, {[style.inputError]: errors.fullname && touched.fullname})} />
              <ErrorMessage name="fullname" component="div" className={style.error}/>
            </div>

            <div className={style.formField}>
              <div className={style.formFieldName}>
                {errors.tel && touched.tel && <span className={style.pulse} />}
                Телефон
              </div>
              <Field type="text" name="tel" className={cn(style.input, style.smallInput, {[style.inputError]: touched.tel && errors.tel})} />
              <ErrorMessage name="tel" component="div" className={style.error}/>
            </div>
          </div>

          <div className={style.formField}>
            <div className={style.formFieldName}>
              {(errors.address || errors.city || errors.index) 
                && (touched.address || touched.city || touched.index) && <span className={style.pulse} />}
              Адрес
            </div>
        
            <Field  type="text" name="address" placeholder="Улица, дом, квартира (Укажите свой адрес полностью)"
                    className={cn(style.input, style.smallInput, {[style.inputError]: errors.address && touched.address})} />
            <ErrorMessage name="address" component="div" className={style.error}/>
          </div>

          <div className={style.doubleField}>
            <div className={style.formField}>
              <Field  type="text" name="city" placeholder="Город"
                            className={cn(style.input, style.smallInput, {[style.inputError]: errors.tel && touched.tel})} />
              <ErrorMessage name="city" component="div" className={style.error}/>
            </div>

            <div className={style.formField}>
              <Field type="text" name="index" className={cn(style.input, style.smallInput, {[style.inputError]: errors.index && touched.index})} placeholder="Индекс (необязательно)"/>
              <ErrorMessage name="index" component="div" className={style.error}/>
            </div>
          </div>

          <button type="submit" disabled={isSubmitting} className={style.button}>
            Продолжить
          </button>
        </Form>
      )}
    </Formik>
  </div>

}

const PickupForm = () => {
  return <div>
  <div className={style.header}>Введите свою контактную информацию:</div>
  <Formik
    initialValues={{ fullname: '', tel: ''}}

    validate={values => {
      const errors = {} as { fullname?: string, tel?: string}
      if (!values.fullname) { errors.fullname = 'Пожалуйста, укажите своё имя' }
      if (!values.tel) { errors.tel = 'Пожалуйста, введите номер телефона' }
      return errors
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({ isSubmitting, errors, touched }) => (
      <Form>
        <div className={style.formField}>
          <div className={style.formFieldName}>
            {touched.fullname && errors.fullname && <span className={style.pulse} />}
            ФИО (Укажите полностью фамилию и имя)
          </div>
          <Field type="text" name="fullname"
          className={cn(style.input, style.smallInput, {[style.inputError]: touched.fullname && errors.fullname})} />
          <ErrorMessage name="fullname" component="div" className={style.error}/>
        </div>


        <div className={style.formField}>
          <div className={style.formFieldName}>
            {touched.tel && errors.tel && <span className={style.pulse} />}
            Телефон
          </div>
          <Field type="text" name="tel" className={cn(style.input, style.smallInput, {[style.inputError]: touched.tel && errors.tel})} />
          <ErrorMessage name="tel" component="div" className={style.error}/>
        </div>

        <button type="submit" disabled={isSubmitting} className={style.button}>
          Продолжить
        </button>
      </Form>
    )}
  </Formik>
</div>

}

export const ContactInfo: React.FC<ContactInfoProps> = ({ setCurrentStage, currentStage, n, 
                                                          fullname, setFullname, tel, setTel,
                                                          country, setCountry, address, setAddress,
                                                          city, setCity, index, setIndex }) => {
  const [delMethod, setDelMethod] = useState(0)

  // 0 - delivery ; 1 - pickup
  const delCN = cn(style.delivery, {[style.active]: delMethod === 0})
  const pickupCN = cn(style.delivery, {[style.active]: delMethod === 1})
  if (currentStage === n ) {
    return <div className={style.contactInfo}> 
      <div className={style.delInfo}>
        <span className={style.infoRu}>
          Способ доставки не влияет на сроки обработки заказа! Обратите внимание, что часть товаров в статусе предзаказа!
        </span>
        <span className={style.infoEn}>
          The shipping method does not affect the processing time of the order! Please note that some of the products are in pre-order status!
        </span>
      </div>

      <div className={style.delInfo}>
        <span className={style.infoRu}>
          При заполнении полей адреса и ФИО, указывайте полные данные для почтовых служб
        </span>
        <span className={style.infoEn}>
          When filling in the address and full name fields, indicate complete data for postal services
        </span>
      </div>

      <h4>Доставка</h4>
        <div>Выберите, как хотите получить заказ: </div>
        <div className={style.delBlock}>

          <div className={delCN} onClick={() => setDelMethod(0)}>
            <div className={style.delIconText}>
              <CarOutlined className={style.delIcon}/>
              Доставка по адресу
            </div>
          </div>

          <div className={pickupCN} onClick={() => setDelMethod(1)}>
            <div className={style.delIconText}>
              <ShopOutlined className={style.delIcon}/>
              Самовывоз
            </div>
          </div>

        </div>

      { delMethod === 0 && <DeliveryForm /> }
      { delMethod === 1 && <PickupForm /> }
      

      <div className={style.continue}>Далее</div>
    </div>
  } else if (currentStage > n ){
    if (delMethod === 0) {
      return <SuccessBlock title="Адрес доставки" params={[fullname, address + ", " + city + ", " + index + ", " + country]}/>
    } else if (delMethod === 1) {
      return <SuccessBlock title="Контактная информация" params={[fullname, tel]}/>
    } 
    return <div className=""> АШИБКА </div> 
  } else {
    return <CartInfoBlock title="Способ доставки" subtitle="Выберите, как будете получать свой заказ."/>
  }
} 