import { Letter } from "../Letter";
import { StyledWord } from "./styles";

function getLetterStatus(letter, game) {
  if (game.goodGuesses.includes(letter)) {
    return "success";
  }
  return "default";
}

function Word(props) {
  const { game } = props;

  const letters = game.word.split("");
  return (
    <StyledWord>
      {letters.map((letter, index) => (
        <Letter
          key={index + letter}
          letter={letter}
          status={getLetterStatus(letter, game)}
        />
      ))}
    </StyledWord>
  );
}

export { Word };
