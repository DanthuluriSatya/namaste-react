import React, { useState } from "react";

const OfflineGame = () => {
  const [score, setScore] = useState(0);

  const handleJump = () => {
    setScore(score + 1);
  };

  return (
    <div className="offline-game">
      <h2>You are offline! Let's play a game.</h2>
      <div className="game-box">
        <h3>Score: {score}</h3>
        <button onClick={handleJump}>Jump!</button>
      </div>
      <style jsx>{`
        .offline-game {
          text-align: center;
          margin-top: 50px;
        }
        .game-box {
          margin-top: 20px;
        }
        button {
          padding: 10px 20px;
          font-size: 16px;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
};

export default OfflineGame;
