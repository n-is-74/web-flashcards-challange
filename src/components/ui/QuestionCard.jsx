import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

export default function QuestionCard({ question, setLengthArr, lengthArr }) {
  console.log(question, 'lllll');
  const [input, setInput] = useState('');
  console.log(lengthArr);
  const [showModal, setShowModal] = useState(false);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isQuestionVisible, setIsQuestionVisible] = useState(true);

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const submitHandler = async (id) => {
    try {
      const response = await fetch(`/game/${id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ answer: input }),
      });
      const data = await response.json();

      setIsCorrectAnswer(data.correct);
      const lenth = lengthArr + 1;
      setLengthArr(lenth);
      setShowModal(!data.correct);

      if (data.correct) {
        setIsQuestionVisible(false);
      }
    } catch (error) {
      console.error(error);
      setShowModal(true);
    }
  };

  return (
    <>
      {isQuestionVisible && (
        <div className="col-xs-12 col-sm-6 col-md-4 container">
          <div className="card mb-3">
            <form>
              <div className="row g-0">
                <div className="col-md-4" />
                <div className="col-md-8">
                  <div className="card-body">
                    <p className="card-text">{question.question}</p>
                    <input type="text" value={input} onChange={handleChange} />
                    <button
                      type="button"
                      onClick={() => submitHandler(question.id)}
                      className="btn btn-dark ms-2"
                    >
                      Ответить
                    </button>
                    {isCorrectAnswer}
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Ответ</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Неправильный ответ. Попробуйте еще раз!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Начать заново
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
