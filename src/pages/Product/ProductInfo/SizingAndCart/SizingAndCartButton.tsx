import React, {FC, useState} from "react"
import { Sizing } from './Sizing'
import { CartButton } from './CartButton'

import { SizingProps } from "./Sizing"
import { CartButtonProps } from "./CartButton"

export const SizingAndCartButton: FC<SizingProps> = (
  { xxs, xs, s, m, l, xl, xxl, sizing } ) => {

  const [isHidden, setIsHidden] = useState(true as boolean)
  const [selectedSize, setSelectedSize] = useState(null as null | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl')

  let countOfCurrentSize = 0
  
  if (selectedSize === "xxs" && xxs) {
    countOfCurrentSize = xxs
  } else if (selectedSize === "xs" && xs) {
    countOfCurrentSize = xs
  } else if (selectedSize === "s" && s) {
    countOfCurrentSize = s
  } else if (selectedSize === "m" && m) {
    countOfCurrentSize = m
  } else if (selectedSize === "l" && l) {
    countOfCurrentSize = l
  } else if (selectedSize === "xl" && xl) {
    countOfCurrentSize = xl
  } else if (selectedSize === "xxl" && xxl) {
    countOfCurrentSize = xxl
  } 

  return <div className="">
    <Sizing xxs={xxs} xs={xs} s={s} m={m} l={l} 
            xl={xl} xxl={xxl} sizing={sizing} selectedSize={selectedSize} setSelectedSize={setSelectedSize} setIsHidden={setIsHidden} isHidden={isHidden}/>

    <CartButton selectedSize={selectedSize} isHidden={isHidden} setIsHidden={setIsHidden} countOfCurrentSize={countOfCurrentSize}/>
    
  </div>
}
