import React, { FC, useState, useEffect } from 'react'
import style from '../productInfo.module.css'
import { useSelector } from 'react-redux'
import { selectProductToCart } from './../../../../redux/selectors/productSelector'
import { addItemToCart, getSizingAndCountsById, incrementItemCount } from './../../../../localStorageInteraction'
import { CART_ROUTE } from '../../../../routes'
import { Link } from 'react-router-dom'


export type sizeType = null | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl'

export type currentItemType = {
  title: string, price: number, url: string, id: number
}

const addToCartHandle = (selectedSize: sizeType,
                          setIsHidden: (x: boolean) => void,
                          currentItem: currentItemType,
                          setObj: any) => {

  // если нажали на добавить в корзину, но не выбрали при этом размер
  // то показать что нужно бы выбрать или добавить в корзину
  selectedSize === null  
                        ? setIsHidden(false) 
                        : addItemToCart({...currentItem, size: selectedSize})
  setObj(getSizingAndCountsById(currentItem.id))
  return undefined
}

const incrementItemCountHandle = (id: number, size: sizeType, setObj: any) => {
  incrementItemCount(id, size)
  setObj(getSizingAndCountsById(id))
}



export type CartButtonProps = {
  selectedSize: sizeType,
  setIsHidden: (x: boolean) => void,
  isHidden: boolean,
  countOfCurrentSize: number
}

export const CartButton: FC<CartButtonProps> = ({selectedSize, isHidden, setIsHidden, countOfCurrentSize}) => {
  // в селекторе я уже учел цену со скидкой и не ношу её здесь
  const currentItem = useSelector(selectProductToCart) 

  let [sizeObject, setSizeObject] = useState(getSizingAndCountsById(currentItem.id)) || {}

  useEffect(() => { setSizeObject(getSizingAndCountsById(currentItem.id)) }, [currentItem])
  
  // выбран размер и на складе есть ещё минимум один
  if (selectedSize && countOfCurrentSize >= (sizeObject[selectedSize] as number) ) {
    return <div className={style.cartButtonBlock}>
        <p className={style.countInCart}> {sizeObject[selectedSize] + " в корзине "} </p>
        
        <div className={style.cartButton} onClick={() => {incrementItemCountHandle(currentItem.id, selectedSize, setSizeObject)}}>
          Добавить ещё
        </div>

        <Link to={CART_ROUTE}> <div className={style.cartButton + " " + style.toCartButton}> Корзина </div>  </Link>
      </div>
  } 
  
  // размер выбран, но на складе больше нет
  else if (selectedSize && sizeObject[selectedSize] !== undefined) {
      return  <div className={style.cartButtonBlock}>
                <p className={style.countInCart}> {sizeObject[selectedSize] + " в корзине "} </p>
                <Link to={CART_ROUTE}> <div className={style.cartButton + " " + style.toCartButton}> Корзина </div>  </Link>
              </div>
        
  } 
  
  // размер пока что не выбран
  else {
    return <div className={style.cartButtonBlock}>
    <div className={style.cartButton} onClick={() => addToCartHandle(selectedSize, setIsHidden, currentItem, setSizeObject)}>
      В корзину
    </div>

    { isHidden  ?  <div className={style.hiddenText}>
                    Пожалуйста, выберите размер
                  </div>
                :  <div className={style.hiddenText + " " + style.active}>
                    Пожалуйста, выберите размер
                  </div>
    }
  </div>
  }
}
