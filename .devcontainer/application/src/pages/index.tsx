/** @jsxImportSource @emotion/react */
import NewsList from "@/components/NewsList";
import { useMediaQueryContext } from "@/components/provider/MediaQueryProvider";
import ShortCVText from "@/components/ShortCVText";
import { KeywordsText, shortCV } from "@/models/FirstViewItems";
import { css } from "@emotion/react";
import { Link, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { promises as fs } from "fs";
import { GetStaticProps } from "next";
import Image from "next/image";
import path from "path";
import { useInView } from "react-intersection-observer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

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
    const filePath = path.join(projectPath, fileName);
    const publicPath = "/" + filePath;
    return publicPath;
  });

  //ex) fileContents=["/images/aaa.jpeg", "/images/bbb.png",...]
  return {
    props: { fileContents },
  };
};

export default function IndexPage({ fileContents }: Props) {
  const imageStyle = css`
    position: relative;
  `;

  const coverImageStyle = css`
    object-fit: cover;
  `;

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.7,
  });

  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();

  const profileImagePath = "/images/hero.jpg";
  const profileImageStyle = css`
    object-fit: cover;
    border-radius: 50%;
    object-position: 50% 100%;
    margin: auto;
    display: block;
    margin-top: ${isMobileSite && "50px"};
  `;

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
          padding: isMobileSite ? "10px" : "100px",
        }}
        elevation={24}
      >
        <Box>
          <Image
            src={profileImagePath}
            alt="image"
            css={profileImageStyle}
            width={isMobileSite ? "200" : "300"}
            height={isMobileSite ? "200" : "300"}
          />
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              textAlign: "center",
              position: "relative",
              fontSize: isMobileSite ? "2rem" : "4rem",
              marginTop: isMobileSite ? "30px" : "60px",
            }}
          >
            Research Activities of Yota Maeda
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              textAlign: "center",
              position: "relative",
              fontSize: isMobileSite ? "1rem" : "1.5rem",
              marginTop: isMobileSite ? "50px" : "auto",
            }}
          >
            He is a mathematical scientist.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              textAlign: "center",
              position: "relative",
              fontSize: isMobileSite ? "1rem" : "1.5rem",
            }}
          >
            His research interests range from pure mathematics, such as arithmetic geometry and algebraic geometry, to their application to quantum computation and machine learning.
          </Typography>
          <Typography
            sx={{
              fontFamily: "Cormorant Garamond, serif",
              textAlign: "center",
              position: "relative",
              margin: isMobileSite ? "30px 0" : "50px 0",
              fontSize: isMobileSite ? "1.2rem" : "1.5rem",
            }}
          >
            <Link
              href="/pdfs/cv.pdf"
              sx={{ color: "text.primary", textDecoration: "underline" }}
            >
              Here is my CV.
            </Link>
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: isMobileSite ? "1rem" : "1.5rem",
            }}
          >
            Short CV
          </Typography>
          {shortCV.map((item) => (
            <ShortCVText {...item} key={item.period}></ShortCVText>
          ))}
        </Box>
        <Box
          sx={{
            position: "relative",
            margin: isMobileSite ? "100px 0" : "50px 0",
          }}
        >
          <Typography
            sx={{
              position: "relative",
              fontFamily: "Cormorant Garamond, serif",
              fontSize: isMobileSite ? "1rem" : "1.5rem",
            }}
          >
            Keywords
          </Typography>
          {KeywordsText.map((item) => (
            <ShortCVText {...item} key={item.period}></ShortCVText>
          ))}
        </Box>
      </Paper>
      <Box ref={ref} sx={{ height: "30vh", marginTop: "40px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Recent News
        </Typography>
        <NewsList></NewsList>
      </Box>
      <Box
        sx={{ height: isMobileSite ? "600px" : "1000px", marginTop: "40px" }}
      >
        <Typography
          variant="h4"
          sx={{ textAlign: "center", marginBottom: "20px" }}
        >
          Pictures
        </Typography>
        {isMobileSite && (
          <Carousel css={imageStyle} showThumbs={false}>
            {fileContents.map((fileContent) => (
              <Image
                src={fileContent}
                alt="image"
                key={fileContent}
                css={coverImageStyle}
                width="300"
                height="500"
              />
            ))}
          </Carousel>
        )}
        {!isMobileSite && (
          <Carousel css={imageStyle} showThumbs={false}>
            {fileContents.map((fileContent) => (
              <Image
                src={fileContent}
                alt="image"
                key={fileContent}
                css={coverImageStyle}
                width="500"
                height="700"
              />
            ))}
          </Carousel>
        )}
      </Box>
    </Box>
  );
}
