import React from "react";
import Base from "../components/Base";
import styled from "styled-components";
import { AccountBox } from "../components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  align-items: center;
  justify-content: center;
`;

const Signup = () => {
  return (
    <Base>
      <AppContainer>
        <AccountBox />
      </AppContainer>
    </Base>
  );
};

export default Signup;
