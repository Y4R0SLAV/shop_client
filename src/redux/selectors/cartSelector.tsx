import { AppStateType } from "../store"

export const selectCartItems = (state: AppStateType) => {
  return state.cart.cartArr
}

export const selectCartCount = (state: AppStateType) => {
  return state.cart.count
}

