import { AppStateType } from "../store"

export const selectAccessories = (state: AppStateType) => {
  return state.shop.accessories
}