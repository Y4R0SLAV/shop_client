import React, {FC} from "react"

import style from "./productInfo.module.css"
import { Crumbs } from './Crumbs'
import { Price } from './Price'

type SizingProps = {  
  xxs: number | null, 
  xs: number | null, 
  s: number | null, 
  m: number | null, 
  l: number | null, 
  xl: number | null, 
  xxl: number | null }

const Sizing: FC<SizingProps> = ({xxs, xs, s, m, l, xl, xxl}) => {
  return <div>
    Размер
    <div className={style.sizes}>
      {xxs && <div className={style.size}> XXS </div>}
      {xs && <div className={style.size}> XS </div>}
      {s && <div className={style.size}> S </div>}
      {m && <div className={style.size}> M </div>}
      {l && <div className={style.size}> L </div>}
      {xl && <div className={style.size}> XL </div>}
      {xxl && <div className={style.size}> XXL </div>}
    </div>
  </div>
}

type ProductInfoProps = {
  title: string, 
  type_id: number, 
  type_title: string,
  subtype_id: number, 
  subtype_title: string,
  price: number,
  description: string, 
  sale_price: number,
  sizing: boolean,
  xxs: number | null,
  xs: number | null,
  s: number,
  m: number | null,
  l: number | null,
  xl: number | null,
  xxl: number | null,
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  title, type_id, type_title, subtype_id, subtype_title, price, description,
  sale_price, sizing, xxs, xs, s, m, l, xl, xxl}) => {

  return <div className="">
    <h3 className={style.title}> {title} </h3>

    <Crumbs sale_price={sale_price} type_id={type_id} type_title={type_title} subtype_id={subtype_id} subtype_title={subtype_title}/>

    <Price price={price} sale_price={sale_price}/>
    {sizing && <Sizing xxs={xxs} xs={xs} s={s} m={m} l={l} xl={xl} xxl={xxl}/>}
    ProductInfo ProductInfo 

  </div>
}