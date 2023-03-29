/** @jsxImportSource @emotion/react */

import {
  centerAlignStyle,
  resetLinkStyle,
  underLineAnimationStyle,
} from "@/styles/utilStyle";
import { Box, Typography } from "@mui/material";
import Link from "next/link";
import { useMediaQueryContext } from "./provider/MediaQueryProvider";

type Props = {
  name: string;
  link: string;
};

export default function NavItem({ name, link }: Props) {
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
  return (
    <Box
      sx={{
        height: "100%",
        padding: "0 24px",
      }}
      css={[underLineAnimationStyle, centerAlignStyle]}
    >
      <Typography
        component="div"
        sx={{ fontSize: isMobileSite ? "1rem" : "1.6rem" }}
      >
        <Link href={link} legacyBehavior passHref>
          <a css={resetLinkStyle}>{name}</a>
        </Link>
      </Typography>
    </Box>
  );
}
