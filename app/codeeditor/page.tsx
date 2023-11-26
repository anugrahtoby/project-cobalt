"use client";
import React from 'react'
import Compiler from './Compiler'
import"./page.scss"
import { Dropdown } from 'primereact/dropdown';
import { useEffect, useState } from "react";




const page = () => {

  return (
    <div className="layout">
      <div className="question">
        Question 1<br /> <br /> lala
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