import React, {FC, useState} from "react"
import { Sizing } from './Sizing'
import { CartButton } from './CartButton'

import { SizingProps } from "./Sizing"
import { CartButtonProps } from "./CartButton"

export const SizingAndCartButton: FC<SizingProps> = (
  { xxs, xs, s, m, l, xl, xxl, sizing } ) => {

  const [isHidden, setIsHidden] = useState(true as boolean)
  const [selectedSize, setSelectedSize] = useState(null as null | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl');

  return <div className="">
    <Sizing xxs={xxs} xs={xs} s={s} m={m} l={l} 
            xl={xl} xxl={xxl} sizing={sizing} selectedSize={selectedSize} setSelectedSize={setSelectedSize} setIsHidden={setIsHidden}/>

    <CartButton selectedSize={selectedSize} isHidden={isHidden} setIsHidden={setIsHidden} />
  </div>
}
