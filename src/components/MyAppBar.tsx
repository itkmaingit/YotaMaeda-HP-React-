/** @jsxImportSource @emotion/react */
import MenuIcon from "@mui/icons-material/Menu";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

import { navItems } from "@/models/navItems";
import {
  centerAlignStyle,
  resetLinkStyle,
  underLineAnimationStyle,
} from "@/styles/utilStyle";
import { Container } from "@mui/system";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;
// const navItems = ["Home", "About", "Contact"];

export default function MyAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton
              component={Link}
              href={item.link}
              sx={{ textAlign: "center" }}
            >
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex", padding: 0 }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar sx={{ height: "64px" }}>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
              padding: 0,
              height: "100%",
              margin: 0,
            }}
          >
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ mr: 2, display: { sm: "none" } }}
            >
              <MenuIcon />
            </IconButton>
            <Box css={centerAlignStyle} sx={{ flex: "1 1 200px" }}>
              <Box
                sx={{
                  height: "100%",
                  padding: "0 16px",
                  cursor: "pointer",
                }}
                css={[centerAlignStyle]}
              >
                <Typography
                  variant="h5"
                  component="div"
                  sx={{ display: { xs: "none", sm: "block" } }}
                >
                  <Link href="/" legacyBehavior passHref>
                    <a css={resetLinkStyle}>Y.Maeda</a>
                  </Link>
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                height: "100%",
                flex: "1 1 200px",
              }}
            >
              {navItems.map((item) => (
                <Box
                  sx={{
                    height: "100%",
                    padding: "0 16px",
                  }}
                  css={[underLineAnimationStyle, centerAlignStyle]}
                  key={item.name}
                >
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{ display: { xs: "none", sm: "block" } }}
                  >
                    <Link href={item.link} legacyBehavior passHref>
                      <a css={resetLinkStyle}>{item.name}</a>
                    </Link>
                  </Typography>
                </Box>
              ))}
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      <Box component="nav">
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
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
