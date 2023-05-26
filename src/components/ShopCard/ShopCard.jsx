import {
  CardContent,
  CardActions,
  Button,
  Typography,
  useTheme,
} from '@mui/material';

import { StyledShopCard } from './ShopCardStyled';

export const ShopCard = ({ shop, selectedShop, handleSelectShop }) => {
  const theme = useTheme();

  return (
    <StyledShopCard
      style={{
        backgroundColor:
          selectedShop && selectedShop.id === shop.id
            ? theme.palette.action.selected
            : '',
      }}>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {shop.name}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => handleSelectShop(shop)}>
          View Products
        </Button>
      </CardActions>
    </StyledShopCard>
  );
};
