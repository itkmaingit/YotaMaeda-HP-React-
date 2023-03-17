/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";

import theme from "@/theme";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

const profilePictureUrl = "/images/background-image.jpg";

const IndexPage = () => {
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

  const containerStyle = css`
    position: relative;
    width: 300px;
    /* height: 300px; */
  `;

  const absoluteBoxStyle = css`
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: red;
    width: 50%;
    height: 50%;
  `;

  const textStyle = css`
    position: relative;
    /* top: 100px; */
  `;

  const snsButtonStyle = css`
    margin: 8px;
  `;

  const heroSectionStyle = css`
    position: relative;
    width: 100%;
    height: 50vh;
  `;

  const heroImageStyle = css`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  `;

  const heroTextStyle = css`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
  `;

  const sampleStyle = css`
    position: relative;
    left: 0px;
    width: 100%;
    height: 50vh;
  `;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box css={sampleStyle}>
        <Image
          src={profilePictureUrl}
          alt="Hero Image"
          layout="fill"
          objectFit="cover"
        />
        <Typography variant="h3" css={heroTextStyle}>
          Yota Maeda's Official site
        </Typography>
      </Box>
      <Box
        sx={{
          position: "relative",
          width: "100%",
          height: "30vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "gray",
        }}
      >
        <Typography>下向き矢印</Typography>
      </Box>
      <Box>
        <Grid container>
          <Grid item md={6}>
            <Image
              src={profilePictureUrl}
              alt="Hero Image"
              width={500}
              height={300}
            />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Papersのリンク</Typography>
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Typography>Talksのリンク</Typography>
          </Grid>
          <Grid item>
            <Image
              src={profilePictureUrl}
              alt="Hero Image"
              width={500}
              height={300}
            />
          </Grid>
        </Grid>
      </Box>
    </Box>

    // <Grid container alignItems="center" justifyContent="center">
    //   <Grid item xs={12}>
    //     <Box css={heroSectionStyle}>
    //       <Box textAlign="center">
    //         <Image
    //           src={profilePictureUrl}
    //           width=
    //           alt="profile"
    //           layout="intrinsic"
    //         />
    //         </ Box>
    //         <Box textAlign="center">
    //         <Typography variant="h4" component="h1">
    //           Yota Maeda
    //         </Typography>
    //         <Typography variant="body2" css={statusText}>
    //           Ph.D student at Kyoto University
    //         </Typography>
    //         <Typography variant="body2" css={statusText} gutterBottom>
    //           Researcher at Sony Group Corporation
    //         </Typography>
    //         <Typography variant="body1">
    //           This is a Yota Maeda Official site.
    //         </Typography>
    //         <Typography variant="body1" gutterBottom>
    //           I study Arithmetic geometry.
    //         </Typography>
    //         <Box css={borderColor}>
    //           <Typography variant="body2" css={keywordText} gutterBottom>
    //             Keywords: Shimura varieties, modular forms, algebraic cycles,
    //             Kodaira dimensions, compactifications
    //           </Typography>
    //         </Box>
    //         <List>
    //           <ListItem>
    //             <ListItemIcon>
    //               <EmailIcon />
    //             </ListItemIcon>
    //             <ListItemText
    //               primary={
    //                 <Button
    //                   // TODO: Insert Yota Email address
    //                   href="mailto:youremail@example.com"
    //                   color="primary"
    //                   size="large"
    //                 >
    //                   amepura@gmail.com
    //                 </Button>
    //               }
    //             />
    //           </ListItem>
    //           <ListItem>
    //             <ListItemIcon>
    //               <GitHubIcon />
    //             </ListItemIcon>
    //             <ListItemText
    //               primary={
    //                 <Button
    //                   // TODO: Insert Yota Github
    //                   href="https://github.com/yourusername"
    //                   color="primary"
    //                   size="large"
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                 >
    //                   github
    //                 </Button>
    //               }
    //             />
    //           </ListItem>
    //           <ListItem>
    //             <ListItemIcon>
    //               <TwitterIcon />
    //             </ListItemIcon>
    //             <ListItemText
    //               primary={
    //                 <Button
    //                   // TODO: Insert Yota Twitter
    //                   href="https://twitter.com/yourusername"
    //                   color="primary"
    //                   size="large"
    //                   target="_blank"
    //                   rel="noopener noreferrer"
    //                 >
    //                   twitter
    //                 </Button>
    //               }
    //             />
    //           </ListItem>
    //         </List>
    //       </Box>
    //     </Box>
    //   </Grid>
    // </Grid>
  );
};

export default IndexPage;
