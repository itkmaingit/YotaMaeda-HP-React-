import { promises as fs } from "fs";
import { GetStaticProps, NextPage } from "next";
import Image from "next/image";
import path from "path";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";

const test: string = "https://source.unsplash.com/random";
const PicturesPage: NextPage<{ fileContents: string[] }> = ({
  fileContents,
}) => {
  return (
    <Carousel>
      {fileContents.map((fileContent) => (
        <Image src={fileContent} alt="image" />
      ))}
    </Carousel>
  );
};

export default PicturesPage;

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
    console.log(filePath);
    return filePath;
  });
  return {
    props: { fileContents },
  };
};
