import { applyMiddleware, combineReducers, createStore } from "redux"
import appReducer from './reducers/appReducer'
import thunkMiddleware from 'redux-thunk'
import shopReducer from "./reducers/shopReducer"

let rootReducer = combineReducers({
  app: appReducer,
  shop: shopReducer
})

type RootReducerType = typeof rootReducer
export type AppStateType = ReturnType<RootReducerType>

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
// для редакс дев тулс с тупайскриптом не оч работает, но мне пока что не очень то и нужен
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))

export default store
