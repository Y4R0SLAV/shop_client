import { Dispatch } from "react"
import { AppStateType } from "../store"
import { ThunkAction } from "redux-thunk"
import { getProducts, getCollections, getClothes, getAccessories } from './../../api/api';

const SET_ITEMS = "shop/SET_ITEMS"
const SET_COLLECTIONS = "shop/SET_COLLECTIONS"
const SET_CLOTHES = "shop/SET_CLOTHES"
const SET_ACCESORIES = "shop/SET_ACCESORIES"

export type ProductType = {
    description: "asassasasasaassa",
    fk_collection_id: 4,
    fk_subtype_id: 3,
    price: 4530,
    product_id: 11,
    sale_price: 100,
    sizing: true,
    title: "3st prod",
    xxs: number | null,
    xs: number | null,
    s: number | null,
    m: number | null,
    l: number | null,
    xl: number | null,
    xxl: number | null,
}

export type CollectionType = {
  title: string,
  id: number,
  picture: string,
  url: string,
  header: string,
}

export type ClothesType = {
  id: number,
  title: string,
  url: string,
  picture: string,
}

export type AccessoriesType = {
  title: string,
  id: number,
  url: string,
  picture: string,
}

let initialState = {
  items: [] as Array<ProductType>,
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

export const requestProducts = (sybtypeId = 0,
                                collectionId = 0,
                                haveSale = false, 
                                term = "", 
                                sorted = "") => (
  async (dispatch: DispatchType) => {
  // dispatch(toggleIsFetching(true));
  let data: Array<ProductType> = await getProducts(sybtypeId, collectionId, haveSale, term, sorted)
  console.log(data)
  dispatch(setItems(data))
  // dispatch(toggleIsFetching(false));
  }
)

export const requestCollections = (): ThunkType => async (dispatch) => {
  // // dispatch(toggleIsFetching(true))

  let data: Array<CollectionType> = await getCollections()
  // // dispatch(toggleIsFetching(false)
  dispatch(setCollections(data))
}


export const requestClothes = (): ThunkType => async (dispatch) => {
  // // dispatch(toggleIsFetching(true))

  let data: Array<ClothesType> = await getClothes()
  // // dispatch(toggleIsFetching(false))
  dispatch(setClothes(data))
}

export const requestAccessories = (): ThunkType => async (dispatch) => {
  // // dispatch(toggleIsFetching(true))

  let data: Array<AccessoriesType> = await getAccessories()
  // // dispatch(toggleIsFetching(false))
  dispatch(setAccessories(data))
}




export default shopReducer