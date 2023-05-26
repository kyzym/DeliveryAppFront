import styled from '@emotion/styled';
import { Box, Card } from '@mui/material';

export const StyledHistoryCard = styled(Card)`
  margin-bottom: 16px;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const StyledHistoryCardContent = styled(Box)`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 8px;
  gap: 16px;
  width: 60%;
`;
