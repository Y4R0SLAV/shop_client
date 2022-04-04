import Admin from "./pages/Admin"
import Cart from "./pages/Cart"
import Shop from './pages/Shop/Shop'
import Product from "./pages/Product/Product"
import Favourite from './pages/Favourite'
import Search from "./pages/Search"
import Bureaucracy from './components/Bureaucracy/BureaucracyPage'

export const ADMIN_ROUTE = '/admin'
export const SHOP_ROUTE = '/'
export const CART_ROUTE = '/cart'
export const PRODUCT_ROUTE = '/product'
export const FAVOURITE_ROUTE = '/favourite'
export const SEARCH_ROUTE = '/search'
export const SALES_ROUTE = '/sales'

export const CLOTHES_ROUTE = '/clothes'
export const ACCESSORIES_ROUTE = '/accessories'

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
  }
]

export default routes