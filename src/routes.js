import Admin from "./pages/Admin"
import Cart from "./pages/Cart"
import Account from "./pages/Account"
import ShopContainer from './pages/Shop/ShopContainer'
import Product from "./pages/Product"
import Favourite from './pages/Favourite'
import Search from "./pages/Search"
import Bureaucracy from './components/Bureaucracy/BureaucracyPage'

export const ADMIN_ROUTE = '/admin'
export const SHOP_ROUTE = '/'
export const CART_ROUTE = '/cart'
export const PRODUCT_ROUTE = '/product'
export const FAVOURITE_ROUTE = '/favourite'
export const ACCOUNT_ROUTE = '/account'
export const SEARCH_ROUTE = '/search'
export const SALES_ROUTE = '/sales'

export const BUREAUCRACY_ROUTE = '/pages'
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
    Component: ShopContainer
  },
  {
    path: SEARCH_ROUTE,
    Component: Search
  },
  {
    path: SALES_ROUTE,
    Component: ShopContainer
  },
  {
    path: ACCOUNT_ROUTE,
    Component: Account
  },
  {
    path: PRODUCT_ROUTE + '/:id',
    Component: Product
  },
  {
    path: BUREAUCRACY_ROUTE + '/:currentPage',
    Component: Bureaucracy
  }
]

export default routes