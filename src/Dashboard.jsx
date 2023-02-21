import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@mui/material/Typography";
import AccountCircle from "@mui/icons-material/AccountCircle";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@mui/icons-material/Close";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
// import Divider from "@material-ui/core/Divider";
import AddIcon from "@mui/icons-material/Add";
import clsx from "clsx";
import logo from "./danalogo1.png";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
import { Link } from "react-router-dom";

import { Menu, MenuItem } from "@material-ui/core";

import {
  PeopleOutlined,
  HomeOutlined,
  NoteAddOutlined,
  WorkOutline,
  PersonOutlined
} from "@material-ui/icons";

const drawerWidth = 240;
const menuId = "primary-search-account-menu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.common.main,
    position: "fixed"
  },

  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  hide: {
    display: "none"
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  drawerPaper: {
    width: drawerWidth
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: "flex-end"
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    marginLeft: -drawerWidth
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    }),
    marginLeft: 0
  }
}));

const data = [
  {
    name: "Home",
    icon: <HomeOutlined />
  },
  { name: "Product", icon: <NoteAddOutlined />, path: "/page1" },
  { name: "NCR", icon: <AddIcon />, path: "/page2" },
  { name: "Observation", icon: <AddIcon />, path: "/page3" },
  { name: "Task", icon: <WorkOutline /> },
  { name: "Users", icon: <PeopleOutlined /> },
  { name: "Profile", icon: <PersonOutlined /> }
];

function NavigationBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const getList = () => {
    return (
      <div style={{ width: 250 }} onClick={() => setOpen(false)}>
        {data.map((item, index) => (
          <Link to={item.path} className={classes.link}>
            <ListItem button key={index}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItem>
          </Link>
        ))}
      </div>
    );
    // return (
    //   <div>
    //     <Button onClick={() => setOpen(true)}>Click me</Button>
    //     <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
    //       {getList()}
    //     </Drawer>
    //   </div>
    // );
  };

  const handleProfileClick = () => {
    // handle my profile click
  };

  const handleLogoutClick = () => {
    // handle logout click
  };

  const handleMenuOpen = () => {
    setAnchorEl(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };
  // const handleProfileMenuOpen = () => {
  //   setOpen(true);
  // };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <Drawer open={open} anchor={"left"} onClose={() => setOpen(false)}>
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        {getList()}
      </Drawer>

      {/* <Divider /> */}
      <AppBar
        position="fixed"
        // className={clsx(classes.appBar, {
        //   [classes.appBarShift]: open
        // })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={() => setOpen(true)}
            edge="start"
            // className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>

          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* NotificationIcon And profile Avatar */}
          <IconButton
            style={{ marginLeft: "400px" }}
            aria-label="show new notifications"
            color="inherit"
          >
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleMenuOpen}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right"
            }}
            open={isMenuOpen}
            onClose={() => handleMenuClose(false)}
          >
            <MenuItem onClick={() => handleProfileClick()}>My Profile</MenuItem>
            <MenuItem onClick={() => handleLogoutClick()}>Logout</MenuItem>
          </Menu>

          <div>
            <Avatar
              src="/profile.png"
              style={{ marginLeft: "-67rem", marginTop: "2px" }}
            />
            <Typography
              variant="h6"
              sx={{
                color: "text.white",
                fontWeight: "600",
                marginLeft: "-64rem",
                marginTop: "-2.2rem"
              }}
            >
              {localStorage.getItem("fname") +
                " " +
                localStorage.getItem("lname")}
            </Typography>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
