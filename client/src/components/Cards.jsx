import React from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getDogs } from '../actions';
import Card from './Card';
import s from './Cards.module.css';

export default function Cards({ currentDogs }) {
  const dispatch = useDispatch();
  // const allDogs = useSelector((state) => state.dogs);

  useEffect(() => {
    dispatch(getDogs());
  }, [dispatch]);
  return (
    <div className={s.cardsCont}>
      {currentDogs &&
        currentDogs.map((d) => {
          return (
            <Card
              name={d.name}
              height={d.height.metric}
              weight={d.weight.metric}
              life_span={d.life_span}
              image={d.image}
              temperament={d.temperament}
              key={d.id}
            />
          );
        })}
    </div>
  );
}
