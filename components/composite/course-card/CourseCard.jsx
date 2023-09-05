import React from 'react'
import "./CourseCard.css"

const CourseCard = () => {
  return (
    <div className="dk-course-card-text">
      <div className="joy-of-computing-using-python">
        Joy of Computing using python{" "}
      </div>
      <svg
        className="vector-2"
        height="53"
        viewBox="0 0 0 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V52.1739" stroke="#2B2B2B" />
      </svg>

      <div className="software-devlopment">Software Devlopment </div>
      <svg
        className="vector-3"
        height="53"
        viewBox="0 0 0 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V52.1739" stroke="#2B2B2B" />
      </svg>

      <button className="secondary-button-small">
        <div className="continue">Continue </div>
      </button>
    </div>
  )
}

export default CourseCard