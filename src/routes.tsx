import Admin from "./pages/Admin"
import Cart from "./pages/Cart"
import Shop from './pages/Shop/Shop'
import Product from "./pages/Product/Product"
import Favourite from './pages/Favourite/Favourite'
import Search from "./pages/Search"
import Bureaucracy from './components/Bureaucracy/BureaucracyPage'

import { Collections } from "./pages/Collections/Collections"
import { Clothes } from "./pages/Clothes/Clothes"
import { Accessories } from "./pages/Accessories/Accessories"

export const ADMIN_ROUTE = '/admin'
export const SHOP_ROUTE = '/'
export const CART_ROUTE = '/cart'
export const PRODUCT_ROUTE = '/product'
export const FAVOURITE_ROUTE = '/favourite'
export const SEARCH_ROUTE = '/search'
export const SALES_ROUTE = '/sales'

export const CLOTHES_ROUTE = '/clothes/'
export const ACCESSORIES_ROUTE = '/accessories/'
export const COLLECTION_ROUTE = '/collections/'

export const BUREAUCRACY_ROUTE = '/pages/'
export const SHIPPING_PAYMENT = 'shipping-payment'
export const PRIVACY_POLICY = 'privacy-policy'


const routes = [
  // хз чтоо делать с админом
  {
    path: ADMIN_ROUTE,
    Component: Admin
  },
  {
    path: FAVOURITE_ROUTE,
    Component: Favourite
  },
  {
    path: CART_ROUTE,
    Component: Cart
  },
  {
    path: SHOP_ROUTE,
    Component: Shop
  },
  {
    path: SEARCH_ROUTE,
    Component: Search
  },
  {
    path: SALES_ROUTE,
    Component: Shop
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    Component: Product
  },
  {
    path: BUREAUCRACY_ROUTE + ':currentPage',
    Component: Bureaucracy
  },
  {
    path: COLLECTION_ROUTE,
    Component: Collections
  },
  {
    path: CLOTHES_ROUTE,
    Component: Clothes
  },
  {
    path: ACCESSORIES_ROUTE,
    Component: Accessories
  },
  {
    path: COLLECTION_ROUTE + ":id",
    Component: Shop
  },
  {
    path: CLOTHES_ROUTE  + ":id",
    Component: Shop
  },
  {
    path: ACCESSORIES_ROUTE  + ":id",
    Component: Shop
  },
]

export default routes