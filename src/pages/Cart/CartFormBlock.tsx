import { Formik, Form, Field, ErrorMessage } from 'formik'
import style from "./cart.module.css"


type FormPropsType = {
  initialValue: string
  successfulArr: Array<string>
  errorMsg: string
  placeholder: string
  autofocus?: boolean

}

const FormForGiftCodes: React.FC<FormPropsType> = ({ initialValue, successfulArr, errorMsg, placeholder, autofocus}) => {
  return     <Formik
  initialValues={{field: initialValue}}

  validateOnChange={false}
  validateOnBlur={false}

  validate={values => {
    const errors = {} as { field?: string}

    if (!values.field) {
      errors.field = 'Поле обязательно для заполнения'
    } else if (!successfulArr.includes(values.field) && values.field) {
      errors.field = errorMsg
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
    <div className={style.form}>
      <Field  type="text" name="field" className={style.input}
              placeholder={placeholder} autoFocus={autofocus}
              />
      <button type="submit" disabled={isSubmitting} className={style.button}>
        Применить
      </button>
    </div>
    <ErrorMessage name="field" component="div" className={style.errorMsg} />
  </Form>
  )}

</Formik>
}

export const CartFormBlock = () => {
  return <div className={style.forms} > 

    <FormForGiftCodes  initialValue="" successfulArr={['123']}
              errorMsg={'Неверный код.'} placeholder={'Введите промокод'} autofocus/>
              
    <FormForGiftCodes  initialValue="" successfulArr={['123']} 
                        errorMsg={'Сертификата с таким кодом нет. Убедитесь, что ввели код верно.'} 
                        placeholder={"Введите код сертификата"} />

  </div>
}