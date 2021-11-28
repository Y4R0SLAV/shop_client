import React, { useState } from 'react'
import s from "./Navigation.module.css"
import { Link } from 'react-router-dom'
import cn from 'classnames'

const Navigation = ({ collectionsTypes, clothesTypes, accessoriesTypes }) => {
  // collectionsTypes, clothesTypes, accessoriesTypes -
  // массивы с объекстами, содержащими названия коллекций, одежд и аксессуаров + ссылку на соответствующий товар
  const [isShown, setIsShown] = useState([false, false, false]) // отвечает за показ доп окна

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
        <Link to="/sales"> <div className={s.buttons_item + " " + s.saleButton} onMouseEnter={() => mouseOnBlock([false, false, false])}>
          СКИДКИ
        </div> </Link>
        {/* кнопка Коллекций*/}
        <Link to="/collections"> <div className={getClassNames(0)} onMouseEnter={() => mouseOnBlock([true, false, false])}>
          Коллекции
        </div> </Link>

        {/* кнопка Одежды*/}
        <Link to="/clothes">
          <div className={getClassNames(1)} onMouseEnter={() => mouseOnBlock([false, true, false])}>
            Одежда
          </div>
        </Link>


        {/* кнопка Аксессуаров*/}
        <Link to="/accessories">
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
