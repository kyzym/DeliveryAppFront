import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';

const Link = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  marginLeft: '16px',
});

export const Navbar = () => (
  <AppBar position="static">
    <Toolbar>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Delivery-app
      </Typography>
      <Button color="inherit">
        <Link to="/">Shops</Link>
      </Button>
      <Button color="inherit">
        <Link to="/cart">Shopping Cart</Link>
      </Button>
    </Toolbar>
  </AppBar>
);
