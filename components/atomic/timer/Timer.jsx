import React from 'react'
import TimerIcon from '../../icons/TimerIcon'
import './Timer.scss'

const Timer = (props) => {
  return (
    <div className="timer" style={props.button}>
        <div className="content" style={props.text}>
            <TimerIcon />
            99:99
        </div>
    </div>
  )
}

export default Timer