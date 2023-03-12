/** @jsxImportSource @emotion/react */
import * as React from "react";
import MyAppBar from "./MyAppBar";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

export default function Layout(props: Props) {
  return <MyAppBar {...props}></MyAppBar>;
}
