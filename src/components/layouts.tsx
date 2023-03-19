/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import * as React from "react";
import Footer from "./Footer";
import MyAppBar from "./MyAppBar";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

const mainContentStyle = css`
  width: 100%;
  padding-bottom: 10em;
`;

export default function Layout({ window, children }: Props) {
  return (
    <React.Fragment>
      <MyAppBar {...window}></MyAppBar>
      <Box component="main" css={mainContentStyle}>
        <Toolbar />
        {children}
      </Box>
      <Footer></Footer>
    </React.Fragment>
  );
}
