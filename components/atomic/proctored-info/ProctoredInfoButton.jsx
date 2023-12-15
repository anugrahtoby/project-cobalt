import React from 'react'
import './ProctoredInfoButton.scss'
import Eye from '../../icons/Eye'

const ProctoredInfoButton = (props) => {
    return (
        <div className="proctoredinfobutton-layout">
            <div className="content">
                <Eye width={"20px"} height={"20px"}/>
                Proctored Test
            </div>
        </div>
      )
}

export default ProctoredInfoButton