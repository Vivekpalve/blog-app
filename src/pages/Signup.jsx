import React from "react";
import Base from "../components/Base";
import styled from "styled-components";
import { AccountBox } from "../components/accountBox";

const AppContainer = styled.div`
  width: 100%;
  height: 90%;
  display: flex;
  flex-direction: column;
  margin-top: 0.3px;
  align-items: center;
  justify-content: center;
  background: rgb(9, 9, 9);
  background: linear-gradient(
    90deg,
    rgba(9, 9, 9, 1) 10%,
    rgba(0, 212, 255, 0.57484243697479) 80%,
    rgba(1, 1, 4, 1) 100%
  );
  background: rgb(9, 9, 9);
  background: radial-gradient(
    circle,
    rgba(9, 9, 9, 1) 10%,
    rgba(0, 0, 0, 0.57484243697479) 80%,
    rgba(1, 1, 4, 1) 100%
  );
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
