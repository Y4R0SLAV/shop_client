import Footer from './Footer'
import { connect } from 'react-redux'


// SFSFmkjnhjfwebhjr23bk423k 4bk23 правильный стейт сделать!
const mapStateToProps = (state) => {
  return {
    favouritesCount: state.favourites.itemsCount,
    basketCount: state.basket.itemsCount
  }
}

export default connect(mapStateToProps, {})(Footer)