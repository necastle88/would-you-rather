import React from "react";
import ScoreCards from "../../components/ScoreCard/ScoreCard.component";

import "./leaderboard.styles.scss";

const LeaderboardPage = () => {
  return (
    <div className="LeaderboardPage-container">
      <ScoreCards />
    </div>
  );
};

export default LeaderboardPage;
