// This mocked data assumes that the date and duration were already treated.

export type TCategories = "personal" | "new" | "similar" | "hot" | "watched";

export interface ISuggestedVideos {
  id: number;
  title: string;
  views: string;
  channel: string;
  date: string;
  videoSrc: string;
  thumbnail: string;
  duration: string;
  category: TCategories;
}

export const videoSuggestions: ISuggestedVideos[] = [
  {
    id: 1,
    title: "Travis Scott and Fortnite Present: Astronomical (Full Event Video)",
    views: "198 mi",
    channel: "Travis Scott",
    date: "2 anos",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/wYeFAlVC8qU/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAukJuXwi9qHL9mes88oHHyXurY_w",
    duration: "8:57",
    category: "personal",
  },
  {
    id: 2,
    title: "Post Malone - Saint-Tropez (Official Video)",
    views: "112 mi",
    channel: "Post Malone",
    date: "3 anos",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/MRyLC2M1K2w/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLC8b14DG1mX0gdugb3gO02IGSXv-w",
    duration: "2:37",
    category: "personal",
  },
  {
    id: 3,
    title: "Mozart - Música Clássica Relaxante",
    views: "344 mil",
    channel: "Mozart",
    date: "1 mês",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/hWZPiXrbFkg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5FdgaQO09WfaYr3euy1KMvSVUKg",
    duration: "1:23:57",
    category: "personal",
  },
  {
    id: 4,
    title: "twenty one pilots: Stressed Out [OFFICIAL VIDEO]",
    views: "2,6 bi",
    channel: "Fueled By Ramen",
    date: "7 anos",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/pXRviuL6vMY/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBAthmj1byrrdUU4GKa6FdeoUl6Vg",
    duration: "3:46",
    category: "personal",
  },
  {
    id: 5,
    title: "Guns N' Roses - November Rain",
    views: "1,9 bi",
    channel: "Guns N' Roses",
    date: "13 anos",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/8SbUC-UaAxE/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLAtjxVEnN0b3J28ZYz07Nw6kiStMA",
    duration: "9:17",
    category: "personal",
  },

  {
    id: 6,
    title: "Interstellar - Main Theme (Slowed to oblivion)",
    views: "112 mil",
    channel: "Zetto",
    date: "4 dias",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/EOK6_cX35QM/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLBtj0jZ_aNZBZ9RQw7wrIqwW0xesA",
    duration: "54:54",
    category: "new",
  },
  {
    id: 7,
    title: "Muzy - Os idiotas ganharam tanta voz",
    views: "2 mi",
    channel: "Paulo Muzy",
    date: "1 ano",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/dJBpWq3gSJI/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAhSh0zOIySpxiOV1lPcUqq0sjuyw",
    duration: "4:22",
    category: "hot",
  },
  {
    id: 8,
    title: "ESLEN DELANOGARE ENSINA COMO VOCÊ PODE APRENDER QUALQUER COISA | INTELIGÊNCIA LTDA",
    views: "194 mil",
    channel: "Cortes Inteligência LTDA",
    date: "2 meses",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/Pkuo4DlPkU4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCllGgWxykFj7CShOaTlB_OHXzPrw",
    duration: "10:47",
    category: "watched",
  },
  {
    id: 9,
    title: "ESLEN DELANOGARE ENSINA COMO VOCÊ PODE APRENDER QUALQUER COISA | INTELIGÊNCIA LTDA",
    views: "194 mil",
    channel: "Cortes Inteligência LTDA",
    date: "2 meses",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/Pkuo4DlPkU4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCllGgWxykFj7CShOaTlB_OHXzPrw",
    duration: "10:47",
    category: "watched",
  },
  {
    id: 10,
    title: "ESLEN DELANOGARE ENSINA COMO VOCÊ PODE APRENDER QUALQUER COISA | INTELIGÊNCIA LTDA",
    views: "194 mil",
    channel: "Cortes Inteligência LTDA",
    date: "2 meses",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/Pkuo4DlPkU4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCllGgWxykFj7CShOaTlB_OHXzPrw",
    duration: "10:47",
    category: "watched",
  },
  {
    id: 11,
    title: "ESLEN DELANOGARE ENSINA COMO VOCÊ PODE APRENDER QUALQUER COISA | INTELIGÊNCIA LTDA",
    views: "194 mil",
    channel: "Cortes Inteligência LTDA",
    date: "2 meses",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/Pkuo4DlPkU4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCllGgWxykFj7CShOaTlB_OHXzPrw",
    duration: "10:47",
    category: "watched",
  },
  {
    id: 12,
    title: "ESLEN DELANOGARE ENSINA COMO VOCÊ PODE APRENDER QUALQUER COISA | INTELIGÊNCIA LTDA",
    views: "194 mil",
    channel: "Cortes Inteligência LTDA",
    date: "2 meses",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/Pkuo4DlPkU4/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLCllGgWxykFj7CShOaTlB_OHXzPrw",
    duration: "10:47",
    category: "watched",
  },
  {
    id: 13,
    title: "Mozart - Música Clássica Relaxante",
    views: "344 mil",
    channel: "Mozart",
    date: "1 mês",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/hWZPiXrbFkg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5FdgaQO09WfaYr3euy1KMvSVUKg",
    duration: "1:23:57",
    category: "similar",
  },
  {
    id: 14,
    title: "Mozart - Música Clássica Relaxante",
    views: "344 mil",
    channel: "Mozart",
    date: "1 mês",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/hWZPiXrbFkg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5FdgaQO09WfaYr3euy1KMvSVUKg",
    duration: "1:23:57",
    category: "similar",
  },
  {
    id: 15,
    title: "Mozart - Música Clássica Relaxante",
    views: "344 mil",
    channel: "Mozart",
    date: "1 mês",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/hWZPiXrbFkg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5FdgaQO09WfaYr3euy1KMvSVUKg",
    duration: "1:23:57",
    category: "similar",
  },
  {
    id: 16,
    title: "Mozart - Música Clássica Relaxante",
    views: "344 mil",
    channel: "Mozart",
    date: "1 mês",
    videoSrc: "",
    thumbnail:
      "https://i.ytimg.com/vi/hWZPiXrbFkg/hqdefault.jpg?sqp=-oaymwEbCKgBEF5IVfKriqkDDggBFQAAiEIYAXABwAEG&rs=AOn4CLB5FdgaQO09WfaYr3euy1KMvSVUKg",
    duration: "1:23:57",
    category: "similar",
  },
];
