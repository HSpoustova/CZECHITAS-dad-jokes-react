import './style.css';
import { useState } from 'react';
import user1 from './img/user01.png';

export const HomePage = () => {
  const [countPlus, setCountPlus] = useState(0);
  const [countMinus, setCountMinus] = useState(0);

  return (
    <div className="container">
      <div className="joke">
        <div className="joke__body">
          <div className="joke__user">
            <img className="user-avatar" src={user1} />
            <p className="user-name">Neroxx</p>
          </div>

          <p className="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
        </div>
        <div className="joke__likes">
          <button
            id="btn-up"
            className="btn-like btn-like--up"
            onClick={() => {
              setCountPlus(countPlus + 1);
            }}
          ></button>
          <span id="likes-up" className="likes-count likes-count--up">
            {countPlus}
          </span>
          <button
            id="btn-down"
            className="btn-like btn-like--down"
            onClick={() => {
              setCountMinus(countMinus + 1);
            }}
          ></button>
          <span id="likes-down" className="likes-count likes-count--down">
            {countMinus}
          </span>
        </div>
      </div>
    </div>
  );
};
