/** @jsxImportSource @emotion/react */

import TalksList from "@/components/TalksList";
import { talks } from "@/models/talks";
import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function TalksPage() {
  return (
    <Container sx={{ marginTop: "5em" }}>
      <Typography variant="h4">Talks</Typography>
      <TalksList talks={talks}></TalksList>
    </Container>
  );
}
