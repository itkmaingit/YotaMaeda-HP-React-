/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

type Props = {
  icon?: React.ReactNode;
  text: string;
};
export default function SectionSeparater({
  icon = <ExpandMoreIcon />,
  text,
}: Props) {
  const separaterBoxStyle = css`
    position: relative;
    width: 100%;
    height: 30vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #d6d6d6;
  `;
  return (
    <Box css={separaterBoxStyle}>
      {icon}
      <Typography>{text}</Typography>
    </Box>
  );
}
