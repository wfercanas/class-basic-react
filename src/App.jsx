import { Keyboard } from "./components/Keyboard";
import { Word } from "./components/Word";

import { StyledApp } from "./styles";

function App() {
  const word = "ahorcado";
  function handleClick(event) {
    console.log(word.toUpperCase().includes(event.target.value));
  }

  return (
    <StyledApp>
      <Word word={word} />
      <Keyboard onClick={handleClick} />
    </StyledApp>
  );
}

export default App;
