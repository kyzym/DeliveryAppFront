import styled from '@emotion/styled';
import { Box } from '@mui/material';

export const Container = styled(Box)`
  display: flex;
  margin: 16px;
`;

export const ShopContainer = styled(Box)`
  width: 250px;
  margin-right: 16px;
  @media screen and (max-width: 1200px) {
    flex-basis: 20%;
  }
`;

export const ProductContainer = styled(Box)`
  flex-basis: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-left: auto;
  margin-right: auto;
`;
