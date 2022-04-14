import { Link } from "react-router-dom"
import { AccessoriesType, ClothesType, CollectionType } from "../../redux/reducers/shopReducer"
import style from "./style.module.css"

export const getBlocksFromArray = (arr: Array<CollectionType> | Array<ClothesType> | Array<AccessoriesType>) => {
  const result = arr.map(item => {
    return <Link to={'/' + item.url}>
      <div className={style.block}>
        <div className={style.img}>
          <img src={item.picture} alt={item.title} />
        </div>
        <div className={style.title}>{item.title}</div>
      </div>
    </Link> 
  })

  return <div className={style.blocks}> {result} </div>
}