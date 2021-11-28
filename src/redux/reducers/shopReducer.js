const SET_ITEMS = "shop/SET_ITEMS"
const SET_COLLECTIONS = "shop/SET_COLLECTIONS"
const SET_CLOTHES = "shop/SET_CLOTHES"
const SET_ACCESORIES = "shop/SET_ACCESORIES"

const SET_CURRENT_PAGE = "shop/SET_CURRENT_PAGE"
const SET_TOTAL_ITEMS_COUNT = "shop/SET_TOTAL_ITEMS_COUNT"

let initialState = {
  items: {},
  // ПРОВЕРОЧНЫЕ ДАННЫЕ (НЕ ЗАБЫТЬ УДАЛИТЬ)
  collectionsTypes: [
    { name: "коллекция1", url: "collection1" },
    { name: "коллекция2", url: "collection2" },
    { name: "коллекция3", url: "collection3" },
    { name: "коллекция4", url: "collection4" },
    { name: "коллекция5", url: "collection5" },
    { name: "коллекция6", url: "collection6" },
  ],

  clothesTypes: [
    { name: "од12", url: "collection1" },
    { name: "одежда2", url: "collection2" },
    { name: "од3", url: "collection3" },
    { name: "оде4", url: "collection4" },
    { name: "5", url: "collection5" },
    { name: "оджеа6", url: "collection6" },
  ],

  accessoriesTypes: [
    { name: "акс1", url: "collection1" },
    { name: "акс2", url: "collection2" },
    { name: "акс6", url: "collection6" }
  ],

  currentPage: 1,
  pageSize: 48,
  totalItemsCount: 208
}

const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ITEMS:
      return { ...state, items: action.items }

    case SET_COLLECTIONS:
      return { ...state, collectionsTypes: action.collections }
    case SET_CLOTHES:
      return { ...state, clothesTypes: action.clothes }
    case SET_ACCESORIES:
      return { ...state, accessoriesTypes: action.accessories }

    case SET_CURRENT_PAGE:
      return { ...state, currentPage: action.currentPage }

    default:
      return state
  }
}

export const setItems = (items) => ({ type: SET_ITEMS, items })
export const setCollections = (collections) => ({ type: SET_COLLECTIONS, collections })
export const setClothes = (clothes) => ({ type: SET_CLOTHES, clothes })
export const setAccessories = (accessories) => ({ type: SET_ACCESORIES, accessories })

export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage })
export const setTotalItemsCount = (totalItemsCount) => ({ type: SET_TOTAL_ITEMS_COUNT, totalItemsCount });


// надо будет добавить параметры, по коллекции, по виду одежды, аксессуаров и по слову
export const requestItems = (currentPage, pageSize) => async (dispatch) => {
  // dispatch(toggleIsFetching(true));

  // let data = await shopApi.getItems(currentPage, pageSize)
  // dispatch(toggleIsFetching(false));
  // dispatch(setItems(data.items));
  // dispatch(setTotalItemsCount(data.totalCount));
}
export default shopReducer