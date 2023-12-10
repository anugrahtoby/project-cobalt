"use client";
import React from 'react'
import Compiler from './Compiler'
import"./page.scss"
import { useEffect, useState } from "react";


const page = () => {

  return (
    <div className="layout">
      <div className="questiontitle">
        Question 1
        <div className="questioncontent">lala</div>
      </div>
      <div className="leftarea">
        <div className='editor'>
          <Compiler />
        </div>
        <div className="console-head">
          Console
        </div>
      </div>
    </div>
  )
}

export default page