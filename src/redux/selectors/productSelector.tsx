import { AppStateType } from "../store"

export const selectProducts = (state: AppStateType) => {
  return state.shop.items
}

export const selectProduct = (state: AppStateType) => {
  return state.shop.selectedItem
}