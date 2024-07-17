import React from "react";
import PlayerCard from "./pages/PlayerCard/PlayerCard";
import "./App.css";
import { PlayerInformation } from "./common/components/constants/playerInformation";

const App = () => {
  return (
    <div className="app">
      {PlayerInformation.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default App;
