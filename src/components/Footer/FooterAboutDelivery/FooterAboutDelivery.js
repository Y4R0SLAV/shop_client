import React from 'react'
import s from "./footerAboutDelivery.module.css"



const Fasility = () => {
  return (
    <div className={s.shopWrapper}>
      <h2> Ovsyankin Boutique </h2>

      <div class={s.img}>
        <img src="https://avatars.mds.yandex.net/i?id=e0c4bb94ece93f312534574a7092ce99-4634814-images-thumbs&n=13&exp=1" alt="Ovsyankin Boutique" />
      </div>

      <div class={s.shopDesc}>
        <div class={s.shopInfo}>

          <div class={s.shopBlock}>
            <span className={s.shopP}> Здесь всегда можно купить большинство товаров с нашего сайта и выпить вкусный кофе. </span>
          </div>

          <div class={s.shopBlock}>
            <span className={s.shopH}> Адрес: </span>
            <span className={s.shopP}> Тверь, ул. Прошина, 1 </span>
          </div>

          <div class={s.shopBlock}>
            <span className={s.shopH}> Часы работы: </span>
            <span className={s.shopP}> 12:00 - 01:00 </span>
          </div>

          <div class={s.shopBlock}>
            <span className={s.shopH}> Контакты: </span>
            <span className={s.shopP}> Режим работы тех. поддержки : 11:00-21:00 по мск </span>
            <a href="mailto:yakorablevrr@gmail.com" target="_blank">
              <span className={s.shopP + " " + s.shopClickabled}> yakorablevrr@gmail.com </span>
            </a>
          </div>

        </div>


        <div class={s.shopMap}>
          <div class={s.shopContainer}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1188.4723336436305!2d35.88677604672146!3d56.885938406078225!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b6866ac5949e6d%3A0xdc98b73154bb72ff!2z0JHQvtC70YzRiNCw0Y8g0KLQstC10YDRgdC60LDRjyDRg9C7LiwgNTcg0LrQvtGA0L_Rg9GBIDEsINCi0LLQtdGA0YwsINCi0LLQtdGA0YHQutCw0Y8g0L7QsdC7LiwgMTcwMDIx!5e0!3m2!1sru!2sru!4v1650546183377!5m2!1sru!2sru"
              style={{ width: "600px", height: "450px", border: "0" }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
      </div>


    </div>
  )
}



const Delivery = () => {
  return (
    <div className={s.content}>
      <h3>Доставка и оплата</h3>

      <div class={s.description}>
        <p><b>Оплата</b></p>
        <p>- Мы работаем по 100% предоплате.</p><p>- Оплата только с банковской карты или переводом на Яндекс.Деньги</p><p>- Отправка товара только после полной оплаты заказа</p><p><b>Доставка</b></p><p>- Доставка Почтой России, отправка по России от 300р., по всему миру от 600р.</p><p>- При оформлении доставки Почтой России, получение товара происходит в почтовом отделении.</p><p>- Необходимо полностью указывать адрес, где вы сможете получить почтовое извещение.</p><p>- Необходимо полностью указывать ФИО, в противном случае почтовая служба может не выдать ваш заказ.</p><p>- Возможна доставка курьерской службой EMS, тариф рассчитывается при оформлении заказа.</p><p>- Для жителей Твери возможен самовывоз по адресу ул. Прошина, д.1</p><p>- Если в описании товара указано что это предзаказ,&nbsp; то ваш заказ будет отправлен после изготовления партии. Сроки изготовления указаны на странице товара.</p><p>- Срок доставки от 7 до 30 дней, в зависимости от региона и способа доставки.</p><p></p><p>- К сожалению, из-за санкций база не позволяет оформлять заказы в Республику Крым и Севастополь. Для того, чтобы заказать товар в эти регионы, необходимо указать реальные адрес и индекс, выбрав при этом любой другой российский регион. Также в комментарии к заказу следует указать Республику Крым или Севастополь.- В комментариях к заказу указывайте страницу ВК для оперативной связи.</p><p></p><p></p><p>- Адрес для возвратов: - (В данное время, возврат не осуществялется)</p>
      </div>
      <div class="cb"></div>
    </div>
  )
}

const FooterAboutDelivery = () => {
  return (
    <div>
      <Fasility />
      <div className={s.wrapper}>
        <Delivery />
      </div>
    </div>
  )
}

export default FooterAboutDelivery
