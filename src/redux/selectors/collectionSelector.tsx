import { AppStateType } from "../store"

export const selectCollections = (state: AppStateType) => {
  return state.shop.collections
}

