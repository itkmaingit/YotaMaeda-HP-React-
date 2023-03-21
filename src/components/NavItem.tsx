/** @jsxImportSource @emotion/react */

import {
  centerAlignStyle,
  resetLinkStyle,
  underLineAnimationStyle,
} from "@/styles/utilStyle";
import { Box, Typography } from "@mui/material";
import Link from "next/link";

type Props = {
  name: string;
  link: string;
};

export default function NavItem({ name, link }: Props) {
  return (
    <Box
      sx={{
        height: "100%",
        padding: "0 24px",
      }}
      css={[underLineAnimationStyle, centerAlignStyle]}
    >
      <Typography
        variant="h6"
        component="div"
        sx={{ display: { xs: "none", sm: "block" } }}
      >
        <Link href={link} legacyBehavior passHref>
          <a css={resetLinkStyle}>{name}</a>
        </Link>
      </Typography>
    </Box>
  );
}
