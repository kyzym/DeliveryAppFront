import styled from '@emotion/styled';
import { Box, Card } from '@mui/material';

export const StyledCardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const StyledCard = styled(Card)`
  width: 45%;
  margin-bottom: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 390px;
`;
export const StyledImageContainer = styled(Box)`
  height: 60%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
