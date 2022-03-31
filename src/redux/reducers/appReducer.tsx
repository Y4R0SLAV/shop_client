import { Dispatch } from "react"
import { ThunkAction } from "redux-thunk"

const SET_INITIALIZE: string = "app/SET_INITIALIZE"

let initialState = {
  initialized: false
};

type InitialStateType = typeof initialState

const appReducer = (state = initialState, action: ActionsType): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZE:
      return { ...state, initialized: true }

    default:
      return state
  }
}

type ActionsType = SetInitializeActionType
// actions: 
type SetInitializeActionType = {
  type: typeof SET_INITIALIZE
} 

export const setInitialize = (): SetInitializeActionType => ({ type: SET_INITIALIZE })

// thunks: 

type DispatchType = Dispatch<ActionsType>

export const initializeApp = () => {
  return async (dispatch: any ) => {
    // let promise = await dispatch(me())
    // здесь сначала в промисы кину то, чего мне следует дождаться
    // а потом задиспатчу сетИнициалайз

    // дождаться мне надо получения продуктов, коллекций и одежды с аксессуарами

    // Promise.all([promise]).then(() => { dispatch(setInitialize()) })
  }
}

export default appReducer