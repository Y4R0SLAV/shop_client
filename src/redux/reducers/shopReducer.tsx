import { Dispatch } from "react"
import { AppStateType } from "../store"
import { ThunkAction } from "redux-thunk"

const SET_ITEMS = "shop/SET_ITEMS"
const SET_COLLECTIONS = "shop/SET_COLLECTIONS"
const SET_CLOTHES = "shop/SET_CLOTHES"
const SET_ACCESORIES = "shop/SET_ACCESORIES"

type CollectionType = {
  name: string,
  url: string,
  picture: string,
  header: string,
}

type ClothesType = {
  name: string,
  url: string,
  picture: string,
}

type AccessoriesType = {
  name: string,
  url: string,
  picture: string,
}

let initialState = {
  items: [],
  collections: [] as Array<CollectionType>,
  clothes: [] as Array<ClothesType>,
  accessories: [] as Array<AccessoriesType>,
}

type InitialStateType = typeof initialState

const shopReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.items }

    case SET_COLLECTIONS:
      return { ...state, collections: action.collections }

    case SET_CLOTHES:
      return { ...state, clothes: action.clothes }

    case SET_ACCESORIES:
      return { ...state, accessories: action.accessories }

    default:
      return state
  }
}

type ActionsType = setItemsActionType | setCollectionsActionType |
                    setClothesActionType |   setAccessoriesActionType

type setItemsActionType = {type: typeof SET_ITEMS, items: any}
export const setItems = (items: any): setItemsActionType => ({ type: SET_ITEMS, items })

type setCollectionsActionType = {type: typeof SET_COLLECTIONS, collections: Array<CollectionType>}
export const setCollections = (collections: Array<CollectionType>): setCollectionsActionType => (
  { type: SET_COLLECTIONS, collections }
)

type setClothesActionType = {type: typeof SET_CLOTHES, clothes: Array<ClothesType>}
export const setClothes = (clothes: Array<ClothesType>): setClothesActionType => (
  { type: SET_CLOTHES, clothes}
)

type setAccessoriesActionType = {type: typeof SET_ACCESORIES, accessories: Array<AccessoriesType>}
export const setAccessories = (accessories: Array<AccessoriesType>): setAccessoriesActionType => (
  { type: SET_ACCESORIES, accessories }
)


type DispatchType = Dispatch<ActionsType>
type ThunkType = ThunkAction<Promise<void>, AppStateType, unknown, ActionsType>

// надо будет добавить параметры, по коллекции, по виду одежды, аксессуаров и по слову
export const requestProducts = (sybtypeId, collectionId, haveSale = false, term = "", sorted = "") => async (dispatch) => {
  // dispatch(toggleIsFetching(true));

  // let data = await shopApi.getItems(currentPage, pageSize)
  // dispatch(toggleIsFetching(false));
  // dispatch(setItems(data.items));
}

/*
export const requestCollections = (): ThunkType => async (dispatch) => {
  // // dispatch(toggleIsFetching(true))

  let data = await apiGetCollections()
  // // dispatch(toggleIsFetching(false))
  dispatch(setCollections(data.items))
}
*/

/*
export const requestClothes = (): ThunkType => async (dispatch) => {
  // // dispatch(toggleIsFetching(true))

  let data = await apiGetClothes()
  // // dispatch(toggleIsFetching(false))
  dispatch(setClothes(data.items))
}
*/

/*
export const requestAccessories = (): ThunkType => async (dispatch) => {
  // // dispatch(toggleIsFetching(true))

  let data = await apiGetAccessories()
  // // dispatch(toggleIsFetching(false))
  dispatch(setAccessories(data.items))
}
*/



export default shopReducer