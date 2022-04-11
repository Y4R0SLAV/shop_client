import { AppStateType } from "../store"

export const selectProducts = (state: AppStateType) => {
  return state.shop.items
}

export const selectProduct = (state: AppStateType) => {
  return state.shop.selectedItem
}

export const selectProductToCart = (state: AppStateType) => {
  const s = state.shop.selectedItem

  const title = s.title
  const url = s.front
  const price = s.price - s.sale_price
  const id = s.id

  return {title, url, price, id}
}

export const selectCurrentProductId = (state: AppStateType) => {
  return state.shop.selectedItem.id
}

export const selectRecItems = (state: AppStateType) => {
  return state.shop.recItems
}