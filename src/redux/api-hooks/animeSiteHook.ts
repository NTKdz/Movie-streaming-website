import axiosInstance from "../../axios/axios";
import { setCurrentAnimeEpisode } from "../slices/animeSlice";
import { RootState, useAppDispatch, useAppSelector } from "../store";

export default function AnimeSiteHook() {
  const { animeHomePage } = useAppSelector(
    (state: RootState) => state.animeState
  );
  const dispatch = useAppDispatch();

  async function getCurrentAnimeEpisodes() {
    try {
      const data = await axiosInstance.get("/anime/gogoanime/recent-episodes", {
        params: { page: 1, type: 1 },
      });
      if (data.status === 200) {
        console.log(data.data);
        dispatch(setCurrentAnimeEpisode(data.data));
      }
    } catch (e: any) {
      console.log(e.message);
    }
  }
  return { getCurrentAnimeEpisodes };
}
