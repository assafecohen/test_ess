import React from "react";
import styled from "styled-components";
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import { CenteredOnPage } from "../../styles/styled-components/CenteredOnPage";

const PageSpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FullPageSpinner = () => {
  return (
    <CenteredOnPage>
      <PageSpinnerContainer>
        <h2>Initializing App...</h2>
        <ClimbingBoxLoader size={20} color={"#3699FF"} loading={true} />
      </PageSpinnerContainer>
    </CenteredOnPage>
  );
};

export default FullPageSpinner;
