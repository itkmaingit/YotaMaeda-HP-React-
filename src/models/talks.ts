export type Talk = {
  date: string;
  language: string;
  title: string;
  place: string;
  link: string;
  eventName: string;
};

export const talks: Talk[] = [
  {
    date: "4 Feb 2023",
    language: "Japanese",
    title: "Revisiting the moduli space of 8 points on P^1",
    place: "Tohoku University",
    link: "http://www.math.tohoku.ac.jp/research/2022/meeting/2022program.pdf",
    eventName: "Sendai modular form mini workshop",
  },
  {
    date: "10 Jan 2023",
    language: "English",
    title: "Deligne-Mostow theory and beyond",
    place: "Zoom meeting",
    link: "https://www2.mathematik.tu-darmstadt.de/~international_seminar/archive.html",
    eventName: "International Seminar on Automorphic Forms",
  },
  {
    date: "9 Jan 2023",
    language: "English",
    title: "Deligne-Mostow theory and beyond",
    place: "National Center for Theoretical Sciences (NCTS, Taipei)",
    link: "",
    eventName: "East Asia Core Doctoral Forum in Mathematics",
  },
  {
    date: "21 Jul 2022",
    language: "Japanese",
    title: "Deligne-Mostow theory and beyond",
    place: "Tokyo University of Science",
    link: "",
    eventName: "colloqium",
  },
  {
    date: "12 Jul 2022",
    language: "Japanese",
    title: "On the geometry of higher dimensional ball quotiets",
    place: "Tohoku University",
    link: "",
    eventName: "21-st Sendai-Hiroshima Workshop on Number Theory",
  },
  {
    date: "12 Jul 2022",
    language: "Japanese",
    title: "On the geometry of higher dimensional ball quotiets",
    place: "Tohoku University",
    eventName:
      "21-st Sendai-Hiroshima Workshop on Number Theory@Tohoku University",
  },
  {
    date: "24 Jun 2022",
    language: "Japanese",
    title: "On the volume of unitary groups and the geometry of ball quotients",
    place: "Osaka University",
    eventName: "Number theory & Automorphic forms Seminar@Osaka University",
  },
  {
    date: "27 May 2022",
    language: "English",
    title:
      "The Hirzebruch-Mumford volume of unitary groups and its application to the geometry of ball quotients",
    place: "Leibniz University Hannover",
    eventName:
      "Research Seminar Number Theory and Arithmetic Geometry@Leibniz University Hannover",
  },
  {
    date: "12 May 2022",
    language: "Japanese",
    title:
      "The Hirzebruch-Mumford volume of unitary groups and its application to birational types of ball quotients",
    place: "Nagoya University",
    eventName: "Algebraic Geometry Seminar@Nagoya University",
  },
  {
    date: "21 Jan 2022",
    language: "Japanese",
    title: "Big line bundles on ball quotients",
    place: "Tohoku University",
    eventName: "Sendai modular form mini workshop@Tohoku University",
  },
  {
    date: "14 Dec 2021",
    language: "Japanese",
    title: "Eichler orders and the Deuring correspondence",
    place: "Kyushu University IMI",
    eventName:
      "A number thoretic approach for Post-Quantum Cryptography related to Ramanujan graphs@Kyushu University IMI",
  },
];
