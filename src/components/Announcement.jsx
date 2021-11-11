import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30%;
  background-color: #f6bd60;
  color: #404040;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
`;

function Announcement() {
    return (
        <div>
            <Container>
                Welcome to A Lot of Good
            </Container>
        </div>
    )
}

export default Announcement
