import React from 'react'
import './TestCard.scss';
import PrimaryButton from '../../atomic/primary-button/PrimaryButton'
import CircularProgress from '@mui/joy/CircularProgress';
import Eye from '../../icons/Eye'
import Restricted from '../../icons/Restricted'

const TestCard = (props) => {
  return (
    <div className='card_layout' style={props.card}>
        <div className='card_left'>
            <div className='card_text'>
                <h3>{props.testname}</h3>
                <br/>
                <h3>{props.chapter}</h3>
            </div>
            <div className='card_icons'>
                <Eye width={"25px"} height={"20px"}/>
                <Restricted width={"25px"} height={"17px"}/>
            </div>
        </div>
        <div className='card_right'>
            <div className='card_progress'>
            <CircularProgress size="lg" determinate value={75.00} variant='plain'>
                 <h3 className='progresstext'>75%</h3>
            </CircularProgress>
            </div>
            <div className='button'>
            <PrimaryButton value={props.btext} button={props.bstyle} text={props.btextcolor}/>
            </div>
        </div>
    </div>
  )
}

TestCard.defaultProps = {
    testname: "JOC - Test #1:",
    chapter: "Joy of Computing using Python",
    card: {backgroundColor: "#151A24"},
    btext: "Continue",
    bstyle: {borderRadius: "12px", borderColor: "#104fe1", backgroundColor: "white", border: "2px solid"},
    btextcolor: {color: "#104fe1"},
};

export default TestCard