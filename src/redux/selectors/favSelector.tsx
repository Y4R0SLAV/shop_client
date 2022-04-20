import { AppStateType } from "../store"

export const selectFavItems = (state: AppStateType) => {
  return state.fav.favArr
}

export const selectFavCount = (state: AppStateType) => {
  return state.fav.count
}


