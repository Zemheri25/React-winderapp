import React from 'react'
import person from "../images/person.png"

function Person({mouseover, personOut}) {
  return (
    <div onMouseOver={mouseover} onMouseOut = {personOut}>
        <img src={person} alt="" style={{width : "4rem", borderRadius : "100%"}} />
    </div>
  )
}

export default Person