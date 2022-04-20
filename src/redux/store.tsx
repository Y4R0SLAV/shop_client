import { applyMiddleware, combineReducers, createStore } from "redux"
import appReducer from './reducers/appReducer'
import thunkMiddleware from 'redux-thunk'
import shopReducer from "./reducers/shopReducer"
import {composeWithDevTools} from "redux-devtools-extension"
import favReducer from "./reducers/favReducer"
import cartReducer from "./reducers/cartReducer"

let rootReducer = combineReducers({
  app: appReducer,
  shop: shopReducer,
  fav: favReducer,
  cart: cartReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
