/** @jsxImportSource @emotion/react */

import { Birthdays } from "@/models/birthday";
import { MyFriends } from "@/models/myFriends";
import { centerAlignStyle } from "@/styles/utilStyle";
import { Box, Link, Paper, Typography } from "@mui/material";

export default function links() {
  return (
    <>
      <Box sx={{ height: "30vh", marginTop: "50px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Birthday
        </Typography>

        <Paper
          css={centerAlignStyle}
          sx={{
            marginTop: "20px",
            width: "100%",
            height: "20vh",
            backgroundColor: "#dddddd",
          }}
        >
          {Birthdays.map((item) => (
            <Link
              sx={{
                color: "primary.main",
                display: "block",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              href={item.link}
              target="_blank"
              rel="noopener"
            >
              {item.name}
            </Link>
          ))}
        </Paper>
      </Box>
      <Box sx={{ height: "30vh", marginTop: "50px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          My Friends
        </Typography>

        <Paper
          css={centerAlignStyle}
          sx={{
            marginTop: "20px",
            width: "100%",
            height: "20vh",
            backgroundColor: "#dddddd",
          }}
        >
          {MyFriends.map((item) => (
            <Link
              sx={{
                color: "primary.main",
                display: "block",
                fontSize: "1.5rem",
                cursor: "pointer",
              }}
              target="_blank"
              rel="noopener"
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </Paper>
      </Box>
    </>
  );
}
