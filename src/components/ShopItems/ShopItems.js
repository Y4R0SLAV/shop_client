import React, { useState } from "react"
import s from "./shopItems.module.css"


const ShopItems = ({ shopItemsArray }) => {
  // shopItems - массив товаров, товар - объект со свойствами id, photos: {frontPhoto, backPhoto}, price, sale
  const [focusedItem, setFocusedItem] = useState(0)

  shopItemsArray = [{
    id: 1,
    name: "Кот нарисованный",
    price: 500,
    sale: 0,
    photos: {
      frontPhoto: "https://yt3.ggpht.com/a/AATXAJy1mVkeqtduFgK-V8Hqik_0_ftI1bnY3o2S1V7U=s900-c-k-c0xffffffff-no-rj-mo",
      backPhoto: "https://yt3.ggpht.com/a/AATXAJzDZgdwiK36rYtltzugkrALYxAKaUfeQPTqoA=s900-c-k-c0xffffffff-no-rj-mo"
    }
  },
  {
    id: 2,
    name: "СОБАКА  !!!",
    price: 1111,
    sale: 111,
    photos: {
      frontPhoto: "https://avatars.mds.yandex.net/i?id=2a0000017a176998dda850d4ddef538fcb2c-4949466-images-thumbs&n=13&exp=1",
      backPhoto: "https://mediasole.ru/data/images/222/222186/Dog_hr_12.jpg"
    }
  },
  {
    id: 3,
    name: "Курящие коты",
    price: 1000000,
    sale: 1,
    photos: {
      frontPhoto: "https://im0-tub-ru.yandex.net/i?id=690716d7f936b278e4044ca953e18686-sr&n=13&exp=1",
      backPhoto: "https://im0-tub-ru.yandex.net/i?id=01b6f5c8d58466adc04a70c9a262bb3d-sr&n=13&exp=1"
    }
  },
  {
    id: 4,
    name: "fourth item",
    price: 2000,
    sale: 0,
    photos: {
      frontPhoto: "https://yt3.ggpht.com/a/AATXAJy1mVkeqtduFgK-V8Hqik_0_ftI1bnY3o2S1V7U=s900-c-k-c0xffffffff-no-rj-mo",
      backPhoto: "https://yt3.ggpht.com/a/AATXAJzDZgdwiK36rYtltzugkrALYxAKaUfeQPTqoA=s900-c-k-c0xffffffff-no-rj-mo"
    }
  }]

  const getFinishedItem = (item) => {
    let currentPhoto = item.photos.frontPhoto

    if (focusedItem === item.id) {
      currentPhoto = item.photos.backPhoto
    }

    return <div className={s.shopItem}

      onMouseEnter={() => { setFocusedItem(item.id) }}
      onMouseLeave={() => { setFocusedItem(0) }}>

      <a href={"product/" + item.id}>
        <div className={s.imageBlock}>
          {item.sale > 0 && <div className={s.saleLabel}> РАСПРОДАЖА </div>}
          <div className={s.clickabled}>
            <img src={currentPhoto} /> <br />
            <span className={s.itemName}> {item.name} </span>
          </div>
        </div>
      </a>

      {item.sale > 0 && <div> было <span className={s.oldPrice}> {item.price} </span> &#8381;.     Скидка {item.sale} &#8381;.</div>}
      {+item.price - +item.sale} &#8381;
    </div>
  }

  return <div className={s.shopItems}>
    {shopItemsArray.map(item => getFinishedItem(item))}
  </div>
}


export default ShopItems;