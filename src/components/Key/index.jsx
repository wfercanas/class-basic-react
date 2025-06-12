import { StyledButton } from "./styles";

function Key(props) {
  const { letter, status, onClick } = props;

  return (
    <StyledButton $status={status} value={letter} onClick={onClick}>
      {letter}
    </StyledButton>
  );
}

export { Key };
