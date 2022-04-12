import React, {useEffect} from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { SelectedProductType, requestProduct, requestRecProducts } from "../../redux/reducers/shopReducer"
import { selectProduct } from '../../redux/selectors/productSelector'

import { Interested} from './Interested/Interested'
import { PhotoScene } from './PhotoScene/PhotoScene'
import { ProductInfo } from './ProductInfo/ProductInfo'

import s from './product.module.css'
import BottomNavigation from './../../components/BottomNavigation/BottomNavigation';

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()
  
  const p: SelectedProductType = useSelector(selectProduct)

  useEffect(() => {
    if (id) { dispatch(requestProduct(+id)) }
    
  }, [])

  useEffect(() => {
    if (id && p) {dispatch(requestRecProducts(+id, p.collection_id, p.subtype_id))}
  }, [p])

  return (
    <div> 
      <div className={s.main}>
        <PhotoScene back={p.back} front={p.front} photos={p.photos}/>

        <ProductInfo title={p.title} type_id={p.type_id} type_title={p.type_title}
          subtype_id={p.subtype_id} subtype_title={p.subtype_title} price={p.price} 
          description={p.description} sale_price = {p.sale_price} sizing={p.sizing} 
          xxs={p.xxs} xs={p.xs} s={p.s} m={p.m} l={p.l} xl={p.xl} xxl={p.xxl}
        />
      </div>
      <Interested />
      <BottomNavigation />
    </div>
  )
}

export default Product;
