/** @jsxImportSource @emotion/react */
import { centerAlignStyle } from "@/styles/utilStyle";
import { css } from "@emotion/react";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ScienceIcon from "@mui/icons-material/Science";
import {
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const footerBoxStyle = css`
  width: auto;
  height: 500px;
  background-color: #dddddd;
`;

export default function Footer() {
  return (
    <Box css={[footerBoxStyle, centerAlignStyle]}>
      <Typography sx={{ color: "primary.main" }}>Contact</Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <EmailIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Button
                href="mailto:y.maeda.math@gmail.com"
                color="primary"
                size="large"
                style={{ textTransform: "none" }}
              >
                y.maeda.math at gmail.com
              </Button>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FacebookIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Button
                href="https://www.facebook.com/people/Yota-Maeda/pfbid0c6h7GUX5QRQo1FrV5dtkmp4Lez84s3HVobtL311v24pRogcwCbPV8XEh37k2RRHel/"
                color="primary"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textTransform: "none" }}
              >
                Facebook
              </Button>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <ScienceIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Button
                href="https://researchmap.jp/yota_maeda?lang=en"
                color="primary"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textTransform: "none" }}
              >
                Researchmap
              </Button>
            }
          />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <LinkedInIcon />
          </ListItemIcon>
          <ListItemText
            primary={
              <Button
                href="https://jp.linkedin.com/in/yota-maeda"
                color="primary"
                size="large"
                target="_blank"
                rel="noopener noreferrer"
                style={{ textTransform: "none" }}
              >
                Linkedin
              </Button>
            }
          />
        </ListItem>
      </List>
      <Typography sx={{ color: "primary.main", marginTop: "30px" }}>
        @2023 Yota Maeda
      </Typography>
      <Typography sx={{ color: "primary.main", margin: "30px" }}>
        This website was created by my younger brother, Itsuki Maeda.
      </Typography>
    </Box>
  );
}
