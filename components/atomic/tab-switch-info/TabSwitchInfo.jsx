import React from 'react'
import './TabSwitchInfo.scss'

const TabSwitchInfo = (props) => {
    return (
        <div className="tabswitchinfo-layout">
            <div className="content">
                No of Tab Switches: {props.value}
            </div>
        </div>
      )
}

export default TabSwitchInfo