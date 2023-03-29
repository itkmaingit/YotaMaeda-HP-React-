export type Talk = {
  date: string;
  language?: string;
  title: string;
  place: string;
  link?: string;
  eventName?: string;
};

export const talks: Talk[] = [
  {
    date: "13 Mar 2023",
    language: "Japanese",
    title: "Deligne-Mostow theory and beyond",
    place: "Tokyo",
    link: "https://www.jst.go.jp/kisoken/aip/result/event/YMC2023/index.html",
    eventName: "poster presentation at Session Young Mathematicians Challenges",
  },
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
    eventName: "21-st Sendai-Hiroshima Workshop on Number Theory",
  },
  {
    date: "24 Jun 2022",
    language: "Japanese",
    title: "On the volume of unitary groups and the geometry of ball quotients",
    place: "Osaka University",
    eventName: "Number theory & Automorphic forms Seminar",
  },
  {
    date: "27 May 2022",
    language: "English",
    title:
      "The Hirzebruch-Mumford volume of unitary groups and its application to the geometry of ball quotients",
    place: "Leibniz University Hannover",
    eventName: "Research Seminar Number Theory and Arithmetic Geometry",
  },
  {
    date: "12 May 2022",
    language: "Japanese",
    title:
      "The Hirzebruch-Mumford volume of unitary groups and its application to birational types of ball quotients",
    place: "Nagoya University",
    eventName: "Algebraic Geometry Seminar",
  },
  {
    date: "21 Jan 2022",
    language: "Japanese",
    title: "Big line bundles on ball quotients",
    place: "Tohoku University",
    eventName: "Sendai modular form mini workshop",
  },
  {
    date: "14 Dec 2021",
    language: "Japanese",
    title: "Eichler orders and the Deuring correspondence",
    place: "Kyushu University IMI",
    eventName:
      "A number thoretic approach for Post-Quantum Cryptography related to Ramanujan graphs",
  },
  {
    date: "26 Nov 2021",
    title:
      "A solution to the Kudla's modularity conjectur, a study of Shimura varieties and their applications to the post-quantum cryptography",
    language: "Japanese",
    place: "The fifth ACT-X meeting (Zoom meeting)",
  },
  {
    date: "19 Oct 2021",
    title: "Irregular cusps and Kodaira dimension of unitary modular varieties",
    language: "Japanese",
    place: "Number theory Autumn workshop at Kanazawa",
  },
  {
    date: "7 Oct 2021",
    title:
      "Modular varieties and modular forms〜intersection of number theory and algebraic geometry〜",
    language: "Japanese",
    place: "Student Colloquium at Kyoto University (Zoom meeting)",
  },
  {
    date: "27 Sep 2021",
    title: "Fano Shimura varieties and special modular forms",
    language: "Japanese",
    place: "Algebraic Number Theory in Kyushu in 2021 on Zoom (Zoom meeting)",
  },
  {
    date: "9 Jul 2021",
    title: "Fano Shimura varieties with mostly branched cusps",
    language: "Japanese",
    place: "Friday Tea Time Zoom Seminar (Zoom meeting)",
  },
  {
    date: "10 Jun 2021",
    title:
      "A solution to the Kudla's modularity conjectur, a study of Shimura varieties and their applications to the post-quantum cryptography",
    language: "Japanese",
    place: "The fourth ACT-X meeting (Zoom meeting)",
  },
  {
    date: "10 Feb 2021",
    title: "The Kodaira dimension of modular varieties",
    language: "Japanese",
    place: "Mathsci freshman seminar 2021 (Zoom meeting)",
  },
  {
    date: "28 Jan 2021",
    title: "On the Kodaira dimension of unitary Shimura varieties",
    language: "English",
    place:
      "RIMS conference Automorphic forms, Automorphic representations, Galois representations, and its related topics (Zoom meeting)",
  },
  {
    date: "18 Dec 2020",
    title:
      "A solution to the Kudla's modularity conjectur, a study of Shimura varieties and their applications to the post-quantum cryptography",
    language: "Japanese",
    place: "The third ACT-X meeting (Zoom meeting)",
  },
  {
    date: "26 Nov 2020",
    title: "On the Kodaira dimension of unitary Shimura varieties",
    language: "English",
    place: "Hannover algebraic geometry seminar (Zoom meeting)",
  },
  {
    date: "21 Oct 2020",
    title: "Uniruledness of some unitary Shimura varieties",
    language: "Japanese",
    place: "Kinosaki Algebraic Geometry Symposium 2020 (Zoom meeting)",
  },
  {
    date: "8 Sep 2020",
    title:
      "On the singularities of unitary Shimura varieties and their applications to the Kodaira dimension",
    language: "Japanese",
    place: "19-th Hiroshima-Sendai Workshop on Number Theory (Zoom meeting)",
  },
  {
    date: "9 Feb 2020",
    title:
      "On the modularity of special cycles on Shimura varieties (Japanese)",
    place: "Mathsci freshman seminar 2020 at Nagoya University",
  },
  {
    date: "21 Jan 2020",
    title:
      "On the modularity of special cycles on orthogonal Shimura varieties",
    place:
      'RIMS conference "Analytic, geometric and p-adic aspects of automorphic forms and $L$-functions" at Kyoto University',
    language: "English",
  },
  {
    date: "25 Oct 2019",
    title:
      "On the modularity of the generating series of special cycles on orthogonal Shimura varieties",
    place: "Number Theory Seminar at Kyoto University",
    language: "Japanese",
  },
  {
    date: "11 Feb 2019",
    title: "The local Langlands conjecture for $GL_n$",
    place: "Mathsci freshman seminar 2019 at Kyoto University",
    language: "Japanese",
  },
];
