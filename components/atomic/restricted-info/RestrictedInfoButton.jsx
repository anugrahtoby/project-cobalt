import React from 'react'
import './RestrictedInfoButton.scss'
import Restricted from '../../icons/Restricted'

const RestrictedInfoButton = () => {
    return (
        <div className="restrictedinfobutton-layout">
            <div className="content">
                <Restricted width={"20px"} height={"20px"}/>
                Restricted Test
            </div>
        </div>
      )
}

export default RestrictedInfoButton