/* eslint-disable react/prop-types */
import React, { useState } from 'react';

export default function QuestionCard({ question }) {
  const [input, setInput] = useState('');
  const handleChange = async (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const submitHandler = async (id) => {
    await fetch(`/game/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });
    window.location = '/game/:id';
  };
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 container">
      <div className="card mb-3">
        {question
          ? (
            <form>
              {' '}
              <div className="row g-0">
                <div className="col-md-4" />
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">{`${question.question}`}</p>
                    <input type="text" onChange={handleChange} />
                    <button type="submit" onClick={() => submitHandler(question.id)} className="btn btn-dark ms-2">Ответить</button>
                    {' '}

                  </div>
                </div>
              </div>
            </form>

          )
          : <div className="card-text" style={{ color: 'red' }}><h3>Error: question not found</h3></div>}
      </div>
    </div>
  );
}
