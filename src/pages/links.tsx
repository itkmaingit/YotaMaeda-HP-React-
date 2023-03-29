/** @jsxImportSource @emotion/react */

import { MyFriends } from "@/models/myFriends";
import { centerAlignStyle } from "@/styles/utilStyle";
import { Box, Button, Link, Paper, Typography } from "@mui/material";

export default function links() {
  return (
    <>
      <Box sx={{ height: "30vh", marginTop: "50px" }}>
        <Typography variant="h4" sx={{ textAlign: "center" }}>
          Birthday
        </Typography>

        <Paper
          sx={{
            padding: "0 300px",
            marginTop: "20px",
            width: "100%",
            height: "20vh",
            backgroundColor: "#dddddd",
            display: "flex",
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          <Button variant="outlined" sx={{ height: "2rem" }}>
            Yota24
          </Button>
          <Button variant="outlined" sx={{ height: "2rem" }}>
            Yota25
          </Button>
          <Button variant="outlined" sx={{ height: "2rem" }}>
            Yota26
          </Button>
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
