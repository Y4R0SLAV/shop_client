import React, { FC, useState } from 'react'
import style from '../productInfo.module.css'
import { useSelector } from 'react-redux';
import { selectProductToCart } from './../../../../redux/selectors/productSelector';
import { addItemToCart, getSizingAndCountsById } from './../../../../localStorageInteraction';
import { useEffect } from 'react';

export type CartButtonProps = {
  selectedSize: null | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
  setIsHidden: (x: boolean) => void,
  isHidden: boolean
}

export type currentItemType = {
  title: string, price: number, url: string, id: number
}

const cartButtonHandle = (selectedSize: null | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
                          setIsHidden: (x: boolean) => void,
                          currentItem: currentItemType) => {
  if (selectedSize === null) {
    setIsHidden(false)
  }
  else {
    addItemToCart({...currentItem, size: selectedSize})
  }
  return undefined
}



export const CartButton: FC<CartButtonProps> = ({selectedSize, isHidden, setIsHidden}) => {
  const currentItem = useSelector(selectProductToCart)
  const [sizeArray, setSizeArray] = getSizingAndCountsById(currentItem.id)
    

  return <div className="">
    <div className={style.cartButton} onClick={() => cartButtonHandle(selectedSize, setIsHidden, currentItem)}>
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
