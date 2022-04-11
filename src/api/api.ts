import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:8080/api/`,
})

export const getProducts = (subtype_id = 0,
                            collection_id = 0,
                            have_sale = false,
                            term = "",
                            sorted = "" ) => {
  let query = ''
  if (subtype_id) {
    query += `subtype_id=${subtype_id}` 
    if (collection_id) { query += `&collection_id=${collection_id}` }
  }
  else {
    if (collection_id) { query += `collection_id=${collection_id}` }
  }

  return instance.get<any>(
    `product?${query}&have_sale=${have_sale}&term=${term}&sorted=${sorted}`
  ).then(response => response.data)
}

export const getProduct = (id: number) => {
  return instance.get<any>(`product/` + id).then(response => response.data)
}


export const getRecProducts = (collection_id: number, subtype_id:number) => {
  return instance.get<any>(`product/${collection_id}/${subtype_id}`).then(response => response.data)
}

export const getCollections = () => {
  return instance.get<any>(`collection`).then(response => response.data)
}

export const getClothes = () => {
  return instance.get<any>(`clothes`).then(response => response.data)
}

export const getAccessories = () => {
  return instance.get<any>(`accessories`).then(response => response.data)
}
