import React from 'react';
import s from './Card.module.css';

export default function Card({
  name,
  height,
  weight,
  life_span,
  image,
  temperament,
}) {
  return (
    <div className={s.cardCont}>
      <div className={s.imgCont}>
        <img
          className={s.img}
          src={image}
          alt=""
          width="350px"
          height="250px"
        ></img>
      </div>
      <div className={s.text}>
        <h2>{name}</h2>
        <div className={s.details}>
          <p>
            {height} <br />
            {weight} kg <br />
            {life_span}
          </p>
        </div>
        <h4>{temperament}</h4>
      </div>
    </div>
  );
}
