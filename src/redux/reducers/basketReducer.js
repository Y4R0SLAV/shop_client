const ADD_ITEM = "favourites/ADD_ITEM"
const DELETE_ITEM = "favourites/DELETE_ITEM"
const CHANGE_COUNT = "favourites/CHANGE_COUNT"

let initialState = {
  itemsCount: 0,
  email: "", // хз нужен ли он, пусть пока будет
  items: [] // массив объектов: {imgUrl: string, name: "", price: num, size: один из вариантов стринг, id: number, count: number}
}

const basketReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return { ...state, itemsCount: state.itemsCount + 1, items: [...state.items, action.item] }

    case DELETE_ITEM:
      return { ...state, itemsCount: state.itemsCount - 1, items: state.items.filter(item => item.id !== action.id) }
    // нельзя будет удалить предмет если он не в списке а не то всё сломается

    case CHANGE_COUNT:
      return {
        ...state, items: state.items.map(item => {
          if (item.id === action.id) return { ...item, count: action.newCount }
          return item
        })
      }
    default:
      return state
  }
}


export const addItem = ({ imgUrl, name, price, size, count, id }) => ({ type: ADD_ITEM, item: { imgUrl, name, price, size, count, id } })
export const deleteItem = (id) => ({ type: DELETE_ITEM, id })
export const changeCount = (id, newCount) => ({ type: CHANGE_COUNT, id, newCount })


export default basketReducer