/** @jsxImportSource @emotion/react */
import ShortCVText from "@/components/ShortCVText";
import { shortCV } from "@/models/shortCV";
import { css } from "@emotion/react";
import { Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { motion } from "framer-motion";
import { promises as fs } from "fs";
import { GetStaticProps } from "next";
import Image from "next/image";
import path from "path";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import SectionSeparater from "../components/SectionSeparater";

type Props = {
  fileContents: string[];
};
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

export default function IndexPage({ fileContents }: Props) {
  const profilePictureUrl = "/images/background-image.jpg";

  const heroTextStyle = css`
    text-align: center;
  `;

  const imageStyle = css`
    position: relative;
  `;

  const testImageStyle = css`
    object-fit: cover;
  `;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  const AnimationSeparater = motion(SectionSeparater);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Paper
        sx={{
          width: "100%",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "50px 0",
        }}
        elevation={24}
      >
        <Box
          sx={{
            flex: "1 1 60%",
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              textAlign: "center",
              top: "40%",
              position: "relative",
            }}
          >
            Yota Maeda's Official Site
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              textAlign: "center",
              top: "45%",
              position: "relative",
            }}
          >
            I am a mathematician and also a researcher at Sony Group
            Corporation.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              textAlign: "center",
              top: "45%",
              position: "relative",
              marginTop: "30px",
            }}
          >
            <Link
              href="https://ymaeda-math.github.io/CV.pdf"
              sx={{ color: "text.primary", textDecoration: "underline" }}
            >
              Here is my CV.
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            width: "70%",
            marginTop: "0",
            flex: "1 1 40%",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              position: "relative",
              fontFamily: "Cormorant Garamond, serif",
            }}
          >
            Short CV
          </Typography>
          {shortCV.map((item) => (
            <ShortCVText {...item}> ref={ref}</ShortCVText>
          ))}
        </Box>
      </Paper>
      <Box ref={ref} sx={{ height: "30vh" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Recent News
        </Typography>

        <Paper
          sx={{
            marginTop: "20px",
            width: "100%",
            height: "20vh",
            backgroundColor: "#dddddd",
          }}
        ></Paper>
      </Box>
      <Box sx={{ height: "1000px" }}>
        <Carousel css={imageStyle}>
          {fileContents.map((fileContent) => (
            <Image
              src={fileContent}
              alt="image"
              key={fileContent}
              css={testImageStyle}
              width="500"
              height="700"
            />
          ))}
        </Carousel>
      </Box>
    </Box>
  );
}
