import React from 'react'
import phonee from "../images/phone.png"

function Phone({overPhone, outPhone}) {
  return (
    <div onMouseOver={overPhone} onMouseOut = {outPhone}>
        <img src={phonee} style = {{width : "4rem", borderRadius : "100%"}} />
    </div>
  )
}

export default Phone