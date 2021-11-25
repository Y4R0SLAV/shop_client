const ADD_ITEM = "favourites/ADD_ITEM"
const DELETE_ITEM = "favourites/DELETE_ITEM"

let initialState = {
  itemsCount: 0,
  items: [] // массив айдишек на вещи
}

const favouritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, itemsCount: state.itemsCount + 1, items: [...state.items, action.id] }

    case DELETE_ITEM:
      return { ...state, itemsCount: state.itemsCount - 1, items: state.items.filter(id => id !== action.id) }
    // нельзя будет удалить предмет если он не в списке а не то всё сломается

    default:
      return state
  }
}


export const addItem = (id) => ({ type: ADD_ITEM, id })
export const deleteItem = (id) => ({ type: DELETE_ITEM, id })


export default favouritesReducer