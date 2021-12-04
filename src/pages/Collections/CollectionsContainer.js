import React, { useState } from "react"
import { connect } from "react-redux"
import Shop from './Shop'
import { setCurrentPage } from '../../redux/reducers/shopReducer'


const CollectionsContainer = ({ items }) => {
  const [itemsArray, setItemsArray] = useState(items ? items : [])

  return <>
    <Collection collectionArray={items} />
  </>
}


const mapStateToProps = (state) => ({
  items: state.shop.items,
  currentPage: state.shop.currentPage,
  pageSize: state.shop.pageSize,
  totalItemsCount: state.shop.totalItemsCount
})


export default connect(mapStateToProps, { setCurrentPage })(CollectionsContainer)
