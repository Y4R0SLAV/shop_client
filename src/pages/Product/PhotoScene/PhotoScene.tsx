import React from "react"
import style from './photoscene.module.css'

type PhotoSceneProps = {front: string, back: string, photos: Array<string>}

export const PhotoScene: React.FC<PhotoSceneProps> = ({front, back, photos}) => {
  let id = 0

  if (photos === undefined) {
    return <div> ТИХА </div>
  }

  if (photos.length % 2 === 1) {
    return <div className=""> 
    <img src={front} alt="" className={style.bigImg}/>

    <div className={style.smallImgs}>
      <img src={back} alt="" />
      {photos.map(photo => {
          id++;
          return <img src={photo} id={id.toString()}></img>
      })}
    </div>
  </div>
  } else if (photos.length === 0 )
  {

    return <div className=""> 
            <img src={front} alt="" className={style.bigImg}/>
            <img src={back} alt="" className={style.bigImg}/>
          </div>
  } else {
    const newArr = photos.slice(0, -1)
    const lastPhoto = photos[photos.length - 1]

    return <div className=""> 
    <img src={front} alt="" className={style.bigImg}/>


    <div className={style.smallImgs}>
      <img src={back} alt="" />
      {newArr.map(photo => {
          id++;
          return <img src={photo} id={id.toString()}></img>
      })}
    </div>

    <img src={lastPhoto} alt="" className={style.bigImg}/>
  </div>
  }

}