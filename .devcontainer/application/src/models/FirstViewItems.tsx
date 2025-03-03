import { Props } from "@/components/ShortCVText";
import { Link, Typography } from "@mui/material";

export const shortCV: Props[] = [
  {
    period: "Mar 2025 - present",
    text: (
      <Typography
        component="span"
        sx={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.2rem",
        }}
      >
        TU Darmstadt
      </Typography>
    ),
  },
  {
    period: "Sep 2022-Feb 2025",
    text: (
      <Typography
        component="span"
        sx={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.2rem",
        }}
      >
        Researcher at Quantum Computing Center,{" "}
        <Link
          href="https://www.kgri.keio.ac.jp/en/project/research-centers/2022/A22-08.html"
          target="_blank"
          color="#e7e7e7"
        >
          Keio University
        </Link>
      </Typography>
    ),
  },
  {
    period: "Apr 2021-Feb 2025",
    text: (
      <Typography
        component="span"
        sx={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.2rem",
        }}
      >
        Researcher at Advanced Research Laboratory, R&D Center, Sony Group
        Corporation
      </Typography>
    ),
  },
  {
    period: "Apr 2019-Mar 2023",
    text: (
      <Typography
        component="span"
        sx={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.2rem",
        }}
      >
        Ph.D. course in Mathematics, Kyoto University (Early graduation)
      </Typography>
    ),
  },
  {
    period: "Apr 2015-Mar 2019",
    text: (
      <Typography
        component="span"
        sx={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.2rem",
        }}
      >
        Undergraduate course in Science, Kyoto University
      </Typography>
    ),
  },
];

export const KeywordsText: Props[] = [
  {
    period: "Mathematical",
    text: (
      <Typography
        component="span"
        sx={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.2rem",
        }}
      >
        Shimura variety, Modular form, Algebraic cycle, Kodaira dimension,
        Compactification
      </Typography>
    ),
  },
  {
    period: "Others",
    text: (
      <Typography
        component="span"
        sx={{
          fontFamily: "Cormorant Garamond, serif",
          fontSize: "1.2rem",
        }}
      >
        Quantum computing, Cryptography
      </Typography>
    ),
  },
];
