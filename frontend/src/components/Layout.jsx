import React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import ListSubheader from "@mui/material/ListSubheader";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItemButton from "@mui/material/ListItemButton";
import Header from "./Header";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import Grid from "@mui/material/Grid";
import NotesIcon from "@mui/icons-material/Notes";
import { useNavigate } from "react-router-dom";
import PerfectScrollbar from "react-perfect-scrollbar";
import "react-perfect-scrollbar/dist/css/styles.css";
import { Scrollbars } from "react-custom-scrollbars-2";
import { Sliders } from "react-feather";

const drawerWidth = 258;
const iconList = {
  color: "rgb(238, 238, 238)",
  fontSize: "20px",
  width: "20px",
  height: "20px",
  opacity: "0.5",
};
const textList = {
  padding: "0px 16px",
  fontSize: "13px",
  "& .MuiListItemText-primary": {
    color: "rgb(238, 238, 238)",
  },
};
const itemList = {
  padding: "12px 28px 12px 32px",
  fontSize: "13px",
  fontWeight: "14px",
  color: "rgb(238, 238, 238, 1)",
  opacity: 20,
};
const itemListNested = {};

function Layout(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [open, setOpen] = React.useState(true);
  const handleClick = () => {
    setOpen(!open);
  };

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const navigate = useNavigate();
  const drawer = (
    <div>
      <Toolbar
        sx={{
          background: "rgb(35, 48, 68)",
          color: "rgb(238, 238, 238)",
          margin: "0",
          lineHeight: "1.57",
        }}
      >
        <Box
          sx={{
            display: "flex",
            fontSize: "1.0625rem",
            fontWeight: "500",
            paddingLeft: "24px",
            paddingRight: "24px",
            paddingBottom: "8px",
            paddingTop: "8px",
            justifyContent: "center",
          }}
        >
          <NotesIcon
            color="primary"
            // sx={{ marginRight: "8px", width: "32px", height: "32px" }}
            sx={{ marginRight: "8px" }}
          />
          <Box sx={{ marginLeft: "4px" }}>Material App</Box>
        </Box>
      </Toolbar>

      <Divider sx={{ background: "#233042" }} />
      {/* <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}

      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          // bgcolor: "rgb(35, 48, 68)",
          color: "#e0e0e0eb",
          opacity: "1",
          "& .MuiListItemIcon-root": {
            color: "#e0e0e0eb",
            minWidth: "40px",
            opacity: 0.4,
          },
          // "&:hover": {
          //   backgroundColor: "#f2f2f2",
          // },
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          // <ListSubheader
          //   component="div"
          //   id="nested-list-subheader"
          //   sx={{
          //     bgcolor: "#233042",
          //     color: "rgb(238, 238, 238)",
          //     opacity: "0.6",
          //     fontSize: "0.696429rem",
          //     padding: " 16px  28px 4px  ",
          //     height: "17.484",
          //   }}
          // >
          //   PAGES
          // </ListSubheader>
          <Typography
            variant="subtitle2"
            sx={{
              bgcolor: "#233042",
              color: "rgb(238, 238, 238)",
              opacity: "0.6",
              fontSize: "0.696429rem",
              padding: " 16px  28px 4px  ",
              height: "17.484",
            }}
          >
            PAGES
          </Typography>
        }
      >
        <ListItemButton sx={itemList} onClick={() => navigate("/")}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Companies" />
        </ListItemButton>
        <ListItemButton sx={itemList}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Drafts" />
        </ListItemButton>
        <ListItemButton onClick={handleClick} sx={itemList}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ marginLeft: "60px" }}>
              {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ marginLeft: "60px" }}>
              {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ marginLeft: "60px" }}>
              {/* <ListItemIcon>
                <StarBorder />
              </ListItemIcon> */}
              <ListItemText primary="Starred" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <Divider />
      {/* <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#fff",
          "& .MuiIconButton-root": {
            padding: "12px",
          },
        }}
        elevation={0}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          {/* <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography> */}
          <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={3}>
              <Grid item xs="auto">
                <InputBase
                  placeholder="Search topics..."
                  startAdornment={<SearchIcon fontSize="large" />}
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
              </Grid>
              <Grid item xs={7}></Grid>
              <Grid item xs>
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
              </Grid>
            </Grid>
          </Box>
        </Toolbar>
      </AppBar>
      {/* <Header /> */}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth },
          flexShrink: { sm: 0 },
          bgcolor: "#233042",
        }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#233042",
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
              background: "#233042",
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          backgroundColor: "#f7f9fc",

          Height: "200vh",
        }}
      >
        <Toolbar />
        {props.children}
      </Box>
    </Box>
  );
}

Layout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Layout;
