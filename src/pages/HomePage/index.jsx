import './style.css';
import { Joke } from '../../Joke';

const response = await fetch('http://localhost:4000/api/jokes');
const data = await response.json();
const jokes = data.result;

export const HomePage = () => {
  return (
    <div className="container">
      {jokes.map((jokee) => {
        return (
          <Joke
            key={jokee.id}
            userAvatar={jokee.avatar}
            userName={jokee.name}
            text={jokee.text}
            likes={jokee.likes}
            dislikes={jokee.dislikes}
          />
        );
      })}
    </div>
  );
};
