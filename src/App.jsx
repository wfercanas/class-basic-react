import { useEffect, useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { Word } from "./components/Word";

import { StyledApp } from "./styles";

async function getRandomWord() {
  const response = await fetch(
    "https://random-word-api.vercel.app/api?words=1"
  );
  const data = await response.json();
  const word = data[0];
  return word;
}

function App() {
  const [game, setGame] = useState({
    word: undefined,
    goodGuesses: [],
    badGuesses: [],
    loading: true,
    lifes: 10,
  });

  function handleClick(event) {
    const letter = event.target.value;
    if (game.word.includes(letter)) {
      if (!game.goodGuesses.includes(letter)) {
        const newGoodGuesses = [...game.goodGuesses];
        newGoodGuesses.push(letter);
        setGame({ ...game, goodGuesses: newGoodGuesses });
      } else {
        const newLifes = game.lifes - 1;
        if (newLifes === 0) {
          alert("Game over!");
          return;
        }
        setGame({ ...game, lifes: newLifes });
      }
    } else {
      if (!game.badGuesses.includes(letter)) {
        const newBadGuesses = [...game.badGuesses];
        newBadGuesses.push(letter);
        const newLifes = game.lifes - 1;
        if (newLifes === 0) {
          alert("Game over!");
          return;
        }
        setGame({ ...game, badGuesses: newBadGuesses, lifes: newLifes });
      }
    }
  }

  useEffect(() => {
    getRandomWord().then((word) => {
      setGame({ ...game, word: word.toUpperCase(), loading: false });
    });
  }, []);

  if (game.loading) {
    return <div>loading....</div>;
  }

  return (
    <StyledApp>
      <p>Lifes remaining: {game.lifes}</p>
      <Word game={game} />
      <Keyboard onClick={handleClick} game={game} />
    </StyledApp>
  );
}

export default App;
