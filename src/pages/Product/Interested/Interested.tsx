import React from "react"

export const Interested: React.FC<{subtype_id: number, collection_id: number | null}> = ({
  subtype_id, collection_id
}) => {
  return <div className="">
    <h3> Возможно, вас заинтересует </h3>
    
    <div className="">
      PRODUCTS BASED ON COLLECTION_ID (if exist) : {collection_id} AND SUBTYPE_ID : {subtype_id}
    </div>
  </div>
}
