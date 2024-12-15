import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Button,
  styled,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Drawer,
  Typography,
  MenuIcon,
} from "../utils/muiComponents";

const StyledLink = styled(Link)({
  textDecoration: "none",
  color: "inherit",
  margin: "0 10px",
});

const NavBar = ({ onToggleTheme }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawerContent = (
    <Box sx={{ width: 250 }}>
      <List>
        <ListItem button>
          <StyledLink to="/">
            <ListItemText primary="Главная" />
          </StyledLink>
        </ListItem>
        <ListItem button>
          <StyledLink to="/workouts">
            <ListItemText primary="Тренировки" />
          </StyledLink>
        </ListItem>
        <ListItem button>
          <StyledLink to="/add-workout">
            <ListItemText primary="Добавить" />
          </StyledLink>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar position="static" color="primary">
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Gym RPG
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            <Button color="inherit">
              <StyledLink to="/">Главная</StyledLink>
            </Button>
            <Button color="inherit">
              <StyledLink to="/workouts">Тренировки</StyledLink>
            </Button>
            <Button color="inherit">
              <StyledLink to="/add-workout">Добавить</StyledLink>
            </Button>
          </Box>
          <Button color="inherit" onClick={onToggleTheme}>
            Сменить тему
          </Button>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{ display: { xs: "block", sm: "none" } }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
};

export default NavBar;
