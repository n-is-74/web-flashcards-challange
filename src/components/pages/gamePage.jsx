import React from 'react';
import QuestionCard from '../ui/QuestionCard';

function gamePage({ question }) {
  const questions = question;
  return (
    <div>
      {questions?.map((el) => <QuestionCard question={el} />)}
    </div>
  );
}

export default gamePage;
