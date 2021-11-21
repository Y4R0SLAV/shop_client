const SET_AUTH = "auth/SET_AUTH"
const SET_USER = "auth/SET_USER"


let initialState = {
  isAuth: false,
  user: {}
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AUTH:
      return { ...state, isAuth: action.isAuth }

    case SET_USER:
      return { ...state, user: action.user }

    default:
      return state
  }
}


export default authReducer