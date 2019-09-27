import React from 'react';
import styled from 'styled-components';

const Spinner = () => (
    <SpinnerContainer>
        <StyledSpinner viewBox="0 0 50 50">
            <circle
                className="path"
                cx="25"
                cy="25"
                r="20"
                fill="none"
                strokeWidth="4"
            />
        </StyledSpinner>
        Loading users..
    </SpinnerContainer>
);

const SpinnerContainer = styled.div`
    width: 100%;
    height: 100px;
    background: rgba(0,0,0,.75);
    color: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const StyledSpinner = styled.svg`
  width: 50px;
  height: 50px;
  margin-right: 20px;
  animation: rotate 2s linear infinite;
  
  & .path {
    stroke: #fff;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }
  
  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;

export default Spinner;