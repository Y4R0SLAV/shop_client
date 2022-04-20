import { currentItemToFavType } from "../../pages/Product/ProductInfo/AddToFavourite"
import { getFavArrLength, getItemsFromFavourite } from "../../localStorageInteraction"

const SET_FAV_ARR = "FAV/SET_FAV_ARR"

let initialState = { 
  favArr: getItemsFromFavourite() as Array<currentItemToFavType>,
  count: getFavArrLength() as number
}

type InitialStateType = typeof initialState

const favReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_FAV_ARR:
      return {...state, favArr: getItemsFromFavourite(), count: getFavArrLength()}

    default:
      return state
  }
}

type ActionsType = setFavArrType 

type setFavArrType = {type: typeof SET_FAV_ARR}
export const setFavArrFromLS = (): setFavArrType => ( { type: SET_FAV_ARR })


export default favReducer