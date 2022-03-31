import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:8080/api/`,
})

export const getProducts = (subtype_id: number | null,
                            collection_id: number | null,
                            have_sale = false,
                            term = "",
                            sorted = "" ) => {
  alert('INSIDE API')
  // return instance.get<any>(
  //   `product?subtype_id=${subtype_id
  //   }&collection_id=${collection_id
  //   }&have_sale=${have_sale
  //   }&term=${term
  //   }&sorted=${sorted}`
  // ).then(response => response.data)
  return instance.get<any>(`product`)
}

export const getCollections = () => {
  return instance.get<any>(`collection`)
}

export const getClothes = () => {
  return instance.get<any>(`clothes`)
}

export const getAccessories = () => {
  return instance.get<any>(`accessories`)
}
