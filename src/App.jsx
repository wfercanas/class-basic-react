import { useState } from "react";
import { Keyboard } from "./components/Keyboard";
import { Word } from "./components/Word";

import { StyledApp } from "./styles";

function App() {
  const [game, setGame] = useState({
    word: "AHORCADO",
    goodGuesses: [],
    badGuesses: [],
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

  return (
    <StyledApp>
      <Word game={game} />
      <Keyboard onClick={handleClick} game={game} />
    </StyledApp>
  );
}

export default App;
