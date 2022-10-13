import React from 'react'
import * as C from "./styles"

const Grid = (props) => {
  return (
      <C.Grid>
        {props.children}
      </C.Grid>
  )
}

export default Grid