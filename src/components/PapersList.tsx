/** @jsxImportSource @emotion/react */

import { Paper } from "@/models/papers";
import {
  css,
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "katex/dist/katex.min.css";
import * as React from "react";
import Latex from "react-latex";

type Props = {
  papers: Paper[];
};

const inlineStyle = css``;

export default function PapersList({ papers }: Props) {
  return (
    <List>
      {papers.flatMap((paper, i) => [
        <ListItem alignItems="flex-start" key={paper.paperLink}>
          <ListItemText
            primary={
              <React.Fragment>
                <Link href={paper.paperLink}>
                  {<Latex>{paper.title}</Latex>}
                </Link>
                {paper.coAuthor && (
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    (with {paper.coAuthor})
                  </Typography>
                )}
              </React.Fragment>
            }
            secondary={<Typography>{paper.year}</Typography>}
          />
        </ListItem>,
        <Divider key={paper.paperLink + "-divider"}></Divider>,
      ])}
    </List>
  );
}
