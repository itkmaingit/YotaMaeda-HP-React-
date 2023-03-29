export type Paper = {
  title: string;
  paperLink: string;
  year?: number;
  coAuthor?: string;
  journal?: string;
  number: number;
};

export const preprints: Paper[] = [
  {
    title: "Revisiting the moduli space of 8 points on  $P^1$",
    paperLink: "https://arxiv.org/abs/2211.00052v2",
    year: 2022,
    coAuthor: "Klaus Hulek",
    number: 5,
  },
  {
    title: "Reflective obstructions of unitary modular varieties",
    paperLink: "https://arxiv.org/abs/2204.01128v2",
    year: 2022,
    number: 6,
  },
  {
    title:
      "Uniruledness of unitary Shimura varieties associated with Hermitian forms of signatures $(1,3)$, $(1,4)$ and $(1,5)$",
    paperLink: "https://arxiv.org/abs/2008.13106",
    year: 2020,
    number: 7,
  },
];

export const papers: Paper[] = [
  {
    title: "Irregular cusps of ball quotients",
    journal: "Math. Nachr. (2023)",
    paperLink: "https://onlinelibrary.wiley.com/doi/10.1002/mana.202100639",
    number: 1,
  },
  {
    title: "Fano Shimura varieties with mostly branched cusps",
    journal:
      "Springer Proceedings in Mathematics & Statistics(PROMS, volume 409)",
    paperLink: "https://link.springer.com/book/9783031178580",
    coAuthor: "Yuji Odaka",
    number: 2,
  },
  {
    title:
      "Modularity of special cycles on unitary Shimura varieties over CM-fields",
    journal: "Acta Arith. 204(2022), no. 1, 1-18",
    paperLink:
      "https://www.impan.pl/pl/wydawnictwa/czasopisma-i-serie-wydawnicze/acta-arithmetica/all/204/1/114721/modularity-of-special-cycles-on-unitary-shimura-varieties-over-cm-fields",
    number: 3,
  },
  {
    title:
      "The modularity of special cycles on orthogonal Shimura varieties over totally real fields under the Beilinson-Bloch conjecture",
    journal: "Canad. Math. Bull. 64 (2021), no. 1, 39–53",
    paperLink:
      "https://www.cambridge.org/core/journals/canadian-mathematical-bulletin/article/modularity-of-special-cycles-on-orthogonal-shimura-varieties-over-totally-real-fields-under-the-beilinsonbloch-conjecture/69CFD43AD60EB976221A2FB94DDD01E6",
    number: 4,
  },
];

export const proceedings: Paper[] = [
  {
    title: "The Kodaira dimension of modular varieties",
    paperLink:
      "https://sites.google.com/view/math-graduate/MATHSCI-FRESHMAN-SEMINAR/2021?authuser=0",
    journal: "4th Mathsci freshman seminar (2021)",
    number: 8,
  },
  {
    title: "On the Kodaira dimension of unitary Shimura varieties",
    paperLink:
      "https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/2204.html",
    journal:
      "RIMS conference Automorphic forms, Automorphic representations, Galois representations, and its related topics Kokyuroku (2021)",
    number: 9,
  },
  {
    title: "Uniruledness of some unitary Shimura varieties",
    paperLink:
      "https://repository.kulib.kyoto-u.ac.jp/dspace/handle/2433/261108",
    journal:
      "Kinosaki Algebraic Geometry Symposium (Kyoto University Research Information Repository, 2020)",
    number: 9,
  },
  {
    title: "On the modularity of special cycles on Shimura varieties",
    paperLink:
      "https://sites.google.com/view/math-graduate/MATHSCI-FRESHMAN-SEMINAR/2020/proceeding",
    journal: "3rd Mathsci freshman seminar (2020)",
    number: 10,
  },
  {
    title:
      "On the modularity of special cycles on orthogonal Shimura varieties",
    paperLink:
      "https://www.kurims.kyoto-u.ac.jp/~kyodo/kokyuroku/contents/2197.html",
    journal:
      "RIMS conference Analytic, geometric and p-adic aspects of automorphic forms and L-functions Kokyuroku (2020)",
    number: 11,
  },
  {
    title: "The local Langlands conjecture for $GL_n$",
    paperLink:
      "https://sites.google.com/view/math-graduate/MATHSCI-FRESHMAN-SEMINAR/2019/proceeding",
    journal: "2nd Mathsci freshman seminar (2019)",
    number: 12,
  },
];
