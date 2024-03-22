import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from "react";

const Header = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  const appBarStyle = {
    width: '100%',
    margin: 0, // AppBar'ı ekrana sabitlemek için kenar boşluklarını kaldır
    padding: 0, // İç kenar boşluklarını kaldır
    // AppBar'ın içindeki araç çubuğunu (Toolbar) yanlardan sıkıştırmak için
    '& .MuiToolbar-root': { 
      padding: 0, // Toolbar için iç kenar boşluklarını kaldır
      minHeight: '64px', // Toolbar yüksekliğini ayarla
    },
  };


  return (
    <AppBar position="static" sx={appBarStyle}>
    <Toolbar sx={{ justifyContent: 'space-between', width: '100%' }}>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Home</MenuItem>
        <MenuItem onClick={handleClose}>Products</MenuItem>
        <MenuItem onClick={handleClose}>Categories</MenuItem>
      </Menu>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        Trendify
      </Typography>
    </Toolbar>
  </AppBar>
  );
};

export default Header;
