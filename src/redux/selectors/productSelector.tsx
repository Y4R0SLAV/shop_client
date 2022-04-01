import { AppStateType } from "../store"

export const selectProducts = (state: AppStateType) => {
  return state.shop.items
}