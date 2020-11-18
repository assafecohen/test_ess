import React, { useState } from 'react';
import styled from 'styled-components';
import Answers from './Answers/Answers';

const QContainer = styled.div`
  padding: 2.5rem;
  padding-top: 0;
`;
const TheQuestion = styled.h1`
  color: #363636;
`;
const ConfirmButton = styled.button`
  float: right;
  cursor: pointer;
  margin-top: 2rem;
  padding: 12px;
  color: white;
  background-color: orange;
  border: none;
  border-radius: 6px;
  outline: none;
  font-weight: bold;
`;

const ViewOnlyContainer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: block;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ViewOnlyText = styled.span`
  opacity: 0.2;
  font-size: 5rem;
  letter-spacing: 30px;
  -webkit-transform: rotate(10deg);
  -ms-transform: rotate(10deg);
  transform: rotate(10deg);
`;

const Question = ({
  shouldDisplay,
  question,
  onConfirmQuestion,
  index,
  viewOnly = false,
}) => {
  const { answers, theQuestion, rightAnswer } = question;
  const [selected, setSelected] = useState(-1);
  const isAnswerRight = selected === rightAnswer;
  return (
    <div style={{ position: 'relative' }}>
      {viewOnly && (
        <ViewOnlyContainer>
          <ViewOnlyText>View Only</ViewOnlyText>
        </ViewOnlyContainer>
      )}
      {shouldDisplay && (
        <QContainer>
          <TheQuestion>{theQuestion}</TheQuestion>
          <Answers
            answers={answers}
            setSelected={setSelected}
            selected={viewOnly ? rightAnswer : selected}
          />
          {!!(selected + 1) && !viewOnly && (
            <ConfirmButton
              type='button'
              onClick={() => onConfirmQuestion(isAnswerRight, index)}
            >
              Confirm
            </ConfirmButton>
          )}
        </QContainer>
      )}
    </div>
  );
};

export default Question;
