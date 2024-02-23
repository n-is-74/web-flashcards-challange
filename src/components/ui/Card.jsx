/* eslint-disable react/prop-types */
import React from 'react';

export default function Card({ viktorina }) {
  const submitHandler = async (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(e.target));

    const res = await fetch(`/songs/${entry.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    if (res.status === 200) {
      window.location = '/all-the-entries';
    } else {
      setForm(true);
    }
  };
  return (
    <div className="col-xs-12 col-sm-6 col-md-4 container">
      <div className="card mb-3">
        {viktorina
          ? (
            <div className="row g-0">
              <div className="col-md-4">
                <img src={viktorina.img} className="img-fluid rounded-start" alt={viktorina.title} />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{` ${viktorina.title}`}</h5>
                  <p className="card-text">{`Crew: ${viktorina.title}`}</p>
                  {/* <button type="submit" className="btn btn-dark">Dark</button> */}
                  <a href={`/game/${viktorina.id}`}>Начать</a>
                </div>
              </div>
            </div>
          )
          : <div className="card-text" style={{ color: 'red' }}><h3>Ошибка: Викторина не найдена.</h3></div>}
      </div>
    </div>
  );
}
