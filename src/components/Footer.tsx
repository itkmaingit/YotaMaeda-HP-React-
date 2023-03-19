/** @jsxImportSource @emotion/react */
import UnderlineLink from "@/components/UnderlineAnimationLink";
import { centerAlignStyle } from "@/styles/utilStyle";
import { css } from "@emotion/react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

const footerBoxStyle = css`
  width: auto;
  height: 17em;
  background-color: #51c8ff;
`;

export default function Footer() {
  return (
    <Box css={[footerBoxStyle, centerAlignStyle]}>
      <Typography>
        <UnderlineLink link="/" text="Home"></UnderlineLink>
      </Typography>
      <Typography>@2023 Yota Maeda</Typography>
    </Box>
  );
}
