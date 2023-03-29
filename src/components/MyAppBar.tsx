/** @jsxImportSource @emotion/react */
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import * as React from "react";

import { navItems } from "@/models/navItems";
import { centerAlignStyle, resetLinkStyle } from "@/styles/utilStyle";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import NavItem from "./NavItem";

interface Props {
  window?: () => Window;
}

const drawerWidth = 240;

export default function MyAppBar(props: Props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Research Activities of Yota Maeda
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

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  });

  const AnimationBox = motion(Box);

  return (
    <Box
      sx={{
        display: "flex",
        padding: 0,
        backgroundColor: "background.default",
        flexDirection: "column",
        justifyContent: "center",
      }}
      ref={ref}
    >
      <CssBaseline />
      <Box
        sx={{
          paddingTop: "30px",
          paddingBottom: "20px",
        }}
        css={centerAlignStyle}
      >
        <Typography
          variant="h4"
          component="div"
          sx={{ display: { xs: "none", sm: "block" } }}
        >
          <Link href="/" legacyBehavior passHref>
            <a css={resetLinkStyle}>Research Activities of Yota Maeda</a>
          </Link>
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          padding: 0,
          height: "64px",
          margin: "auto",
          justifyContent: "center",
          maxWidth: "960px",
          width: "60vw",
          zIndex: "999",
        }}
      >
        {navItems.map((item) => (
          <NavItem key={item.name} {...item}></NavItem>
        ))}
      </Box>
      {!inView && (
        <AnimationBox
          sx={{
            backgroundColor: "primary.main",
            zIndex: "999",
            display: "flex",
            padding: 0,
            height: "64px",
            justifyContent: "center",
            position: "fixed",
            width: "100%",
            top: "0",
          }}
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            sx={{
              justifyContent: "center",
              display: "flex",
              maxWidth: "960px",
              width: "60vw",
            }}
          >
            <NavItem name="Home" link="/"></NavItem>
            {navItems.map((item) => (
              <NavItem key={item.name} {...item}></NavItem>
            ))}
          </Box>
        </AnimationBox>
      )}
    </Box>
  );
}
