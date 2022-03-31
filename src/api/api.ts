import axios from "axios"

const instance = axios.create({
  withCredentials: true,
  baseURL: `http://localhost:8080/api/`,
})

export const getProducts = (subtype_id: number,
                            collection_id: number,
                            have_sale = false,
                            term = "",
                            sorted = "" ) => {
  return instance.get<any>(
    `product?subtype_id=${subtype_id
    }&collection_id=${collection_id
    }&have_sale=${have_sale
    }&term=${term
    }&sorted=${sorted}`
  )
}

export const getCollections = () => {
  return instance.get<any>(`collection`)
}


/*
export const getClothes = () => {
  
}

export const getAccessories = () => {
}
*/