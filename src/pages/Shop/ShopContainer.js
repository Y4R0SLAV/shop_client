import React, { useState } from "react"
import { connect } from "react-redux"
import Shop from './Shop'
import { setCurrentPage } from './../../redux/reducers/shopReducer'


const ShopContainer = ({ items, currentPage, pageSize, totalItemsCount, setCurrentPage, isSale = false }) => {
  const [itemsArray, setItemsArray] = useState(items ? items : [])

  // тут должны быть приколы с сервером но ничего нет и скорее всего не будет

  return <>
    {/* {this.props.isFetching ? <Preloader /> : null} */}
    <Shop totalItemsCount={totalItemsCount}
      currentPageNumber={currentPage}
      itemsPerPage={pageSize}
      setCurrentPage={setCurrentPage}
      shopItemsArray={itemsArray}
      isSale={isSale} />
  </>
}


const mapStateToProps = (state) => ({
  items: state.shop.items,
  currentPage: state.shop.currentPage,
  pageSize: state.shop.pageSize,
  totalItemsCount: state.shop.totalItemsCount
})


export default connect(mapStateToProps, { setCurrentPage })(ShopContainer)
