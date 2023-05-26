import styled from '@emotion/styled';
import { Card, CardContent, CircularProgress } from '@mui/material';

export const StyledProductCard = styled(Card)`
  margin-bottom: 16px;
  max-width: 45%;
  flex-basis: 450px;
  height: 430px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;

export const StyledImg = styled.img`
  height: 200px;
  width: 300px;
  display: block;
  margin: 0 auto;
  border-radius: 5px;
`;

export const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  position: absolute;
  top: 35%;
  left: 45%;
  transform: translate(-50%, -50%);
`;
