import React from 'react';
import './page.scss'
import ProfileCard from '../../components/composite/profile-card/ProfileCard'
import DashTests from '../../components/composite/tests-dash/DashTests'
import DashCourses from '../../components/composite/courses-dash/DashCourses'

export default function Home() {

  return (
    <div className='dashboard'>
      <div className='elements'>
        <div className='dash-title'>Cobalt.</div>
        <div className='cards'>
          <ProfileCard />
          <div className='right'>
            <div className='courses-section'>
              <div className='courses-title'>
                Courses
                <button className='courses-link'>
                  Go to all courses
                </button>
              </div>
              <DashCourses />
            </div>
            <div className='tests-section'>
              <div className='tests-title'>
                Tests
                <button className='tests-link'>
                  Go to all tests
                </button>
              </div>
              <DashTests />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}