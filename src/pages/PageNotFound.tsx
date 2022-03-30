import React from "react"
import { Link } from "react-router-dom";


const PageNotFound = () => {
  return (
    <div >
      <h2>404. Страница не найдена</h2>
      <h4>Возможно, вы перешли по устаревшей ссылке, или страница, которую вы ищете, больше не существует.</h4>
      <Link to="/">Вернуться на домашнюю страницу</Link>
    </div>
  )
}

export default PageNotFound
