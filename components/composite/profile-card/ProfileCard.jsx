import React from 'react'
import './ProfileCard.scss'
import PrimaryButton from '@/components/atomic/primary-button/PrimaryButton'

const ProfileCard = (props) => {
  return (
    <div className='layout'>
        <div className='top'>
            <div className='image' />
            <div className='pinfo'>
                <div className='name'>{props.name}</div>
                <div className='regno'>{props.regno}</div>
            </div>
            <PrimaryButton value={"Go To Profile"} />
        </div>
        <div className='bottom'>
            <div className='coursesr'>
                Courses Registered: {props.courses}
            </div>
            <div className='testst'>
                Tests Taken: {props.tests}
            </div>
        </div>
    </div>
  )
}

ProfileCard.defaultProps = {
    name: "Anugrah Toby",
    regno: "21BCE1510",
    courses: "12",
    tests: "5",
};

export default ProfileCard