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

export interface animeStreamingSite {
  animeHomePage: animeHomePage;
}
const initialState: animeStreamingSite = {
  animeHomePage: {} as animeHomePage,
};
export const animeSlice = createSlice({
  name: "animeSlice",
  initialState,
  reducers: {
    setCurrentAnimeEpisode: (state, action: PayloadAction<animeHomePage>) => {
      state.animeHomePage = action.payload;
    },
  },
});

export const { setCurrentAnimeEpisode } = animeSlice.actions;
export default animeSlice.reducer;
