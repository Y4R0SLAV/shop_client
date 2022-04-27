import style from './cartOrder.module.css'
import { SuccessBlock } from './SuccessBlock'
import { CartInfoBlock } from './CartInfoBlock'
import { Formik, Field, Form } from 'formik'

type DeliveryInfoProps = {
  setCurrentStage: (a: number) => void
  currentStage: number
  n: number
}

const DelForm: React.FC<{setStage: (x: number) => void, stage: number}> = ({setStage, stage}) => {
  return <Formik
          initialValues={{
            picked: 'One',
          }}
          onSubmit={async (values) => {
            setStage(stage + 1)
          }}
        >
          {({ values }) => (
            <Form>
              
              <div role="group" aria-labelledby="my-radio-group" className={style.radioForm}>
                <label className={style.radioLabel}>
                  <div className={style.radioInputBlock}>
                    <Field type="radio" name="picked" value="One" className={style.radioInput}/>
                  </div>
                  <span className={style.radioSpan}>Самовывоз в Тверь</span>
                </label>
              </div>

        <      div className={style.delInfo}>
                <span className={style.infoEn}>
                  Обратите внимания что не все товары могут быть в наличии, часть ассортимента оформляется по предзаказу!
                </span>
                <span className={style.infoRu}>
                  После оформления заказа, мы с вами свяжемся для уточнения деталей.
                </span>
              </div>

              <div className={style.delInfo}>
                <span className={style.infoRu}>
                  Где забрать заказ:
                </span>
                <span className={style.infoEn}>
                  Тверь, улица Прошина, 1
                </span>
              </div>

              <div className={style.delInfo}>
                <span className={style.infoRu}>
                  График работы магазина:
                </span>
                <span className={style.infoEn}>
                  ПН-ВС с 11:00 до 21.00
                </span>
              </div>

              <div className={style.delInfo}>
                <span className={style.infoEn}>
                  По готовности вашего заказа мы с вами свяжемся.
                </span>
              </div>


              <button type="submit" className={style.button}>Продолжить</button>
            </Form>
          )}
        </Formik>

}

export const DeliveryInfo: React.FC<DeliveryInfoProps> = ({setCurrentStage, currentStage, n}) => {
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

      <h4>Самовывоз</h4>

      <DelForm setStage={setCurrentStage} stage={n}/>

      <div className={style.continue}>Далее</div>
    </div>
  } else if (currentStage > n ){
    return <SuccessBlock title="Информация о самовывозе" params={['Самовывоз в Твери']} setStage={setCurrentStage} stage={n} change="Изменить способ доставки"/>
  } else {
    return <CartInfoBlock title="Опции доставки и самовывоза" subtitle="Укажите свои данные и выберите, как будете получать заказ."/>
  }

} 
