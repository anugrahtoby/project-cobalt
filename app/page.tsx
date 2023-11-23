import React from 'react';
import CourseCard from '../components/composite/course-card/CourseCard'
import { MCQData } from '../app/mcqtest/MCQData'
import Quiz from './mcqtest/Quiz';

export default function Home() {
  return (
    <div>
      <Quiz questions={MCQData.questions} />
    </div>
  )
}
