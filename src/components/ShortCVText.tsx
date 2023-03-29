/** @jsxImportSource @emotion/react */

import { Typography } from "@mui/material";

export type Props = {
  text: string;
  period: string;
};

export default function ShortCVText({ text, period }: Props) {
  return (
    <Typography
      variant="h6"
      sx={{
        fontFamily: "Cormorant Garamond, serif",
      }}
    >
      {period} : {text}
    </Typography>
  );
}
