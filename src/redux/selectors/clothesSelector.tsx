import { AppStateType } from "../store"

export const selectClothes = (state: AppStateType) => {
  return state.shop.clothes
}