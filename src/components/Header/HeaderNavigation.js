import React, { useState } from 'react'
import s from "./Navigation.module.css"
import { Link } from 'react-router-dom'
import cn from 'classnames'

const Navigation = ({ collectionsTypes, clothesTypes, accessoriesTypes }) => {
  // collectionsTypes, clothesTypes, accessoriesTypes -
  // массивы с объекстами, содержащими названия коллекций, одежд и аксессуаров + ссылку на соответствующий товар
  const [isShown, setIsShown] = useState([false, false, false]) // отвечает за показ доп окна

  // ПРОВЕРОЧНЫЕ ДАННЫЕ (НЕ ЗАБЫТЬ УДАЛИТЬ)
  collectionsTypes = [
    { name: "коллекция1", url: "collection1" },
    { name: "коллекция2", url: "collection2" },
    { name: "коллекция3", url: "collection3" },
    { name: "коллекция4", url: "collection4" },
    { name: "коллекция5", url: "collection5" },
    { name: "коллекция6", url: "collection6" },
  ]

  clothesTypes = [
    { name: "од12", url: "collection1" },
    { name: "одежда2", url: "collection2" },
    { name: "од3", url: "collection3" },
    { name: "оде4", url: "collection4" },
    { name: "5", url: "collection5" },
    { name: "оджеа6", url: "collection6" },
  ]

  accessoriesTypes = [
    { name: "акс1", url: "collection1" },
    { name: "акс2", url: "collection2" },
    { name: "акс6", url: "collection6" }
  ]
  // КОНЕЦ ПРОВЕРОЧНЫХ ДАННЫХ

  const getClassNames = (n) => (
    cn(s.buttons_item, {
      [s.active]: isShown[n]
    }))

  const mouseOnBlock = ([collection, clothes, accessories]) => {
    setIsShown([collection, clothes, accessories])
  }

  const showSomeType = (types) => {
    return types.map(type => {
      return (
        <div className={s.typeItem} key={type.name}>
          <Link to={type.url}>
            {type.name}
          </Link>
        </div>
      )
    })
  }


  return (
    <div className={s.content} onMouseLeave={() => mouseOnBlock([false, false, false])}>
      <div className={s.buttons}>
        {/* кнопка распродажи, единственная не выпадающая */}
        <div className={s.buttons_item + " " + s.saleButton} onMouseEnter={() => mouseOnBlock([false, false, false])}>
          <Link to="/sales"> СКИДКИ </Link>
        </div>
        {/* кнопка Коллекций*/}
        <div className={getClassNames(0)} onMouseEnter={() => mouseOnBlock([true, false, false])}>
          <Link to="/collections"> Коллекции</Link>
        </div>

        {/* кнопка Одежды*/}
        <div className={getClassNames(1)} onMouseEnter={() => mouseOnBlock([false, true, false])}>
          <Link to="/clothes"> Одежда </Link>
        </div>

        {/* кнопка Аксессуаров*/}
        <div className={getClassNames(2)} onMouseEnter={() => mouseOnBlock([false, false, true])}>
          <Link to="/accessories"> Аксессуары </Link>
        </div>
      </div>

      {/* выпадающий список - один из этих трех*/}
      {
        isShown[0] &&
        <div className={s.selectedTypeWrapper}>
          <div className={s.selectedType}>
            {showSomeType(collectionsTypes)}
          </div>
        </div>
      }

      {
        isShown[1] &&
        <div className={s.selectedTypeWrapper}>
          <div className={s.selectedType} >
            {showSomeType(clothesTypes)}
          </div>
        </div>
      }

      {
        isShown[2] &&
        <div className={s.selectedTypeWrapper}>
          <div className={s.selectedType}>
            {showSomeType(accessoriesTypes)}
          </div>
        </div>
      }

    </div >
  )
}

export default Navigation
