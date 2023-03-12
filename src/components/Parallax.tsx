import { Container } from "@mui/material";
import * as React from "react";
import styles from "./parallax.module.css";

interface Props {
  children: React.ReactElement;
}

export default function ParallaxComponent(props: Props) {
  const { children } = props;

  return (
    <Container
      style={{
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "1000px",
      }}
      className={styles.parallax}
    >
      {children}
    </Container>
  );
}
