import { Keyboard } from "./components/Keyboard";

function App() {
  const word = "ahorcado";
  function handleClick(event) {
    console.log(word.toUpperCase().includes(event.target.value));
  }

  return <Keyboard onClick={handleClick} />;
}

export default App;
