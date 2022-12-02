import React from 'react';
import s from './Card.module.css';
import { NavLink } from 'react-router-dom';
import random from '../img/randomDog.jpg';

export default function Card({
  name,
  height,
  weight,
  life_span,
  image,
  temperament,
  id,
}) {
  return (
    <NavLink to={`/details/${id}`} style={{ textDecoration: 'none' }}>
      <div className={s.cardCont}>
        <div className={s.imgCont}>
          <img className={s.imgDog} src={image ? image : random} alt=""></img>
        </div>
        <div className={s.text}>
          <h2>{name}</h2>
          <div className={s.details}>
            <p>
              {height} cm <br />
              {weight} kg <br />
              {life_span.includes('years') ? life_span : life_span + ' years'}
            </p>
          </div>
          <div className={s.temps}>
            <p>{temperament}</p>
          </div>
        </div>
      </div>
    </NavLink>
  );
}
