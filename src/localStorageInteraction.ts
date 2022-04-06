import { stringify } from 'querystring'
import { currentItemType } from './pages/Product/ProductInfo/SizingAndCart/CartButton'

export type cartItemType = {
  title: string,
  size:  'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | null,
  count: number,
  price:  number,
  url: string,
  id: number
}

export const getItemsFromCart = () => {
  return JSON.parse(localStorage.getItem('cart') as string) || []
}

export const getSizingAndCountsById = (productId: number) => {
  const allItemsInCart: Array<cartItemType> = JSON.parse(localStorage.getItem('cart') as string) || [] 
  const resultArray = [] as Array<{size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | null, count: number}>

  allItemsInCart
    .filter(item => item.id === productId)
    .forEach(item => resultArray.push({"size": item.size, "count": item.count}))

  console.log(resultArray)
  return resultArray
}

export const addItemToCart = ( obj: {
  size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | null,
  title: string, price: number, url: string, id: number
  }, count = 1) => {

  const itemsInCart: Array<cartItemType> = getItemsFromCart()

  /*
  const newItem = { title: obj.title, 
                    count, 
                    price: obj.price, 
                    url: obj.url, 
                    size: obj.size, 
                    id: obj.id } as cartItemType
  */

  localStorage.setItem('cart', JSON.stringify([...itemsInCart, {...obj, count} as cartItemType]))
}



export const deleteItemFromCart = () => {

}

export const getItemsFromFavourite = () => {
  return localStorage.getItem('favourite')
}

export const addItemToFavourite = () => {

}


export const deleteItemFromFavourite = () => {
  
}