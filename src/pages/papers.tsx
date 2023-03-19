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
    isPreprints: false,
    isProceedings: false,
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
    <React.Fragment>
      <Container css={centerAlignStyle}>
        <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
          <FormLabel component="legend">Display Content</FormLabel>
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
                />
              }
              label="Proceedings (no peer view)"
            />
          </FormGroup>
        </FormControl>
      </Container>
      <Container>
        {isPapers && (
          <Container>
            <Typography>Papers</Typography>
            <PapersList papers={papers}></PapersList>
          </Container>
        )}
        {isPreprints && (
          <Container>
            <Typography>Preprints</Typography>
            <PapersList papers={preprints}></PapersList>
          </Container>
        )}
        {isProceedings && (
          <Container>
            <Typography>Proceedings</Typography>
            <PapersList papers={proceedings}></PapersList>
          </Container>
        )}
        {!isPapers && !isPreprints && !isProceedings && (
          <Container css={centerAlignStyle}>
            <Typography variant="body1" color="red">
              Check some contents to show my mascles.
            </Typography>
          </Container>
        )}
      </Container>
    </React.Fragment>
  );
}
