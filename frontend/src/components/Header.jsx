import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";

import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
const drawerWidth = 240;
const Header = () => {
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "#fff",
        transform: "translateZ(0)",
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
        backgroundColor: "#fff",
      }}
    >
      <Toolbar>
        {/* <Grid item sm={6} style={{ border: "1px solid #fff" }}> */}
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: "none" } }}
        >
          <MenuIcon />
        </IconButton>
        <InputBase
          placeholder="search"
          startAdornment={<SearchIcon fontSize="small" />}
          sx={{
            opacity: "0.6",
            // padding: `0px ${theme.spacing(1)}px`,
            padding: `0px 1px`,
            fontSize: "0.8rem",
            "&:hover": {
              backgroundColor: "#f2f2f2",
            },
            "& .MuiSvgIcon-root": {
              marginRight: 1,
            },
          }}
        ></InputBase>

        <IconButton>
          <Badge badgeContent={4} color="secondary">
            <NotificationsNoneIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <Badge badgeContent={3} color="primary">
            <ChatBubbleOutlineIcon />
          </Badge>
        </IconButton>
        <IconButton>
          <PowerSettingsNewIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
