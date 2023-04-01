import { NewsTexts } from "@/models/news";
import {
  Box,
  Divider,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from "@mui/material";
import { RefObject, useEffect, useRef, useState } from "react";
import { FixedSizeList, ListChildComponentProps } from "react-window";
import { useMediaQueryContext } from "./provider/MediaQueryProvider";

type ChildComponentProps = {
  parentRef: RefObject<HTMLDivElement>;
};

function VirtualizedList(props: ListChildComponentProps) {
  const { index, style, data } = props;
  const { isMobileSite } = useMediaQueryContext();

  return (
    <>
      <ListItem
        style={style}
        key={index}
        component="div"
        sx={{ padding: isMobileSite ? "60px 20px" : "60px 100px" }}
      >
        <ListItemText
          primary={
            <>
              <Box sx={{ display: "flex" }}>
                <Typography
                  sx={{ color: "primary.main" }}
                  component="div"
                  variant="body1"
                >
                  {data.NewsTexts[index].date}
                </Typography>

                <Typography
                  sx={{
                    color: "primary.main",
                    margin: "auto 40px",
                    display: "inline-block",
                  }}
                  variant="body1"
                >
                  {data.NewsTexts[index].content}
                </Typography>
              </Box>
              <Divider></Divider>
            </>
          }
        />
      </ListItem>
    </>
  );
}

function ChildComponent({ parentRef }: ChildComponentProps) {
  const [parentWidth, setParentWidth] = useState(0);
  const [parentHeight, setParentHeight] = useState(0);

  useEffect(() => {
    const parentElement = parentRef.current;
    const width = parentElement?.offsetWidth;
    const height = parentElement?.offsetHeight;
    setParentWidth(width ?? 0);
    setParentHeight(height ?? 0);
  }, [parentRef]);

  return (
    <FixedSizeList
      height={parentHeight}
      width={parentWidth}
      itemSize={60}
      itemCount={NewsTexts.length}
      overscanCount={3}
      itemData={{ NewsTexts }}
    >
      {VirtualizedList}
    </FixedSizeList>
  );
}

export default function NewsList() {
  const parentRef = useRef(null);
  return (
    <Paper
      sx={{
        marginTop: "20px",
        width: "100%",
        height: "20vh",
        backgroundColor: "#dddddd",
        padding: "0",
      }}
      ref={parentRef}
    >
      <ChildComponent parentRef={parentRef}></ChildComponent>
    </Paper>
  );
}
