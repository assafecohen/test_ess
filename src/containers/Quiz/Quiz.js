import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import {
  MainContainer,
} from '../../styles/styled-components/CenteredOnPage';
import Question from './quiz-components/Question/Question';
import Summary from './quiz-components/Summary/Summary';

const QuizProgress = styled.div`
  margin-bottom: 20px;
  font-size: 20px;
  color: #ccc;
`;

const Quiz = () => {
  const [progress, setProgress] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const numberOfQuestions = questions.length;
  const onConfirmQuestion = (isCorrect, questionIndex) => {
    if (isCorrect) {
      setScore((prevScore) => prevScore + 1);
    }
    setQuestions((prevQuestions) => {
      prevQuestions[questionIndex].isCorrect = isCorrect;
      return prevQuestions;
    });
    setProgress((prevProgress) => prevProgress + 1);
  };
  const onNewGame = () => {
    setProgress(0);
    setScore(0);
    axios
      .get('https://api.jsonbin.io/b/5fb45fb904be4f05c926a037')
      .then(({ data }) => setQuestions(data))
      .catch((err) => console.log(err));
  };
  const progressString = `${progress + 1} / ${numberOfQuestions}`;
  useEffect(() => {
    // Each Time progress is set to 0, fetching newGame.
    if (progress === 0) {
      onNewGame();
    }
  }, [progress]);
  // Once all questions are finished render Summary Component.
  if (progress === numberOfQuestions - 1) {
    return (
      <Summary questions={questions} score={score} setProgress={setProgress} />
    );
  }
  //Rendering Game
  return (
    <MainContainer>
      {!!numberOfQuestions && (
        <>
          <QuizProgress>{progressString}</QuizProgress>
          {numberOfQuestions &&
            questions.map((question, index) => (
              <Question
                question={question}
                key={question.id}
                shouldDisplay={progress === index}
                onConfirmQuestion={onConfirmQuestion}
                index={index}
              />
            ))}
        </>
      )}
    </MainContainer>
  );
};

export default Quiz;
