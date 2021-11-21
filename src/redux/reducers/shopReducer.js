// import { me } from "./authReduces"

const SET_ITEMS = "app/SET_ITEMS"

let initialState = {
  items: {},
  collectionsTypes: [],
  clothesTypes: [],
  accessoriesTypes: []
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.items }

    default:
      return state
  }
}


export const setItems = (items) => ({ type: SET_ITEMS, items })

export default shopReducer