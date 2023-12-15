import React from 'react'
import './ProctoredTestInfo.scss'

import PrimaryButton from '../../../atomic/primary-button/PrimaryButton'
import Timer from '../../../atomic/timer/Timer'
import ProctoredInfoButton from "../../../atomic/proctored-info/ProctoredInfoButton"
import TabSwitchInfo from '../../../atomic/tab-switch-info/TabSwitchInfo'

const ProcteredTestInfo = (props) => {
  return (
    <div className='proctoredtestinfo-layout'>
        <ProctoredInfoButton />
        <TabSwitchInfo value={"2"} />
        <Timer /> 
        <PrimaryButton value={"Finish Test"} button={{borderRadius: "12px", borderColor: "#104fe1", backgroundColor: "#9D0D0D", border: "1px solid"}} text={{color: "white"}}/>
    </div>
    
  )
}



export default ProcteredTestInfo