export type Paper = {
  title: string;
  paperLink: string;
  year: number;
  coAuthor?: string;
};

export const preprints: Paper[] = [
  {
    title: "Revisiting the moduli space of 8 points on  $P^1$",
    paperLink: "https://arxiv.org/abs/2211.00052v2",
    year: 2022,
    coAuthor: "Klaus Hulek",
  },
  {
    title: "Reflective obstructions of unitary modular varieties",
    paperLink: "https://arxiv.org/abs/2204.01128v2",
    year: 2022,
  },
];

export const papers: Paper[] = [
  {
    title: "Irregular cusps of ball quotients",
    paperLink: "https://onlinelibrary.wiley.com/doi/10.1002/mana.202100639",
    year: 2022,
  },
];

export const proceedings: Paper[] = [
  {
    title: "On the Kodaira dimension of unitary Shimura varieties",
    paperLink:
      "https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/2204.html",
    year: 2021,
  },
];
