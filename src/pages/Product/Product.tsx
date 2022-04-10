import React, {useEffect} from "react"
import { useParams } from "react-router"
import { useDispatch, useSelector } from 'react-redux'
import { SelectedProductType, requestProduct } from "../../redux/reducers/shopReducer"
import { selectProduct } from '../../redux/selectors/productSelector'

import { Interested } from './Interested/Interested'
import { PhotoScene } from './PhotoScene/PhotoScene'
import { ProductInfo } from './ProductInfo/ProductInfo'

import s from './product.module.css'

const Product = () => {
  const { id } = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    if (id) { dispatch(requestProduct(+id)) }
  }, []);

  const p: SelectedProductType = useSelector(selectProduct)

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
      <Interested subtype_id={p.subtype_id} collection_id={p.collection_id}/>
    </div>
  )
}

export default Product;
