/** @jsxImportSource @emotion/react */
import PapersList from "@/components/PapersList";
import { useMediaQueryContext } from "@/components/provider/MediaQueryProvider";
import { client } from "@/libs/client";
import { Paper } from "@/models/papers";
import { centerAlignStyle } from "@/styles/utilStyle";
import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import { InferGetStaticPropsType, NextPage } from "next";
import * as React from "react";

type Props = InferGetStaticPropsType<typeof getStaticProps>;

const PapersPage: NextPage<Props> = ({ papers, preprints, proceedings }) => {
  const [state, setState] = React.useState({
    isPapers: true,
    isPreprints: true,
    isProceedings: true,
  });

  const [startNumber, setStartNumber] = React.useState({
    preprints: papers.length + 1,
    proceedings: papers.length + preprints.length + 1,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  React.useEffect(() => {
    setStartNumber({
      preprints: state.isPapers ? papers.length + 1 : 1,
      proceedings: state.isPapers
        ? state.isPreprints
          ? papers.length + preprints.length + 1
          : papers.length + 1
        : state.isPreprints
        ? preprints.length + 1
        : 1,
    });
  }, [state]);

  const { isPapers, isPreprints, isProceedings } = state;
  const { isMobileSite } = useMediaQueryContext();
  return (
    <>
      <Container css={centerAlignStyle}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">
            <Typography variant="h6" sx={{ color: "text.primary" }}>
              Display Content
            </Typography>
          </FormLabel>
          <FormGroup
            sx={{
              display: "flex",
            }}
            row={!isMobileSite}
          >
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPapers}
                  onChange={handleChange}
                  name="isPapers"
                  sx={{
                    color: "text.primary",
                    "&.Mui-checked": {
                      color: "text.primary",
                    },
                  }}
                />
              }
              label="Papers"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPreprints}
                  onChange={handleChange}
                  name="isPreprints"
                  sx={{
                    color: "text.primary",
                    "&.Mui-checked": {
                      color: "text.primary",
                    },
                  }}
                />
              }
              label="Preprints"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={isProceedings}
                  onChange={handleChange}
                  name="isProceedings"
                  sx={{
                    color: "text.primary",
                    "&.Mui-checked": {
                      color: "text.primary",
                    },
                  }}
                />
              }
              label="Proceedings (no peer view)"
            />
          </FormGroup>
        </FormControl>
      </Container>
      <Container>
        {isPapers && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4">Papers</Typography>
            <PapersList papers={papers} startNumber={1}></PapersList>
          </Container>
        )}
        {isPreprints && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4">Preprints</Typography>
            <PapersList
              papers={preprints}
              startNumber={startNumber.preprints}
            ></PapersList>
          </Container>
        )}
        {isProceedings && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4">Proceedings</Typography>
            <PapersList
              papers={proceedings}
              startNumber={startNumber.proceedings}
            ></PapersList>
          </Container>
        )}
        {!isPapers && !isPreprints && !isProceedings && (
          <Container css={centerAlignStyle} sx={{ marginTop: "5em" }}>
            <Typography variant="body1" color="red">
              Check some contents.
            </Typography>
          </Container>
        )}
      </Container>
    </>
  );
};

export const getStaticProps = async () => {
  const data = await client.get({
    endpoint: "papers",
    queries: { limit: 500 },
  });
  const papers: Paper[] = data.contents.filter((val: Paper) => {
    return val.papersType[0] === "papers";
  });
  const preprints: Paper[] = data.contents.filter((val: Paper) => {
    return val.papersType[0] === "preprints";
  });
  const proceedings: Paper[] = data.contents.filter((val: Paper) => {
    return val.papersType[0] === "proceedings";
  });

  return {
    props: {
      papers: papers,
      preprints: proceedings,
      proceedings: preprints,
    },
    revalidate: 120,
  };
};

export default PapersPage;
