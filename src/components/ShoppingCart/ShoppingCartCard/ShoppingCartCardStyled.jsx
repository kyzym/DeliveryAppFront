import styled from '@emotion/styled';
import { Box, Card } from '@mui/material';

export const StyledCardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const StyledCard = styled(Card)`
  margin-bottom: 16px;
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 390px;

  @media screen and (max-width: 1280px) {
    padding: 16px;
  }
`;
export const StyledImageContainer = styled(Box)`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
