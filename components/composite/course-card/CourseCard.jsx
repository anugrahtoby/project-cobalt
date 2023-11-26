import React from 'react'
import "./CourseCard.scss"
import PrimaryButton from '@/components/atomic/primary-button/PrimaryButton'

const CourseCard = (props) => {
  return (
    <div className="coursecard" style={props.card}>
      <div className="title">
        {props.title}
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

      <div className="category">{props.category}</div>
      <svg
        className="vector-3"
        height="53"
        viewBox="0 0 0 53"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 0V52.1739" stroke="#2B2B2B" />
      </svg>

      {/* <button className="button">
        <div className="continue">Continue </div>
      </button> */}
      <div className='button'>
        <PrimaryButton value={"Continue"} button={{backgroundColor: 'white', borderRadius: '12px'}} text={{color: '#2C68F3'}}/>
      </div>
    </div>
  )
}

CourseCard.defaultProps = {
  title: "Joy of Computing using Python",
  category: "Software Development",
  card: {backgroundColor: "#151A24"},
};

export default CourseCard