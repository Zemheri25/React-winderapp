import React from 'react'
import locationn from "../images/location.png"

function Location({overLocation, outLocation}) {
  return (
    <div onMouseOver={overLocation} onMouseOut = {outLocation}>
        <img src={locationn} style = {{width : "4rem", borderRadius : "100%"}} />
    </div>
  )
}

export default Location