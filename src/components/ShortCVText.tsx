/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";
import { useMediaQueryContext } from "./provider/MediaQueryProvider";

export type Props = {
  text: string;
  period: string;
};

export default function ShortCVText({ text, period }: Props) {
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
  return (
    <Typography
      sx={{
        fontFamily: "Cormorant Garamond, serif",
        fontSize: isMobileSite ? "0.8rem" : "1.2rem",
      }}
    >
      {period} : {text}
    </Typography>
  );
}
