import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface animeHomePage {
  currentPage: number;
  hasNextPage: boolean;
  results: [
    {
      id: string;
      episodeId: string;
      episodeNumber: number;
      title: string;
      image: string;
      url: string;
    }
  ];
}

export interface animeInfo {
  id: string;
  title: string;
  url: string;
  image: string;
  releaseDate: string | null;
  description: string | null;
  genres: string[];
  subOrDub: "sub";
  type: string | null;
  status: "Ongoing";
  otherName: string | null;
  totalEpisodes: number;
  episodes: [
    {
      id: string;
      number: number;
      url: string;
    }
  ];
}
export interface animeStreamingSite {
  animeHomePage: animeHomePage;
  animeInfo: animeInfo;
}
const initialState: animeStreamingSite = {
  animeHomePage: {} as animeHomePage,
  animeInfo: {} as animeInfo,
};
export const animeSlice = createSlice({
  name: "animeSlice",
  initialState,
  reducers: {
    setCurrentAnimeEpisode: (state, action: PayloadAction<animeHomePage>) => {
      state.animeHomePage = action.payload;
    },
    setCurrentAnimeInfo: (state, action: PayloadAction<animeInfo>) => {
      state.animeInfo = action.payload;
    },
  },
});

export const { setCurrentAnimeEpisode, setCurrentAnimeInfo } =
  animeSlice.actions;
export default animeSlice.reducer;
