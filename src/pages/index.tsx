/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";

import theme from "@/theme";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";

const profilePictureUrl = "images/yota.jpg";

const IndexPage = () => {
  const containerStyle = css`
    display: flex;
    /* justify-content: center; */
  `;

  const heroSectionStyle = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 100vh; */
    /* width: ; */
    background-color: #f7f7f7;
  `;

  const profilePictureStyle = css`
    width: 200px;
    height: 200px;
    border-radius: 50%;
    margin: 24px;
  `;

  const statusText = css`
    color: ${theme.palette.grey.A400};
  `;

  const keywordText = css`
    color: ${theme.palette.primary.light};
  `;

  const borderColor = css`
    border-color: #000000;
    border-width: 1px;
    border-style: solid;
    border-radius: 5px;
    padding: 5px;
  `;

  // const borderStyle = css`
  //   border-color: ${theme.palette.primary.main};
  //   border-width: 1px;
  //   border-style: solid;
  // `;

  const snsButtonStyle = css`
    margin: 8px;
  `;

  return (
    <Grid container alignItems="center" justifyContent="center">
      <Grid item xs={12}>
        <Box css={heroSectionStyle}>
          <Box textAlign="center">
            <img
              src={profilePictureUrl}
              css={profilePictureStyle}
              alt="profile"
            />
            <Typography variant="h4" component="h1">
              Yota Maeda
            </Typography>
            <Typography variant="body2" css={statusText}>
              Ph.D student at Kyoto University
            </Typography>
            <Typography variant="body2" css={statusText} gutterBottom>
              Researcher at Sony Group Corporation
            </Typography>
            <Typography variant="body1">
              This is a Yota Maeda Official site.
            </Typography>
            <Typography variant="body1" gutterBottom>
              I study Arithmetic geometry.
            </Typography>
            <Box css={borderColor}>
              <Typography variant="body2" css={keywordText} gutterBottom>
                Keywords: Shimura varieties, modular forms, algebraic cycles,
                Kodaira dimensions, compactifications
              </Typography>
            </Box>
            <List>
              <ListItem>
                <ListItemIcon>
                  <EmailIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Button
                      // TODO: Insert Yota Email address
                      href="mailto:youremail@example.com"
                      color="primary"
                      size="large"
                    >
                      amepura@gmail.com
                    </Button>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Button
                      // TODO: Insert Yota Github
                      href="https://github.com/yourusername"
                      color="primary"
                      size="large"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      github
                    </Button>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <TwitterIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Button
                      // TODO: Insert Yota Twitter
                      href="https://twitter.com/yourusername"
                      color="primary"
                      size="large"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      twitter
                    </Button>
                  }
                />
              </ListItem>
            </List>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default IndexPage;
