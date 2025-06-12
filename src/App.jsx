import { Keyboard } from "./components/Keyboard";

import { StyledApp } from "./styles";

function App() {
  const word = "ahorcado";
  function handleClick(event) {
    console.log(word.toUpperCase().includes(event.target.value));
  }

  return (
    <StyledApp>
      <Keyboard onClick={handleClick} />;
    </StyledApp>
  );
}

export default App;
