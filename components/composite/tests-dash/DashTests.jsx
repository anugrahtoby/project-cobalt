import React from 'react'
import './DashTests.scss'
import TestCard from '../test-card/TestCard'

const DashTests = () => {
  return (
    <div className='dtlayout'>
        <div className='card1'>
            <TestCard card={{borderRadius: "15px 0px 0px 15px", backgroundColor: "#151A24"}}/>
        </div>
        <div className='card2'>
            <TestCard card={{borderRadius: "0px 15px 15px 0px", backgroundColor: "#080C12"}}/>
        </div>
    </div>
  )
}

export default DashTests
