import React, { useState } from "react";

const Scrabble = () => {
  const [word, setWord] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const handleWordChange = (event) => {
    setWord(event.target.value);
    setShowScore(false);
    setScore(0);
  };

  const scoreWord = (word, score) => {
    let newWord = word.toUpperCase();
    console.log(newWord);
    let letterPoints = "";

    for (let i = 0; i < newWord.length; i++) {
      for (const pointValue in oldPointStructure) {
        if (oldPointStructure[pointValue].includes(newWord[i])) {
          letterPoints += `Points for '${newWord[i]}': ${pointValue}\n`;
          setScore((score += Number(pointValue)));
        }
      }
    }
    console.log(letterPoints);

    console.log(score);
    return score;
  };
  const oldPointStructure = {
    1: ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
    2: ["D", "G"],
    3: ["B", "C", "M", "P"],
    4: ["F", "H", "V", "W", "Y"],
    5: ["K"],
    8: ["J", "X"],
    10: ["Q", "Z"],
  };

  return (
    <div style={{ backgroundColor: "green", height: 600 }}>
      <h1>Scrabble Word Calculator</h1>
      <p>Input word here</p>
      <input
        placeholder="Scrabble"
        onChange={handleWordChange}
        value={word}
        type="text"
      ></input>
      <button
        style={{ marginLeft: 5 }}
        onClick={() => {
          if (word.length === 0) {
            return;
          } else {
            scoreWord(word, score);
            setShowScore(true);
          }
        }}
      >
        Get Score!
      </button>
      <div>
        {showScore ? (
          <p>
            Nice, {word} is worth {score} points!
          </p>
        ) : null}
      </div>
    </div>
  );
};

export default Scrabble;
