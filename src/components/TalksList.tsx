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
        <ListItem alignItems="flex-start" key={talk.link}>
          <ListItemText
            primary={
              <>
                <Link href={talk.link}>{<Latex>{talk.title}</Latex>}</Link>
                <Typography
                  sx={{ display: "inline", marginLeft: "1em" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`(${talk.language}) - ${talk.eventName} at ${talk.place}`}
                </Typography>
              </>
            }
            secondary={
              <>
                <Typography
                  sx={{ display: "inline" }}
                  component="span"
                  variant="body2"
                  color="text.primary"
                >
                  {`${talk.date}`}
                </Typography>
              </>
            }
          />
        </ListItem>,
        <Divider></Divider>,
      ])}
    </List>
  );
}
