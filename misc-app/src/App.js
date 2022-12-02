import "./App.css";
import Scrabble from "./componets/Scrabble";
import RockPaperScissors from "./componets/RockPaperScissors";

function App() {
  return (
    <div className="App">
      <h2 className="App-header">Miscellaneous smaller applications!</h2>
      <Scrabble />
      <RockPaperScissors />
    </div>
  );
}

export default App;
