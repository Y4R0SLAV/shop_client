import React from 'react'
import s from "./footerAboutDelivery.module.css"

const Delivery = () => {
  return (
    <div className={s.content}>
      <h2>Доставка и оплата</h2>

      <div class={s.description}>
        <p><b>Оплата</b></p>
        <p>- Мы работаем по 100% предоплате.&nbsp;</p><p>- Оплата только с банковской карты или переводом на Яндекс.Деньги</p><p>- Отправка товара только после полной оплаты заказа</p><p><b>Доставка</b></p><p>- Доставка Почтой России, отправка по России от 300р., по всему миру от 600р.</p><p>- При оформлении доставки Почтой России, получение товара происходит в почтовом отделении.</p><p>- Необходимо полностью указывать адрес, где вы сможете получить почтовое извещение.</p><p>- Необходимо полностью указывать ФИО, в противном случае почтовая служба может не выдать ваш заказ.</p><p>- Возможна доставка курьерской службой EMS, тариф рассчитывается при оформлении заказа.</p><p>- Для жителей Твери возможен самовывоз по адресу ул. Прошина, д.1</p><p>- Если в описании товара указано что это предзаказ,&nbsp; то ваш заказ будет отправлен после изготовления партии. Сроки изготовления указаны на странице товара.</p><p>- Срок доставки от 7 до 30 дней, в зависимости от региона и способа доставки.</p><p></p><p>- К сожалению, из-за санкций база не позволяет оформлять заказы в Республику Крым и Севастополь. Для того, чтобы заказать товар в эти регионы, необходимо указать реальные адрес и индекс, выбрав при этом любой другой российский регион. Также в комментарии к заказу следует указать Республику Крым или Севастополь.- В комментариях к заказу указывайте страницу ВК для оперативной связи.</p><p></p><p></p><p>- Адрес для возвратов: - (В данное время, возврат не осуществялется)</p><p></p><p></p><p>ИП - </p><p>ИНН: -, ОГРНИП: -</p>
      </div>
      <div class="cb"></div>
    </div>
  )
}

const Fasility = () => {
  return (
    <div className={s.content}>
      <h2> Магазинчек </h2>
      <div className={s.description}>
        <p > Бренд одежды и мерча от и для популярных артистов </p>

        <div className={s.adressAndWorks}>
          <div className={s.adressBlock + " " + s.block}>
            <p> <b> Адрес </b> </p>
            <div className={s.adress}>
              <p> Тверь, ул. Прошина, 1 </p>
              <a className={s.button}
                href="https://www.google.com/maps/dir/?api=1&destination=Большая Тверская ул., 57 корпус 1"
                target="_blank"> Построить маршрут
              </a>
            </div>
          </div>

          <div className={s.worksBlock + " " + s.block}>
            <p> <b> Часы работы </b> </p>
            <div className={s.works}>
              <p> пн-вс </p>
              <p> 10.00 - 23.00 </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

const Contacts = () => {
  return (
    <div className={s.content}>
      <h2> Вопросы по поводу заказов </h2>
      <div className={s.navigation}>
        <a className={s.phone} href="tel:+79607137757">
          <img src="#" /> <span className={s.number}> +7 (960) 713-77-57 </span>
        </a>
        <a className={s.mail} href="mailto:jeros1337@gmail.com">
          <img src="#" /> <span className={s.email}> jeros1337@gmail.com </span>
        </a>
        <a className={s.vk} href="https://vk.com/lefrootovo" target="_blank">
          <img src="#" /> <span className={s.id}> vk.com/lefrutovo </span>
        </a>
      </div>
      <br />
      <br />
      <h5> Подпишитесь на нас </h5>
      <br />
      <div className={s.navigation}>
        <a className={s.instagram} href="https://instagram.com/marys_username_">
          <img src="#" /> <span className={s.number}> INSTAGRAM </span>
        </a>
        <a className={s.mail} href="https://vk.com/lefrootovo">
          <img src="#" /> <span className={s.email}> VKONTAKTE </span>
        </a>
        <a className={s.vk} href="https://youtube.com/danik_korablev00" target="_blank">
          <img src="#" /> <span className={s.id}> YOUTUBE </span>
        </a>
      </div>
    </div>
  )
}
const FooterAboutDelivery = () => {

  return (
    <div>
      <Delivery />
      <Fasility />
      <Contacts />
    </div>
  )
}

export default FooterAboutDelivery
