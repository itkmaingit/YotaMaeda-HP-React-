/** @jsxImportSource @emotion/react */
import MiscList from "@/components/MiscList";
import PaperList from "@/components/PaperList";
import { useMediaQueryContext } from "@/components/provider/MediaQueryProvider";
import { client } from "@/libs/client";
import { Misc, Paper, UncategorizedPaper } from "@/models/papers";
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
type CategorizedPapers = {
  startNumber: number;
  papers: Paper[];
};

const PapersPage: NextPage<Props> = ({ papers, papersLength, proceedings, patents }) => {
  const [state, setState] = React.useState({
    isPapers: true,
    isProceedings: true,
    isPatents: true,
  });

  const [startNumber, setStartNumber] = React.useState({
    proceedings: papersLength + 1,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  React.useEffect(() => {
    setStartNumber({
      proceedings: state.isPapers ? papersLength + 1 : 1,
    });
  }, [state]);

  const { isPapers, isProceedings, isPatents } = state;
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
            <FormControlLabel
              control={
                <Checkbox
                  checked={isPatents}
                  onChange={handleChange}
                  name="isPatents"
                  sx={{
                    color: "text.primary",
                    "&.Mui-checked": {
                      color: "text.primary",
                    },
                  }}
                />
              }
              label="Patents"
            />
          </FormGroup>
        </FormControl>
      </Container>
      <Container>
        {isPapers && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4" sx={{ marginBottom: "1em" }}>
              Journal articles, peer-reviewed conference papers, or preprints
            </Typography>
            {Object.keys(papers).map((category) => (
              <PaperList
                key={category}
                category={category}
                papers={papers[category].papers}
                startNumber={papers[category].startNumber}
              />
            ))}
          </Container>
        )}
        {isProceedings && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4">Non-peer-reviewed conference proceedings</Typography>
            <MiscList
              papers={proceedings}
              startNumber={startNumber.proceedings}
            ></MiscList>
          </Container>
        )}
        {isPatents && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4">Patents</Typography>
            <MiscList
              papers={patents}
              startNumber={-1}
            ></MiscList>
          </Container>
        )}
        {!isPapers && !isProceedings && !isPatents && (
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
  const miscData = await client.get({
    endpoint: "papers",
    queries: { limit: 500 },
  });
  const paperData = await client.get({
    endpoint: "only_papers",
    queries: { limit: 500 },
  });
  const papersLength = paperData.contents.length;
  const papers: { [key: string]: CategorizedPapers } = {};

  paperData.contents.forEach((elem: UncategorizedPaper) => {
    const { category, ...paperDetails } = elem;
    if (!papers[category]) {
      papers[category] = { startNumber: 1, papers: [] };
    }
    papers[category].papers.push(paperDetails);
  });

  let startNumber = 1;
  Object.keys(papers).map((category) => {
    papers[category].startNumber = startNumber;
    startNumber += papers[category].papers.length;
  });

  const proceedings: Misc[] = miscData.contents.filter((val: Misc) => {
    return val.papersType[0] === "proceedings";
  });
  const patents: Misc[] = miscData.contents.filter((val: Misc) => {
    return val.papersType[0] === "patents";
  });

  return {
    props: {
      papers: papers,
      papersLength: papersLength,
      proceedings: proceedings,
      patents: patents
    },
    revalidate: 120,
  };
};

export default PapersPage;
