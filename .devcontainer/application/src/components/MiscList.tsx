/** @jsxImportSource @emotion/react */

import { Misc } from "@/models/papers";
import {
  Divider,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";
import "katex/dist/katex.min.css";
import Latex from "react-latex";

type Props = {
  papers: Misc[];
  startNumber: number;
};


export default function MiscList({ papers, startNumber }: Props) {
  console.log(papers)
  return (
    <List>
      {papers.flatMap((paper, i) => [
        <ListItem alignItems="flex-start" key={paper.link}>
          <ListItemText
            primary={
              <>
                <Typography
                  sx={{ display: "inline", fontSize: "1rem" }}
                  component="span"
                  color="text.primary"
                  marginRight="0.5rem"
                >
                  {startNumber === -1 ? '・' : `${i + startNumber}.`}
                </Typography>
                <Link
                  href={paper.link}
                  sx={{
                    display: "inline",
                    color: "text.primary",
                    textDecoration: "underline",
                  }}
                  target="_blank"
                  rel="noopener"
                >
                  {<Latex>{paper.title}</Latex>}
                </Link>
                {paper.coAuthor && (
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                    marginLeft="0.5rem"
                  >
                    (with {paper.coAuthor}),
                  </Typography>
                )}
              </>
            }
            secondary={
              <>
                <Typography
                  component="span"
                  sx={{
                    display: "inline",
                    color: "text.primary",
                    marginRight: "0.5em",
                  }}
                >
                  {paper.year}
                </Typography>
                {paper.journal && (
                  <Typography
                    sx={{ display: "inline" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {paper.journal}
                  </Typography>
                )}
              </>
            }
          />
        </ListItem>,
        <Divider key={paper.link + "-divider"}></Divider>,
      ])}
    </List>
  );
}
