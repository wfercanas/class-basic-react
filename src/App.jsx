import { useEffect, useReducer, useState } from "react";
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

function gameReducer(game, action) {
  const { type, payload } = action;
  if (type === "loaded_word") {
    return { ...game, word: payload.word };
  }
  if (type === "loaded_game") {
    return { ...game, loading: false };
  }
  if (type === "good_guess") {
    if (!game.goodGuesses.includes(payload.letter)) {
      const newGoodGuesses = [...game.goodGuesses];
      newGoodGuesses.push(payload.letter);
      return { ...game, goodGuesses: newGoodGuesses };
    } else {
      return { ...game, lifes: game.lifes - 1 };
    }
  }
  if (type === "bad_guess") {
    if (!game.badGuesses.includes(payload.letter)) {
      const newBadGuesses = [...game.badGuesses];
      newBadGuesses.push(payload.letter);
      return { ...game, badGuesses: newBadGuesses, lifes: game.lifes - 1 };
    }
  }
}

function App() {
  const [game, dispatch] = useReducer(gameReducer, {
    word: undefined,
    goodGuesses: [],
    badGuesses: [],
    loading: true,
    lifes: 10,
  });

  function handleClick(event) {
    const letter = event.target.value;
    if (game.word.includes(letter)) {
      dispatch({
        type: "good_guess",
        payload: {
          letter: letter,
        },
      });
    } else {
      dispatch({
        type: "bad_guess",
        payload: {
          letter: letter,
        },
      });
    }
  }

  useEffect(() => {
    getRandomWord().then((word) => {
      dispatch({
        type: "loaded_word",
        payload: {
          word: word.toUpperCase(),
        },
      });
      dispatch({
        type: "loaded_game",
      });
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
