import React, {useEffect} from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { SelectedProductType, requestProduct } from "../redux/reducers/shopReducer"
import { selectProduct } from './../redux/selectors/productSelector'


const Product = () => {
  const { id } = useParams();
  const dispatch = useDispatch()
  useEffect(() => {
    if (id) { dispatch(requestProduct(+id)) }
    
  }, []);

  const product: SelectedProductType = useSelector(selectProduct)
  

  return (
    <div>
      PRODUCT
    </div>
  )
}

export default Product;
