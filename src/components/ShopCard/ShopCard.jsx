import { CardContent, CardActions, Button, Typography } from '@mui/material';

import { StyledShopCard } from './ShopCardStyled';

export const ShopCard = ({ shop, selectedShop, handleSelectShop }) => {
  return (
    <StyledShopCard
      style={{
        backgroundColor:
          selectedShop && selectedShop.id === shop.id ? '#cfe8fc' : '',
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
