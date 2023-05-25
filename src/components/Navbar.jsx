import { useSelector } from 'react-redux';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { styled } from '@mui/system';

const Link = styled(RouterLink)({
  color: 'inherit',
  textDecoration: 'none',
  marginLeft: '16px',
});

export const Navbar = () => {
  const cartItemCount = useSelector((state) => state.cart.length);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit">
            <Link to="/">Delivery-app</Link>
          </Button>
        </Typography>

        <Button color="inherit">
          <Link to="/">Shops</Link>
        </Button>

        <Link to="/cart">
          <IconButton color="inherit">
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Link>
      </Toolbar>
    </AppBar>
  );
};
