import React from 'react'
import s from "./Navigation.module.css"
import { Button, Container } from "react-bootstrap"
import { Link } from 'react-router-dom'

const Navigation = ({ collectionsTypes, clothesTypes, accessoriesTypes }) => {
  // массивы с объекстами, содержащими названия коллекций, одежд и аксессуаров + ссылку на соответствующий товар
  return (
    <>
      {/* кнопка распродажи, единственная не выпадающая */}
      <div>
        <Link to="/sales"> sales</Link>
      </div>
      {/* кнопка Коллекций*/}
      <div>
        <Link to="/collections"> collections</Link>
      </div>

      {/* кнопка Одежды*/}
      <div>
        <Link to="/clothes"> clothes</Link>
      </div>

      {/* кнопка Аксессуаров*/}
      <div onMouseEnter={() => { console.log("!321421m4nkhbfsk") }}>
        <Link to="/accessories"> accessories</Link>
      </div>
    </>
  )
}

export default Navigation
