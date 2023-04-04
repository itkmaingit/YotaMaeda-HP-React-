/** @jsxImportSource @emotion/react */

import TalksList from "@/components/TalksList";
import { client } from "@/libs/client";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import { InferGetStaticPropsType, NextPage } from "next";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const TalksPage: NextPage<Props> = ({ talks }) => {
  return (
    <Container sx={{ marginTop: "5em" }}>
      <Typography variant="h4">Talks</Typography>
      <TalksList talks={talks}></TalksList>
    </Container>
  );
};
export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "talks",
    queries: { limit: 100 },
  });

  return {
    props: {
      talks: data.contents,
    },
    revalidate: 120,
  };
};

export default TalksPage;
