import React from 'react'
import './NormalTestInfo.scss'
import PrimaryButton from '../../../atomic/primary-button/PrimaryButton'
import Timer from '../../../atomic/timer/Timer'

const NormalTestInfo = (props) => {
    return (
        <div className='normaltestinfo-layout'>
            <Timer /> 
            <PrimaryButton value={"Finish Test"} button={{borderRadius: "12px", borderColor: "#104fe1", backgroundColor: "#9D0D0D", border: "1px solid"}} text={{color: "white"}}/>
        </div>
        
      )
}

export default NormalTestInfo