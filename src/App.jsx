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
    word: "AHORCADO",
    goodGuesses: [],
    badGuesses: [],
    loading: true,
  });

  function handleClick(event) {
    const letter = event.target.value;
    if (game.word.includes(letter)) {
      if (!game.goodGuesses.includes(letter)) {
        const copy = [...game.goodGuesses];
        copy.push(letter);
        setGame({ ...game, goodGuesses: copy });
      }
    } else {
      if (!game.badGuesses.includes(letter)) {
        const copy = [...game.badGuesses];
        copy.push(letter);
        setGame({ ...game, badGuesses: copy });
      }
    }
  }

  useEffect(() => {
    getRandomWord().then((word) => {
      setGame({ ...game, word: word.toUpperCase(), loading: false });
    });
  }, []);

  if (game.loading) {
    return <div>loading...</div>;
  }

  return (
    <StyledApp>
      <Word game={game} />
      <Keyboard onClick={handleClick} game={game} />
    </StyledApp>
  );
}

export default App;
