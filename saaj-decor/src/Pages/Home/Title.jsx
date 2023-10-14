import React from "react";
import styled from "styled-components";

const Title = ({ title }) => {
  return (
    <TComponent>
      <h2>{title}</h2>
      <div>
        <span></span> X <span></span>
      </div>
    </TComponent>
  );
};

const TComponent = styled.div`
  h2 {
    font-size: 24px;
    font-weight: 600;
    padding-bottom: 16px;
  }
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
    span {
      background: gray;
      width: 80px;
      height: 2px;
      display: inline-block;
    }
  }
`;

export default Title;
