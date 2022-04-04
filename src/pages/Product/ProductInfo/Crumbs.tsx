import React, {FC} from "react"
import { Breadcrumb } from 'antd'
import { Link } from "react-router-dom"

import { accessoriesid, clothesId } from './../../../assets/linksAndConstants'
import { CLOTHES_ROUTE } from "../../../routes"
import { ACCESSORIES_ROUTE } from './../../../routes'

const getLinksFromTypeIdAndSubtypeId = (id: number, title: string, subtype_id: '' | number ) => {
  switch(+id) {
    case clothesId:
      return <Breadcrumb.Item> <Link to={CLOTHES_ROUTE + "/" + subtype_id} > {title} </Link> </Breadcrumb.Item>
    case accessoriesid:
      return <Breadcrumb.Item> <Link to={ACCESSORIES_ROUTE + "/" + subtype_id} > {title} </Link> </Breadcrumb.Item>
  }
}

type CrumbsProps = {
  type_id: number,
  subtype_id: number,
  type_title: string, 
  subtype_title: string,
  sale_price: number 
}

export const Crumbs: FC<CrumbsProps>  = ({type_id, type_title, subtype_id, subtype_title, sale_price}) => {
  return <Breadcrumb>
    <Breadcrumb.Item> <Link to="/" > Магазин </Link> </Breadcrumb.Item>
    {
      sale_price 
        ? <Breadcrumb.Item> <Link to="/sale" > Скидки </Link> </Breadcrumb.Item>
        : <span className="">
          {getLinksFromTypeIdAndSubtypeId(type_id, type_title, '') }
          { getLinksFromTypeIdAndSubtypeId(type_id, subtype_title, subtype_id) }
        </span > 
    }
  </Breadcrumb>
}