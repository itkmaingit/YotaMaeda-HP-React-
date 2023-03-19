/** @jsxImportSource @emotion/react */
import { centerAlignStyle } from "@/styles/utilStyle";
import { css } from "@emotion/react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { promises as fs } from "fs";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import path from "path";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import SectionSeparater from "../components/SectionSeparater";

export const getStaticProps: GetStaticProps<{
  fileContents: string[];
}> = async () => {
  // フォルダのパス
  const folderPath = path.join("public", "images");
  const projectPath = path.join("images");

  // フォルダ内のファイル名を取得
  const fileNames = await fs.readdir(folderPath);

  // ファイルの中身を配列に保存
  const fileContents = fileNames.map((fileName) => {
    const filePath = path.join(folderPath, fileName);
    const relativePath = path.relative(projectPath, filePath);
    const publicPath = "/" + relativePath;
    console.log(publicPath);
    return publicPath;
  });

  //ex) fileContents=["/images/aaa.jpeg", "/images/bbb.png",...]
  return {
    props: { fileContents },
  };
};

const IndexPage: NextPage<{ fileContents: string[] }> = ({ fileContents }) => {
  const profilePictureUrl = "/images/background-image.jpg";

  const heroTextStyle = css`
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #fff;
    text-align: center;
  `;

  const firstViewStyle = css`
    position: relative;
    left: 0px;
    width: 100%;
    height: 50vh;
  `;

  const backGroundImageStyle = css`
    object-fit: cover;
  `;

  const containImageStyle = css`
    object-fit: contain;
  `;

  const testImageStyle = css`
    object-fit: cover;
    /* position: relative !important; */
  `;

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Box css={firstViewStyle}>
        <Image
          src={profilePictureUrl}
          alt="Hero Image"
          fill
          css={backGroundImageStyle}
        />
        <Typography variant="h3" css={heroTextStyle}>
          Yota Maeda's Official site
        </Typography>
      </Box>
      <SectionSeparater text="他ページへのリンク"></SectionSeparater>

      <Box>
        <Grid container>
          <Grid item md={6} sx={{ position: "relative", height: "10em" }}>
            <Image
              src={profilePictureUrl}
              alt="Hero Image"
              fill
              css={testImageStyle}
            />
          </Grid>
          <Grid
            item
            md={6}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
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
          <Grid item md={6} sx={{ position: "relative", height: "10em" }}>
            <Image
              src={profilePictureUrl}
              alt="Hero Image"
              fill
              css={testImageStyle}
            />
          </Grid>
        </Grid>
      </Box>
      <Box sx={{ position: "relative", width: "50vw" }}>
        <Image
          src={profilePictureUrl}
          alt="Hero Image"
          fill
          css={testImageStyle}
        />
      </Box>

      <SectionSeparater text="Pictures"></SectionSeparater>

      <Carousel>
        {fileContents.map((fileContent) => (
          <Image src={fileContent} alt="image" width="500" height="500" />
        ))}
      </Carousel>

      <SectionSeparater text="Blog"></SectionSeparater>
      <Box
        sx={{ height: "20em", backgroundColor: "grey" }}
        css={centerAlignStyle}
      >
        <Typography variant="h4" sx={{ color: "white" }}>
          ブログ
        </Typography>
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
