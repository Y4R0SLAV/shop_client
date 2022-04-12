import { getItemsFromFavourite } from "../../localStorageInteraction"
import { currentItemToFavType } from "../Product/ProductInfo/AddToFavourite"
import style from "./favourite.module.css"
import { GetItems } from './../Product/Interested/Interested'


const Favourite = () => {
  const favItems = getItemsFromFavourite()

  return (
    <div className={style.main}>
      <GetItems arr={favItems} saleBlockRightMargin={0} blockWidth={300} imgWidth={300}/>
    </div>
  )
}

export default Favourite
