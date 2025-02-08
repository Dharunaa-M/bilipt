import React from 'react'
import "./headerComponent.css"

const HeaderComponent = ({ headerText }) => {
  return (
    <h2 className="heading">{headerText}</h2>
  )
}

export default HeaderComponent