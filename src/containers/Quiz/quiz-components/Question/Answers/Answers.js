import React from "react";
import styled from "styled-components";

const AnswersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;
const Answer = styled.button`
  opacity: ${({ isSelected }) => (isSelected ? "1;" : "0.7;")}
  background-color: ${({ isSelected }) => (isSelected ? "#007bff;" : "white;")}
  color: ${({ isSelected }) => (isSelected ? "#fff;" : ";")}
  padding: 1.2rem;
  min-width: 100%;
  border: 1px solid black;
  border-radius: 6px;
  font-size: 1.4rem;
  margin-top: 1.2rem;
  cursor: pointer;
  &:hover {
    opacity: 1;
`;

const Answers = ({ answers, setSelected, selected }) => (
  <AnswersContainer>
    {answers.map((answer, index) => (
      <Answer
        isSelected={index === selected}
        key={answer}
        type="button"
        onClick={() => setSelected(index)}
      >
        {answer}
      </Answer>
    ))}
  </AnswersContainer>
);

export default Answers;
