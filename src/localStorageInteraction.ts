import Item from 'antd/lib/list/Item'
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

  const resultObject = {} as {
    size?: number | null,
    'xxs'?: number,
    'xs'?: number,
    's'?: number,
    'm'?: number,
    'l'?: number,
    'xl'?: number,
    'xxl'?: number
  }

  console.log(11111)
  console.log(allItemsInCart)
  console.log(productId)
  allItemsInCart
    .filter(item => item.id === productId)
    .forEach(item => {
        if(item.size !== null) {
          resultObject[item.size] = item.count 
        } else {
          resultObject.size = item.count
        }
      }
    )

  console.log(resultObject)
  console.log(11111)
  return resultObject
}

export const addItemToCart = ( obj: {
  size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | null,
  title: string, price: number, url: string, id: number
  }, count = 1) => {
  const itemsInCart: Array<cartItemType> = getItemsFromCart()

  localStorage.setItem('cart', JSON.stringify([...itemsInCart, {...obj, count} as cartItemType]))
}

export const incrementItemCount = (productId: number, size: 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | null) => {
  const allItemsInCart: Array<cartItemType> = JSON.parse(localStorage.getItem('cart') as string) || [] 
  const newItems = allItemsInCart.map(item => {
    if (item.id === productId && item.size === size) {
      return {...item, count: item.count + 1}
    }
    return item
  })

  localStorage.setItem('cart', JSON.stringify(newItems))
}


export const deleteItemFromCart = () => {

}


export const getItemsFromFavourite = () => {
  return JSON.parse(localStorage.getItem('fav') as string) as Array<number>
}

export const addItemToFavourite = (id: number) => {
  const items = getItemsFromFavourite() || []
  
  localStorage.setItem('fav', JSON.stringify([...items, id]))
}

export const deleteItemFromFavourite = (id: number) => {
  const items = getItemsFromFavourite()
  localStorage.setItem('fav', JSON.stringify(items.filter(item => item !== id)))
}