import { useState } from 'react'
import style from './cartOrder.module.css'
import {CarOutlined, ShopOutlined} from "@ant-design/icons"

type ContactInfoProps = {
  setCurrentStage: (a: number) => void
  currentStage: number
  n: number
}

export const ContactInfo: React.FC<ContactInfoProps> = ({setCurrentStage, currentStage, n}) => {
  const [delMethod, setDelMethod] = useState(0)
  // 0 - delivery ; 1 - pickup
  const delCN = style.delivery + (delMethod === 0 ? " " + style.active : " ")
  const pickupCN = style.pickup + (delMethod === 1 ? " " + style.active : " ")

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

    Форма

    <div className={style.continue}>Далее</div>
  </div>
} 