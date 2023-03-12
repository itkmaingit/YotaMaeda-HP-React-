// エラーの出ないコード
import fs from "fs";
import * as React from "react";

const Example = (props: React.ReactElement) => {
  return (
    <div>
      <code>fs</code> モジュールでのエラーのサンプル
    </div>
  );
};

export default Example;

export async function getStaticProps() {
  // フォルダのパス
  const folderPath = "public/images/";

  // フォルダ内のファイル名を取得
  const fileNames = fs.readdirSync(folderPath);

  // ファイルの中身を配列に保存
  const fileContents: string[] = [];
  fileNames.forEach((fileName) => {
    const filePath = folderPath + fileName;
    fileContents.push(filePath);
  });
  return {
    props: { fileContents },
  };
}
