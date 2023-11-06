import React from 'react'
import Compiler from './Compiler'
import"./page.scss"


const page = () => {
  return (
    <div className="layout">
      <div className="question">
        Box
      </div>
      <div className="workarea">
        <div className='editor'>
          <Compiler />
        </div>
        <div className="console">
          console
        </div>
      </div>
    </div>
  )
}

export default page