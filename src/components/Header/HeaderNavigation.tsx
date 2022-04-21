import React, { useState } from 'react'
import s from "./Navigation.module.css"
import { Link } from 'react-router-dom'
import cn from 'classnames'

import { useSelector } from 'react-redux'
import { selectCollections } from './../../redux/selectors/collectionSelector'
import { selectClothes } from '../../redux/selectors/clothesSelector'
import { selectAccessories } from './../../redux/selectors/accessoriesSelector'

import { CollectionType, ClothesType, AccessoriesType } from '../../redux/reducers/shopReducer'
import { ACCESSORIES_ROUTE, CLOTHES_ROUTE, COLLECTION_ROUTE, SALES_ROUTE } from '../../routes'

const Navigation = () => {
  const collections = useSelector(selectCollections)
  const clothes = useSelector(selectClothes)
  const accessories = useSelector(selectAccessories)
  
  const [isShown, setIsShown] = useState([false, false, false]) // отвечает за показ доп окна

  const getClassNames = (n: number) => (
    cn(s.buttons_item, {
      [s.active]: isShown[n]
    }))

  const mouseOnBlock = ([collection, clothes, accessories] : [boolean, boolean, boolean]) => {
    setIsShown([collection, clothes, accessories])
  }

  const showSomeType = (items : Array<CollectionType | AccessoriesType | ClothesType>) => {
    return items.map(type => {
      return (
        <Link to={type.url} onClick={() => mouseOnBlock([false, false, false])}>
          <div className={s.typeItem} key={type.id}>
            {type.title}
          </div>
        </Link>
      )
    })
  }

  return (
    <div className={s.content} onMouseLeave={() => mouseOnBlock([false, false, false])}>
      <div className={s.buttons}>
        {/* кнопка распродажи, единственная не выпадающая */}
        <Link to={SALES_ROUTE}> <div className={s.buttons_item + " " + s.saleButton} onMouseEnter={() => mouseOnBlock([false, false, false])}>
          СКИДКИ
        </div> </Link>

        <Link to={COLLECTION_ROUTE}> <div className={getClassNames(0)} onMouseEnter={() => mouseOnBlock([true, false, false])}>
          Коллекции
        </div> </Link>

        <Link to={CLOTHES_ROUTE}>
          <div className={getClassNames(1)} onMouseEnter={() => mouseOnBlock([false, true, false])}>
            Одежда
          </div>
        </Link>

        <Link to={ACCESSORIES_ROUTE}>
          <div className={getClassNames(2)} onMouseEnter={() => mouseOnBlock([false, false, true])}>
            Аксессуары
          </div>
        </Link>
      </div>

      {/* выпадающий список - один из этих трех*/}
      {
        isShown[0] &&
        <div className={s.selectedTypeWrapper}>
          <div className={s.selectedType}>
            {showSomeType(collections)}
          </div>
        </div>
      }

      {
        isShown[1] &&
        <div className={s.selectedTypeWrapper}>
          <div className={s.selectedType} >
            {showSomeType(clothes)}
          </div>
        </div>
      }

      {
        isShown[2] &&
        <div className={s.selectedTypeWrapper}>
          <div className={s.selectedType}>
            {showSomeType(accessories)}
          </div>
        </div>
      }

    </div >
  )
}

export default Navigation
