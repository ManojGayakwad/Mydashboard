import React, { useState } from "react";
import "./styles.css";
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
import CssBaseline from '@mui/material/CssBaseline';

import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import AddIcon from "@mui/icons-material/Add";
// import clsx from "clsx";
import logo from "./danalogo1.png";

import { Link } from "react-router-dom";

import { Menu, MenuItem, Hidden } from "@material-ui/core";

import {
  PeopleOutlined,
  HomeOutlined,
  NoteAddOutlined,
  WorkOutline,
  PersonOutlined
} from "@material-ui/icons";

import List from "@material-ui/core/List";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemText from "@material-ui/core/ListItemText";
import Collapse from "@material-ui/core/Collapse";
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { isTemplateExpression } from "typescript";


const drawerWidth = 240;
const menuId = "primary-search-account-menu";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    overflow: "hidden"
  },
  
  expandIcon: {
    marginRight: '4rem', // decrease the margin as needed
  },
  expandLessIcon: {
    marginRight: '4rem', // decrease the margin as needed
  },
  link: {
    textDecoration: "none",
    color: theme.palette.text.primary
  },
  appBar: {
    marginLeft: drawerWidth,
    [theme.breakpoints.up("sm")]: {
      width: `calc(100% - ${drawerWidth}px)`
      // transition: theme.transitions.create(["margin", "width"], {
      //   easing: theme.transitions.easing.sharp,
      //   duration: theme.transitions.duration.leavingScreen
    }
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
    flexShrink: 0,
    overflow: "hidden" 
  },
  drawerPaper: {
    width: drawerWidth
  },
  nested: {
    paddingLeft: theme.spacing(4)
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
  },
  spacer: {
    flexGrow: 1
  }
}));

const data = [
  {
    text: "Home",
    path: "/Home",
    icon: <HomeOutlined />
  },
  {
    text: "Product",
    icon: <NoteAddOutlined />,
    subMenu: [
      {
        text: "NCR",
        path: "/NCR",
        icon: <AddIcon />
      },
      {
        text: "Observation",
        path: "/Observation",
        icon: <AddIcon />
      }
    ]
  },
  {
    text: "Task",
    path: "/Task",
    icon: <WorkOutline />
  },
  {
    text: "Users",
    path: "/Users",
    icon: <PeopleOutlined />
  },
  {
    text: "Profile",
    path: "/Profile",
    icon: <PersonOutlined />
  }
];

function NavigationBar() {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [anchorEl, setAnchorEl] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const [selectedItem, setSelectedItem] = useState();

  const handleItemClick = (item) => {
    setSelectedItem(isTemplateExpression);
  }

  const handleClick = () => {
    setOpen(!open);
  };
  
  const getSubList = (subMenu) => {
    return subMenu.map((item, index) => (
      <Link to={item.path} className={classes.link}>
      <ListItem
        button
        key={index}
        className={classes.nested}

      >
        <ListItemIcon>{item.icon}</ListItemIcon> 
        <ListItemText primary={item.text} />
      </ListItem>
      </Link>
    ));
  };



  const getList = (data) => {
    return (
      <div
        style={{ width: 300, marginTop: "100px" }}
        // onClick={() => setOpen(false)}
      >
        {data.map((item, index) => {
         if (item.subMenu) {
          return (
            <React.Fragment key={index}>
              <ListItem button onClick={handleClick}>
              <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
                {open ?<ExpandLess className={classes.expandIcon}/> : <ExpandMore className={classes.expandLessIcon}/>}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                     component="nav"
                    aria-labelledby="nested-list-subheader" disablePadding>
                  {getSubList(item.subMenu)}
                </List>
              </Collapse>
            </React.Fragment>
          );
          }else{
            return (
              <Link to={item.path} className={classes.link}>
              <ListItem button key={index} component="a">
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItem>
              </Link>
            );
          }
        })}
        </div>
    )
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

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        className={classes.drawer}
        variant="permanent"
        anchor="left"
        // open={open}
        classes={{
          paper: classes.drawerPaper
        }}
      >
        {/* <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div> */}
        {/* <div className="{classes.toolbar}" /> */}
        <List>{getList(data)}</List>
      </Drawer>

      <Divider />
      <AppBar
        position="fixed"
        className={classes.appBar}
        // className={clsx(classes.appBar, {
        //   [classes.appBarShift]: 1
        // })}
      >
        <Toolbar>
          {/* Logo */}
          <img src={logo} alt="logo" />

          {/* NotificationIcon And profile Avatar */}
          <Hidden xsDown>
            <IconButton
              style={{ marginLeft: "240px" }}
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
              <MenuItem onClick={() => handleProfileClick()}>
                My Profile
              </MenuItem>
              <MenuItem onClick={() => handleLogoutClick()}>Logout</MenuItem>
            </Menu>

            <div className={classes.spacer}>
              <Avatar
                src="/profile.png"
                style={{
                  marginLeft: "-63rem",
                  marginTop: "-20px",
                  position: "fixed"
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  color: "text.white",
                  fontWeight: "600",
                  marginLeft: "-60rem",
                  marginTop: "-15px",
                  position: "fixed"
                }}
              >
                {localStorage.getItem("fname") +
                  " " +
                  localStorage.getItem("lname")}
              </Typography>
            </div>
          </Hidden>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavigationBar;
