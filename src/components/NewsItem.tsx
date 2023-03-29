/** @jsxImportSource @emotion/react */

import { NewsText } from "@/models/news";
import { Typography } from "@mui/material";
import { useMediaQueryContext } from "./provider/MediaQueryProvider";

export default function NewsItem({ text }: NewsText) {
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
  return (
    <Typography
      sx={{ color: "primary.main", fontSize: isMobileSite ? "1rem" : "1.5rem" }}
    >
      {text}
    </Typography>
  );
}
