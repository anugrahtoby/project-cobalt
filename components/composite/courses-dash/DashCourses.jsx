import React from 'react'
import './DashCourses.scss'
import CourseCard from '../course-card/CourseCard'

const DashCourses = () => {
  return (
    <div className='dclayout'>
        <CourseCard card={{borderRadius: "15px 15px 0px 0px", backgroundColor: "#151A24"}} />
        <CourseCard card={{borderRadius: "0px 0px 0px 0px", backgroundColor: "#080C12"}} />
        <CourseCard card={{borderRadius: "0px 0px 15px 15px", backgroundColor: "#151A24"}}/>
    </div>
  )
}

export default DashCourses