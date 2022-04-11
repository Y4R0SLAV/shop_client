import React, {FC, useState} from "react"

import style from "./productInfo.module.css"
import { Crumbs } from './ProductComponents/Crumbs'
import { Price } from './ProductComponents/Price'
import { SizingAndCartButton } from './SizingAndCart/SizingAndCartButton'
import { AddToFavourite } from './AddToFavourite'
import { InfoBlock } from './InfoBlock'



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
  xxl: number | null
}

export const ProductInfo: React.FC<ProductInfoProps> = ({
  title, type_id, type_title, subtype_id, subtype_title, price, description,
  sale_price, sizing, xxs, xs, s, m, l, xl, xxl}) => {

  return <div className={style.productInfoScene}>
    <h3 className={style.title}> {title} </h3>

    <Crumbs sale_price={sale_price} type_id={type_id} type_title={type_title} subtype_id={subtype_id}   
            subtype_title={subtype_title} product_title={title}/>
            
    <Price price={price} sale_price={sale_price}/>

    <SizingAndCartButton 
      xxs={xxs} xs={xs} s={s} m={m} l={l} 
      xl={xl} xxl={xxl} sizing={sizing}
    />

    <InfoBlock />
    <AddToFavourite />
  </div>
}