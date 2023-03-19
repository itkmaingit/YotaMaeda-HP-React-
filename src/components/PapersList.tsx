/** @jsxImportSource @emotion/react */

import { Paper } from "@/models/papers";
import { Divider, Link, List, ListItem, ListItemText } from "@mui/material";
import "katex/dist/katex.min.css";
import React from "react";
import Latex from "react-latex";

type Props = {
  papers: Paper[];
};

export default function PapersList({ papers }: Props) {
  const latexCode =
    "\\int_0^\\infty x^2 dx aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
  return (
    <List>
      {papers.flatMap((paper, i) => [
        <ListItem alignItems="flex-start" key={paper.paperLink}>
          <ListItemText
            primary={
              <Link href={paper.paperLink}>{<Latex>{paper.title}</Latex>}</Link>
            }
            secondary={<React.Fragment>{paper.year}</React.Fragment>}
          />
        </ListItem>,
        <Divider></Divider>,
      ])}
    </List>
  );
}
