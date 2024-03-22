import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar variant="dense">
        <Typography variant="h6" color="inherit">
          <div>Trendify</div>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
