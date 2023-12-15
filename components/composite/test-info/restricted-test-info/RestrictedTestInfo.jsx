import React from 'react'
import './RestrictedTestInfo.scss'

import PrimaryButton from '../../../atomic/primary-button/PrimaryButton'
import Timer from '../../../atomic/timer/Timer'
import RestrictedInfoButton from "../../../atomic/restricted-info/RestrictedInfoButton"
import TabSwitchInfo from '../../../atomic/tab-switch-info/TabSwitchInfo'

const RestrictedTestInfo = (props) => {
    return (
        <div className='restrictedtestinfo-layout'>
            <RestrictedInfoButton />
            <TabSwitchInfo value={"2"} />
            <Timer /> 
            <PrimaryButton value={"Finish Test"} button={{borderRadius: "12px", borderColor: "#104fe1", backgroundColor: "#9D0D0D", border: "1px solid"}} text={{color: "white"}}/>
        </div>
        
      )
}

export default RestrictedTestInfo