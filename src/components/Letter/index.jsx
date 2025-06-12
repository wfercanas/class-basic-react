import { StyledLetter } from "./styles";

function Letter(props) {
  const { letter, status = "default" } = props;
  return (
    <StyledLetter $status={status}>
      {status === "success" && letter}
    </StyledLetter>
  );
}

export { Letter };
