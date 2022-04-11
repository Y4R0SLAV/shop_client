import {  useSelector } from 'react-redux'
import { selectRecItems } from "../../../redux/selectors/productSelector"
import { Preloader } from "../../../components/Preloader/Preloader"

import style from './interested.module.css'
import { RecItemType } from '../../../redux/reducers/shopReducer'
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../routes'
import { numToPrice } from './../ProductInfo/ProductComponents/Price'

const GetItems: React.FC<{arr: Array<RecItemType>}> = ({arr}) => {
  return <div className={style.items}> 
    {arr.map(item => {
      return <Link to={PRODUCT_ROUTE + "/" + item.id}> <div id={item.id.toString()} className={style.item}>

                <div className={style.img}>
                  <img src={item.url} alt={item.title} />
                  { item.sale_price ? <span className={style.sale}> SALE </span> : ""}
                </div>
                <div className={style.itemTitle}>{item.title}</div>
                {
                  item.sale_price > 0 ? <div className={style.price}>
                                          <div className={style.currentPrice}> { numToPrice(item.price - item.sale_price)} </div>
                                          <div className={style.oldPrice}> { numToPrice(item.price)} </div>
                                        </div>
                                      : <div className={style.currentPrice}> { numToPrice(item.price) } </div>
                }
                
              </div>
            </Link>})

    } 
  </div>
}


export const Interested = () => {
  const recProducts = useSelector(selectRecItems)
  return <div className={style.block}> 
    <h3 className={style.title}> Возможно, вас заинтересует </h3>
    {
      recProducts.length < 1  ? <Preloader />    
                              : <GetItems arr={recProducts}/>
    }
  </div>
}

