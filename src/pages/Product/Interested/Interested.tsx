import {  useSelector } from 'react-redux'
import { selectRecItems } from "../../../redux/selectors/productSelector"
import { Preloader } from "../../../components/Preloader/Preloader"

import style from './interested.module.css'
import { RecItemType } from '../../../redux/reducers/shopReducer'
import { Link } from 'react-router-dom';
import { PRODUCT_ROUTE } from '../../../routes'
import { numToPrice } from './../ProductInfo/ProductComponents/Price'

type GetItemsProps = {
  arr: Array<RecItemType>,
  blockWidth: number,
  imgWidth: number,
  saleBlockRightMargin: number

}

export const GetItems: React.FC<GetItemsProps> = ({ arr, blockWidth, imgWidth, saleBlockRightMargin }) => {
  return <div className={style.items}> 
    {arr.map(item => {
      return <Link to={PRODUCT_ROUTE + "/" + item.id}> <div id={item.id.toString()} className={style.item} style={{width: blockWidth + "px"}} >

                <div className={style.img}>
                  <img src={item.url} alt={item.title} style={{width: imgWidth + "px", height: imgWidth + "px"}}/>
                  { item.sale_price ? <span className={style.sale} style={{right: saleBlockRightMargin + "px"}}> SALE </span> : ""}
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
                              : <GetItems arr={recProducts} saleBlockRightMargin={0} blockWidth={185} imgWidth={185}/>
    }
  </div>
}

