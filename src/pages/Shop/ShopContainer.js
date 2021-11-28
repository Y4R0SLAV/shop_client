import React, { useState } from "react"
import { connect } from "react-redux"
import Shop from './Shop'
import { setCurrentPage } from './../../redux/reducers/shopReducer'


const ShopContainer = ({ items, currentPage, pageSize, totalItemsCount, setCurrentPage }) => {
  const [itemsArray, setItemsArray] = useState(items ? items : [])

  // componentDidMount() {
  //   this.props.getUsers(this.props.currentPage, this.props.pageSize);
  // }

  // onPageChanged = (pageNumber) => {
  //   this.props.getUsers(pageNumber, this.props.pageSize);
  //   this.props.setCurrentPage(pageNumber);
  // }

  return <>
    {/* {this.props.isFetching ? <Preloader /> : null} */}
    <Shop totalItemsCount={totalItemsCount}
      currentPageNumber={currentPage}
      itemsPerPage={pageSize}
      setCurrentPage={setCurrentPage}
      shopItemsArray={itemsArray} />
  </>
}


const mapStateToProps = (state) => ({
  items: state.shop.items,
  currentPage: state.shop.currentPage,
  pageSize: state.shop.pageSize,
  totalItemsCount: state.shop.totalItemsCount
})


export default connect(mapStateToProps, { setCurrentPage })(ShopContainer)
