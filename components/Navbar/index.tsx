import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Fade,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { useTheme } from "@mui/material/styles";

const NavBar = () => {
  const theme = useTheme();
  const drawerWidth = 240;
  const [mobileOpen, setMobileOpen] = useState(false);
  const isMobileScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navList = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Blog", link: "/blog" },
    { id: 4, name: "Projects", link: "/projects" },
    { id: 5, name: "News-Feed", link: "/newsboard" },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Fade in>
      <Box
        sx={{
          bgcolor: "#000",
          height: "100%",
          width: "400px",
          p: "1rem 0.87rem",
        }}
      >
        <Box display="flex" justifyContent="space-between">
          <Typography fontSize={20} marginLeft={1.5} fontWeight="bold">
            Nikhil
          </Typography>
          <IconButton onClick={handleDrawerToggle}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider sx={{ color: "white" }} />
        <List>
          {navList.map((item) => (
            <ListItem key={item.id} disablePadding>
              <ListItemButton
                component="a"
                href={item.link}
                onClick={handleDrawerToggle}
                sx={{ cursor: "pointer" }}
              >
                <ListItemText primary={item.name} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Fade>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <Fade in={true}>
        <AppBar
          position="static"
          component="nav"
          color="transparent"
          elevation={0}
          sx={{ mb: `${!isMobileScreen ? 1 : 0}` }}
        >
          <Toolbar>
            <IconButton
              onClick={handleDrawerToggle}
              edge="start"
              color="inherit"
              aria-label="open-drawer"
              sx={{ display: { sm: "none" } }}
            >
              <MenuIcon sx={{ fontSize: 30 }} />
            </IconButton>
            <Typography
              variant="h6"
              component="div"
              sx={{
                flexGrow: 1,
                display: { xs: "none", sm: "block" },
              }}
            >
              Nikhil
            </Typography>
            <Box
              sx={{ display: { xs: "none", sm: "flex" } }}
              alignItems="center"
            >
              {navList.map((item) => (
                <Box
                  sx={{
                    display: { xs: "none", sm: "flex" },
                  }}
                  component="a"
                  key={item.id}
                  href={item.link}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 500,
                      fontSize: "0.875rem",
                      textTransform: "uppercase",
                      marginRight: "0.875rem",
                      "&:after": {
                        display: "block",
                        content: '""',
                        borderBottom: "2px solid #DC143C",
                        transform: "scaleX(0)",
                        transformOrigin: "0% 50%",
                        transition: `transform ${theme.transitions.duration.short}ms ease-in-out`,
                      },
                      "&:hover:after": {
                        transform: "scaleX(1)",
                      },
                    }}
                  >
                    {item.name}
                  </Typography>
                </Box>
              ))}
              <Box
                component="a"
                href="https://github.com/Nirvana55"
                sx={{ cursor: "pointer" }}
              >
                <GitHubIcon sx={{ color: "white" }} />
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </Fade>

      <Box sx={{ margin: 0 }} component="nav">
        <Drawer
          open={mobileOpen}
          onClose={handleDrawerToggle}
          variant="temporary"
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawerPaper": {
              boxSizing: "border-box",
              width: `${drawerWidth}`,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default NavBar;
