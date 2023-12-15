import React from 'react';
import { MCQData } from '../app/mcqtest/MCQData'
import Quiz from './mcqtest/Quiz';

export default function Home() {
  return (
    <div>
      <Quiz questions={MCQData.questions} />
    </div>
  )
}
