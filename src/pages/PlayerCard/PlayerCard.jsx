import React from "react";
import "./playercard.css";

const PlayerCard = ({ player }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={player.image} alt={player.name} />
      </div>
      <div className="details">
        <div className="player-name">{player.name}</div>
        <div className="position">{player.position}</div>
      </div>
      <div className="stats">
        <div className="stat">
          <div className="number">{player.pointsPerGame}</div>
          <div className="label">Points</div>
        </div>
        <div className="stat">
          <div className="number">{player.assistsPerGame}</div>
          <div className="label">Assists</div>
        </div>
        <div className="stat">
          <div className="number">{player.reboundPerGame}</div>
          <div className="label">Rebounds</div>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
