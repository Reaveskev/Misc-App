import React, { useState } from "react";

const RockPaperScissors = () => {
  const options = ["Rock", "Paper", "Scissors"];
  const [userPick, setUserPick] = useState("");
  const [winner, setWinner] = useState(false);
  const [draw, setDraw] = useState(false);
  const [loser, setLoser] = useState(false);

  const [userWins, setUserWins] = useState(0);
  const [computerWins, setComputerWins] = useState(0);

  const playGame = (userPick) => {
    let randomNum = Math.floor(Math.random() * 3);
    let computerPick = options[randomNum];
    console.log(computerPick);
    console.log(userPick);
    if (userPick === "Rock" && computerPick === "Scissors") {
      console.log("You won!");
      setUserWins(userWins + 1);
      setWinner(true);
    } else if (userPick === "paper" && computerPick === "rock") {
      console.log("You won!");
      setUserWins(userWins + 1);
      setWinner(true);
    } else if (userPick === "Scissors" && computerPick === "Paper") {
      console.log("You won!");
      setUserWins(userWins + 1);
      setWinner(true);
    } else if (userPick === computerPick) {
      console.log("It's a draw! You both picked", userPick);
      setDraw(true);
    } else {
      console.log("You lost!");
      setComputerWins(computerWins + 1);
      setLoser(true);
    }
  };

  return (
    <div style={{ backgroundColor: "red", height: 600 }}>
      <h1>Rock Paper Scissors</h1>

      <button
        onClick={() => {
          console.log("You choose rock");
          setWinner(false);
          setDraw(false);
          setLoser(false);
          setUserPick("Rock");
        }}
        style={{ margin: 10 }}
      >
        <img height={50} src={require("./Rock.png")}></img>
      </button>
      <button
        onClick={() => {
          console.log("You choose paper");
          setWinner(false);
          setDraw(false);
          setLoser(false);
          setUserPick("Paper");
        }}
        style={{ margin: 10 }}
      >
        <img height={50} src={require("./Paper.png")}></img>
      </button>
      <button
        onClick={() => {
          console.log("You choose scissors");
          setWinner(false);
          setDraw(false);
          setLoser(false);
          setUserPick("Scissors");
        }}
        style={{ margin: 10 }}
      >
        <img height={50} src={require("./Scissors.png")}></img>
      </button>
      <div>
        <button
          onClick={() => {
            playGame(userPick);
          }}
        >
          Play
        </button>
        <div>
          {winner ? <p>Winner Winner Chicken Dinner</p> : null}
          {loser ? <p>The computer won, try again!</p> : null}
          {draw ? <p>You both picked {userPick} and tied!</p> : null}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <p style={{ marginRight: 15 }}>User score: {userWins}</p>
          <p>Computer score: {computerWins}</p>
        </div>
        <button
          onClick={() => {
            setUserWins(0);
            setComputerWins(0);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default RockPaperScissors;
