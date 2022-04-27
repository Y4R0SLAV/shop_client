import style from './cartOrder.module.css'
import { CartInfoBlock } from './CartInfoBlock'
import { Formik, Field, Form } from 'formik'

type PayBlockProps = {
  setCurrentStage: (a: number) => void
  currentStage: number
  n: number
}

const PayForm = () => {
  return <Formik
      initialValues={{ picked: '' }}
      onSubmit={async (values) => {
        alert(values.picked)
      }}
    >
      {({ values }) => (
        <Form>
          <div role="group" aria-labelledby="my-radio-group" className={style.radioForm}>
            <label className={style.radioLabel}>
              <div className={style.radioInputBlock}>
                <Field type="radio" name="picked" value="CARD" className={style.radioInput}/>
              </div>
              <span className={style.radioSpan}>Банковская карта</span>
            </label>

            <label className={style.radioLabel}>
              <div className={style.radioInputBlock}>
                <Field type="radio" name="picked" value="UMONEY" className={style.radioInput}/>
              </div>
              <span className={style.radioSpan}>ЮMoney</span>
            </label>

            <label className={style.radioLabel}>
              <div className={style.radioInputBlock}>
                <Field type="radio" name="picked" value="SBER" className={style.radioInput}/>
              </div>
              <span className={style.radioSpan}>Сбербанк Онлайн</span>
            </label>

            <label className={style.radioLabel}>
              <div className={style.radioInputBlock}>
                <Field type="radio" name="picked" value="QIWI" className={style.radioInput}/>
              </div>
              <span className={style.radioSpan}>QIWI Кошелек</span>
            </label>

            <label className={style.radioLabel}>
              <div className={style.radioInputBlock}>
                <Field type="radio" name="picked" value="TINK" className={style.radioInput}/>
              </div>
              <span className={style.radioSpan}>Тинькофф</span>
            </label>
          </div>

          <button type="submit" disabled className={style.button}>Перейти к оплате</button>
        </Form>
      )}
    </Formik>
}

export const PayBlock: React.FC<PayBlockProps> = ({setCurrentStage, currentStage, n}) => {
  if (currentStage < n) {
    return <CartInfoBlock title="Оплата" subtitle="Выберите способ оплаты и введите платёжные данные."/>
  } else { 
    return <div className={style.contactInfo}> 
      <h4>Оплата</h4>
      <div>Выберите способ оплаты:</div>
      <PayForm />
    </div>
  }
} 