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
    title: "Revisiting the moduli space of 8 points on $P^1$",
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
];
