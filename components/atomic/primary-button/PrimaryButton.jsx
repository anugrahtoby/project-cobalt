import React, { use } from 'react'
import "./PrimaryButton.scss"

const PrimaryButton = (props) =>
{
  return (
    <button className="primary-button" onClick={props.onClick} style={props.button}>
        <div style={props.text}>
          {props.value}
        </div>
    </button>
  )
}

export default PrimaryButton