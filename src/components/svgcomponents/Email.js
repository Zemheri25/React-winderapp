import React from 'react'
import email from "../images/email.png"

function Email({overEmail, outEmail}) {
  return (
    <div onMouseOver={overEmail} onMouseOut = {outEmail}>
        <img src={email} alt="" style={{width : "4rem", borderRadius : "100%"}}/>
    </div>
  )
}

export default Email