import React, {FC} from "react"
import { Breadcrumb } from 'antd'
import { Link } from "react-router-dom"

import style from "./crumbs.module.css"

import { accessoriesid, clothesId } from '../../../../assets/linksAndConstants'
import { CLOTHES_ROUTE } from "../../../../routes"
import { ACCESSORIES_ROUTE } from '../../../../routes'

const getLinksFromTypeIdAndSubtypeId = (id: number, title: string, subtype_id: '' | number ) => {
  switch(+id) {
    case clothesId:
      return <Breadcrumb.Item>
                <Link to={CLOTHES_ROUTE + "/" + subtype_id} > {title} </Link> 
              </Breadcrumb.Item>
    case accessoriesid:
      return <Breadcrumb.Item> 
                <Link to={ACCESSORIES_ROUTE + "/" + subtype_id} > {title} </Link> 
              </Breadcrumb.Item>
  }
}

type CrumbsProps = {
  type_id: number,
  subtype_id: number,
  type_title: string, 
  subtype_title: string,
  sale_price: number,
  product_title: string
}

export const Crumbs: FC<CrumbsProps>  = ({product_title, type_id, type_title, subtype_id, subtype_title, sale_price}) => {
  return <Breadcrumb className={style.breadcrumb} separator="">
    <Breadcrumb.Item> <Link to="/" > Магазин </Link> </Breadcrumb.Item>
    <Breadcrumb.Separator>/</Breadcrumb.Separator>
    {
      sale_price 
        ? <Breadcrumb.Item> <Link to="/sale" > Скидки </Link> </Breadcrumb.Item>
        : <span className="">
            { getLinksFromTypeIdAndSubtypeId(type_id, type_title, '') }
            { getLinksFromTypeIdAndSubtypeId(type_id, subtype_title, subtype_id) }
          </span> 
    }
    <Breadcrumb.Item> <span> {product_title} </span> </Breadcrumb.Item>
  </Breadcrumb> 
}