import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  MainContainer,
} from '../../../../styles/styled-components/CenteredOnPage';
import Question from '../Question/Question';
import PreviousGames from './PreviousGames/PreviousGames';
import moment from 'moment';

const Results = styled.div`
  display: flex;
  justify-content: center;
`;
const ResultBox = styled.button`
  border: 8px;
  border-radius: 16px;
  padding: 15px;
  border: none;
  margin: 0 15px;
  color: white;
  cursor: pointer;
  background-color: ${({ isViewed, isCorrect }) => {
    if (isViewed && isCorrect) {
      return '#1BC5BD;';
    }
    if (isViewed) return '#F64E60;';
    return '#7E8299;';
  }}
  &:hover {
  background-color: ${({ isCorrect }) => (isCorrect ? '#1BC5BD;' : '#F64E60;')}
`;
const TryAgainBtn = styled.button`
  margin: auto;
  cursor: pointer;
  margin-top: 2rem;
  padding: 12px;
  color: white;
  background-color: #1bc5bd;
  border: none;
  border-radius: 6px;
  outline: none;
  font-weight: bold;
`;

const Summary = ({ setProgress, questions, score }) => {
  const [viewedQuestion, setViewedQuestion] = useState(0);
  const [previousGames, setPreviousGames] = useState([]);

  useEffect(() => {
    const date = moment().format('DD-MM-YYYY HH:mm');
    // On Mount Saving Score To LocalStorage.
    // A nice would be to save gameId, to prevent duplicate Data.
    const prevGames = JSON.parse(localStorage.getItem('games'));
    if (prevGames) {
      const updatedGames = [...prevGames, { score, date }];
      setPreviousGames(updatedGames);
      return localStorage.setItem('games', JSON.stringify(updatedGames));
    } else {
      setPreviousGames([{ score, date }]);
      localStorage.setItem('games', JSON.stringify([{ score, date }]));
    }
    // eslint-disable-next-line
  }, []);

  return (
    <MainContainer>
      <PreviousGames previousGames={previousGames} />
      <h1>Your Score is {score} / 10</h1>
      <Results>
        {questions.map((question, index) => (
          <ResultBox
            type='button'
            onClick={() => setViewedQuestion(index)}
            isCorrect={question.isCorrect}
            isViewed={viewedQuestion === index}
          >
            {question.isCorrect ? 'CORRECT' : 'WRONG'}
          </ResultBox>
        ))}
      </Results>
      <Question
        question={questions[viewedQuestion]}
        shouldDisplay={true}
        viewOnly={true}
      />
      <TryAgainBtn type='button' onClick={() => setProgress(0)}>
        Try Again
      </TryAgainBtn>
    </MainContainer>
  );
};

export default Summary;
