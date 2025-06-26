import { Letter } from "../Letter";
import { StyledWord } from "./styles";

function Word(props) {
  const { word } = props;

  const letters = word.split("");
  return (
    <StyledWord>
      {letters.map((letter, index) => (
        <Letter key={index + letter} letter={letter} />
      ))}
    </StyledWord>
  );
}

export { Word };
