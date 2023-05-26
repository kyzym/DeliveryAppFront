import styled from '@emotion/styled';
import { Card } from '@mui/material';

export const StyledProductCard = styled(Card)`
  margin-bottom: 16px;
  max-width: 45%;
  flex-basis: 450px;
  height: 450px;
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
