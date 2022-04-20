import { getCartArrLength, getItemsFromCart } from "../../localStorageInteraction"
import { cartItemType } from "../../localStorageInteraction"

const SET_CART_ARR = "CART/SET_CART_ARR"

let initialState = { 
  cartArr: getItemsFromCart() as Array<cartItemType>,
  count: getCartArrLength() as number
}

type InitialStateType = typeof initialState

const cartReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_CART_ARR:
      return {...state, cartArr: getItemsFromCart(), count: getCartArrLength()}

    default:
      return state
  }
}

type ActionsType = setCartArrType 

type setCartArrType = {type: typeof SET_CART_ARR}
export const setCartArrFromLS = (): setCartArrType => ( { type: SET_CART_ARR })


export default cartReducer