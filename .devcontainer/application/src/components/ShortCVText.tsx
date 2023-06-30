/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";
import { useMediaQueryContext } from "./provider/MediaQueryProvider";

export type Props = {
  text: React.ReactNode;
  period: string;
};

export default function ShortCVText({ text, period }: Props) {
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
  return (
    <Typography
      sx={{
        fontFamily: "Cormorant Garamond, serif",
        fontSize: "1.2rem",
      }}
    >
      {period} : {text}
    </Typography>
  );
}
