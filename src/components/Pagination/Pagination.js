import React, { useState } from "react"
import s from "./pagination.module.css"


const Pagination = ({ totalItemsCount, currentPageNumber, itemsPerPage, setCurrentPage }) => {
  setCurrentPage = (page) => { alert(page) }

  const pages = []
  for (let i = 1; i <= Math.ceil(totalItemsCount / itemsPerPage); i++) {
    pages.push(i);
  }

  const getPage = (page) => {
    if (page !== currentPageNumber) {
      return <div className={s.page + " " + s.notCurrentPage} onClick={() => { setCurrentPage(page) }}> {page} </div >
    }
    return <div className={s.page + " " + s.currentPage}> {page} </div>
  }

  if (totalItemsCount <= itemsPerPage) {
    return ""
  }

  return (
    <div className={s.wrapper}>
      <div className={s.head}>
        {(currentPageNumber - 1) * itemsPerPage + 1} - {currentPageNumber * itemsPerPage} из {totalItemsCount}
      </div>
      <div className={s.body}>
        <div className={s.backButton + " " + s.notCurrentPage}>
          {currentPageNumber !== 1 &&
            "НАЗАД"
          }
        </div>

        <div className={s.pages}>
          {pages.map(page => getPage(page))}
        </div>

        <div className={s.nextButton + " " + s.notCurrentPage}>
          {currentPageNumber !== Math.ceil(totalItemsCount / itemsPerPage) &&
            "ДАЛЕЕ"
          }
        </div>
      </div>
    </div>
  )
}


export default Pagination;