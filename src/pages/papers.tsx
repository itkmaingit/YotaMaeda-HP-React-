/** @jsxImportSource @emotion/react */
import PapersList from "@/components/PapersList";
import { useMediaQueryContext } from "@/components/provider/MediaQueryProvider";
import { papers, preprints, proceedings } from "@/models/papers";

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
import * as React from "react";

export default function PapersPage() {
  const [state, setState] = React.useState({
    isPapers: true,
    isPreprints: true,
    isProceedings: true,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  const { isPapers, isPreprints, isProceedings } = state;
  const { isMobileSite, isTabletSite, isPcSite } = useMediaQueryContext();
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
            <PapersList papers={papers}></PapersList>
          </Container>
        )}
        {isPreprints && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4">Preprints</Typography>
            <PapersList papers={preprints}></PapersList>
          </Container>
        )}
        {isProceedings && (
          <Container sx={{ marginBottom: "3em" }}>
            <Typography variant="h4">Proceedings</Typography>
            <PapersList papers={proceedings}></PapersList>
          </Container>
        )}
        {!isPapers && !isPreprints && !isProceedings && (
          <Container css={centerAlignStyle} sx={{ marginTop: "5em" }}>
            <Typography variant="body1" color="red">
              Check some contents to show my mascles.
            </Typography>
          </Container>
        )}
      </Container>
    </>
  );
}
