'use client'
import React from 'react';
import './page.scss';

import { MCQData } from '../mcqtest/MCQData'
import Quiz from '../mcqtest/Quiz';
import Webcam from "react-webcam";
import WebcamIcon from "../../components/icons/WebcamIcon"
import ProctoredTestInfo from '../../components/composite/test-info/proctored-test-info/ProctoredTestInfo'
import PrimaryButton from '@/components/atomic/primary-button/PrimaryButton';


export default function Home() {
  return (
    <div className='proctoredtest'>
      <div className='elements'>
        <div className='left'>
          <div className='title-top'>
            <div className='title'>Cobalt.</div>
            <div className='title-buttons'>
              <ProctoredTestInfo />
            </div>
          </div>
          <div className='qodetails'>
            <div className='qo'>
              <Quiz questions={MCQData.questions} />
            </div>
            <div className='test-details'>
              <div>3 Marks</div> 
              <div>MCQ</div>
              <button><WebcamIcon width={"40px"} height={"35px"}/></button>
            </div>
          </div>

          <div className='test-buttons'>
            <div className='previous-button'><PrimaryButton value={"<- Previous"} button={{borderRadius: "12px", backgroundColor: "#104fe1", padding: "1.5vh"}} text={{color: "white", fontWeight:"500"}}/></div>
            <div className='secondary-buttons'>
              <PrimaryButton value={"Clear Selection"} button={{borderRadius: "12px", borderColor: "#104fe1", backgroundColor: "white", border: "2px solid", padding: "1.5vh"}} text={{color: "#104fe1", fontWeight:"500"}}/>
              <PrimaryButton value={"Skip ->"} button={{borderRadius: "12px", backgroundColor: "#e6c50b", padding: "1.5vh"}} text={{color: "white", fontWeight:"500"}}/>
              <PrimaryButton value={"Next ->"} button={{borderRadius: "12px", backgroundColor: "#104fe1",  padding: "1.5vh"}} text={{color: "white", fontWeight:"500"}}/>
            </div>
          </div>
        </div>
        <div className='questions-column'>

        </div>
      </div>
    </div>
  )
}

{/* <Webcam height={600} width={600}mirrored={true} /> */}