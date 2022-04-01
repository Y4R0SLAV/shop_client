import { applyMiddleware, combineReducers, createStore } from "redux"
import appReducer from './reducers/appReducer'
import thunkMiddleware from 'redux-thunk'
import shopReducer from "./reducers/shopReducer"
import {composeWithDevTools} from "redux-devtools-extension"

let rootReducer = combineReducers({
  app: appReducer,
  shop: shopReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store
