/** @jsxImportSource @emotion/react */

import { Talk } from "@/models/talks";
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
  talks: Talk[];
};

export default function TalksList({ talks }: Props) {
  return (
    <List>
      {talks.flatMap((talk, i) => [
        <ListItem
          alignItems="flex-start"
          key={talk.title + talk.link + talk.eventName}
        >
          <ListItemText
            primary={
              <>
                <Typography
                  sx={{
                    display: "inline",
                    fontSize: "1rem",
                    marginRight: "0.5rem",
                  }}
                >
                  {i + 1}.{" "}
                </Typography>
                <Link
                  href={talk.link}
                  sx={{
                    color: "text.primary",
                    textDecoration: "underline",
                    cursor: "pointer",
                  }}
                  target="_blank"
                  rel="noopener"
                >
                  {<Latex>{talk.title}</Latex>}
                </Link>
                {talk.language && (
                  <Typography
                    sx={{ display: "inline", marginLeft: "1em" }}
                    component="span"
                    variant="body2"
                    color="text.primary"
                  >
                    {`(${talk.language})`}
                  </Typography>
                )}
              </>
            }
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                  suppressHydrationWarning={true}
                >
                  {talk.eventName &&
                    `${talk.eventName} at ${talk.place}, ${new Date(
                      talk.date
                    ).toDateString()}.`}
                  {!talk.eventName &&
                    `${talk.place}, ${new Date(talk.date).toDateString()}.`}
                </Typography>
              </>
            }
          />
        </ListItem>,
        <Divider
          key={talk.title + talk.link + talk.eventName + "-divider"}
        ></Divider>,
      ])}
    </List>
  );
}
