import cn from 'classnames'
import React, {FC} from 'react'
import style from "../productInfo.module.css"

export type SizingProps = {  
  xxs: number | null, 
  xs: number | null, 
  s: number | null, 
  m: number | null, 
  l: number | null, 
  xl: number | null, 
  xxl: number | null,
  sizing: boolean,
}

type SizingPropsPlus = {
  setSelectedSize: (a:  null | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl') => void,
  setIsHidden: (x: boolean) => void, 
  selectedSize: null | 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl',
  isHidden: boolean
}

export const Sizing: FC<SizingProps & SizingPropsPlus> = (
  {xxs, xs, s, m, l, xl, xxl, sizing, setSelectedSize, setIsHidden, selectedSize, isHidden}) => {
  const sizes = [["xxs", xxs], ["xs", xs], ["s", s],
                ["m", m], ["l", l], ["xl", xl], ["xxl", xxl]].filter(size => (size[1] && size[1]  > 0))

  if (sizing === false) {
    return <></>
  }
  
  return <div>

  <div className={style.sizeSpan}>
    { !isHidden && <span className={style.pulse}> </span> }
    <div> Размер </div>
  </div>
    
  <div className={style.sizes}>
  {sizes.map(size => {
    let cn = style.size
    selectedSize === size[0] ? cn += " " + style.currentSize : cn += " "
    return <div id={size[0] as string} 
              className = {cn}

              onClick={() => {
                setSelectedSize(size[0] as 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl')
                setIsHidden(true)
              }}

            > 
              {size[0]?.toString().toUpperCase()} 
            </div>
    })
  }
    </div>
  </div>
}