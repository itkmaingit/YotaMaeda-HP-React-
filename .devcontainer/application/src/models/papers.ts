export type Misc = {
  title: string;
  link: string;
  year?: number;
  coAuthor?: string;
  journal?: string;
  papersType: string;
};

export type Paper = {
  title: string;
  link: string;
  year?: number;
  coAuthor?: string;
  journal?: string;
};

export type UncategorizedPaper = {
  title: string;
  link: string;
  year?: number;
  coAuthor?: string;
  journal?: string;
  category: string;
};
