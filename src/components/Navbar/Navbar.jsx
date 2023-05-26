import { useSelector } from 'react-redux';

import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
  IconButton,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { StyledLink } from './Navbar.styled';
import { selectCartContent } from '../../redux/cart/cartSelectors';
import { MaterialUISwitch } from '../Other/MaterialUISwitch';

export const Navbar = ({ onThemeChange }) => {
  const cartItemCount = useSelector(selectCartContent);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Button color="inherit">
            <StyledLink to="/">Delivery-app</StyledLink>
          </Button>
        </Typography>

        <Button color="inherit">
          <StyledLink to="/">Shops</StyledLink>
        </Button>

        <Button color="inherit">
          <StyledLink to="/history">Order History</StyledLink>
        </Button>

        <StyledLink to="/cart">
          <IconButton color="inherit">
            <Badge badgeContent={cartItemCount} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </StyledLink>
        <MaterialUISwitch
          sx={{ m: 1, ml: 3 }}
          onChange={onThemeChange}
          defaultChecked
        />
      </Toolbar>
    </AppBar>
  );
};
