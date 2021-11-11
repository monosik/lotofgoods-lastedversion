import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 3px;
  background-color: #404040;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Headline() {
    return (
        <div>
            <Container></Container>
        </div>
    )
}

export default Headline