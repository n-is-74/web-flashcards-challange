import React, { useState } from 'react';
import QuestionCard from '../ui/QuestionCard';

function gamePage({ question }) {
  const questions = question;
  const [lengthArr, setLengthArr] = useState(0);

  return (
    <div>
      {questions?.map((el) => (
        <QuestionCard question={el} setLengthArr={setLengthArr} lengthArr={lengthArr} />
      ))}
      {lengthArr === 10 && (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <h1>Поздравляю, вы выиграли викторину!</h1>
        </div>
      )}
    </div>
  );
}

export default gamePage;
