import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  margin: 16px;
`;

export const ShopContainer = styled(Box)`
  flex-basis: 20%;
  margin-right: 16px;
`;

export const ProductContainer = styled(Box)`
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
