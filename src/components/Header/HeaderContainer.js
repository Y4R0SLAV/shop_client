import Header from './Header'
import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    collectionsTypes: state.shop.collectionsTypes,
    clothesTypes: state.shop.clothesTypes,
    accessoriesTypes: state.shop.accessoriesTypes
  }
}

export default connect(mapStateToProps, {})(Header)