import React from 'react'
import "./CourseCard.scss"
import PrimaryButton from '@/components/atomic/primary-button/PrimaryButton'

const CourseCard = (props) => {
  return (
    <div className="coursecard" style={props.card}>
      <div className="title">
        {props.title}
      </div>
      <div className="category">{props.category}</div>
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