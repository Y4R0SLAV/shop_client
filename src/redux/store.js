import { applyMiddleware, combineReducers, createStore } from "redux"
import appReducer from './reducers/appReducer'
import authReducer from './reducers/authReducer'
import thunkMiddleware from 'redux-thunk'
import shopReducer from "./reducers/shopReducer"

let rootReducer = combineReducers({
  app: appReducer,
  auth: authReducer,
  shop: shopReducer
})

const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

window.__store__ = store

export default store
