/** @jsxImportSource @emotion/react */
import MyAppBar from "@/components/MyAppBar";
import { css } from "@emotion/react";
import { Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import * as React from "react";
import Footer from "./Footer";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactNode;
}

const mainContentStyle = css`
  /* width: 100%; */
  padding-bottom: 10em;
`;

export default function Layout({ window, children }: Props) {
  return (
    <>
      <MyAppBar {...window}></MyAppBar>
      <Container component="main" css={mainContentStyle}>
        <Toolbar />
        {children}
      </Container>
      <Footer></Footer>
    </>
  );
}
