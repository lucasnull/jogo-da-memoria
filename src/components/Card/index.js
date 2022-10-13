import React, { useEffect } from 'react'
import * as C from "./styles"

const Card = ({item, index, handleClick}) => {
  return (
    <C.Card onClick={() => handleClick(index)}>
      <C.Image src={item.img} id={item.id} status={item.status} />
    </C.Card>
  )
}

export default Card