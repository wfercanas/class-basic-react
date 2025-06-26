import { Key } from "../Key";
import { StyledKeyboard } from "./styles";

const letters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

function getLetterStatus(letter, game) {
  if (game.goodGuesses.includes(letter)) {
    return "success";
  }

  if (game.badGuesses.includes(letter)) {
    return "error";
  }

  return "default";
}

function Keyboard(props) {
  const { onClick, game } = props;

  return (
    <StyledKeyboard>
      {letters.map((letter) => (
        <Key
          key={letter}
          letter={letter}
          status={getLetterStatus(letter, game)}
          onClick={onClick}
        />
      ))}
    </StyledKeyboard>
  );
}

export { Keyboard };
