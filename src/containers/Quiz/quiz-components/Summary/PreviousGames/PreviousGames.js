import React from "react";
import styled from "styled-components";

const PrevGame = styled.div`
  padding: 20px;
  border: 6px;
  border-radius: 6px;
  color: #red;
  border: 2px solid #8950fc;
  display: flex;
  flex-direction: column;
  margin: 15px;
`;
const PrevGamesContainer = styled.div`
  overflow: scroll;
  max-height: 300px;
`;

const PreviousGames = ({ previousGames = [] }) => {
  return (
    <div>
      <h1>Previous Games</h1>
      <PrevGamesContainer>
        {previousGames.map(({ score, date }) => (
          <PrevGame>
            <span>Date: {date}</span>
            <span>Score: {score} / 10</span>
          </PrevGame>
        ))}
      </PrevGamesContainer>
    </div>
  );
};

export default PreviousGames;
