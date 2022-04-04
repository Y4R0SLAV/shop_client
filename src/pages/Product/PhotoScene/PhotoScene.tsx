import React from "react"

type PhotoSceneProps = {front: string, back: string, photos: Array<string>}

export const PhotoScene: React.FC<PhotoSceneProps> = ({front, back, photos}) => {
  return <div className=""> PHOTO SCENE </div>
}