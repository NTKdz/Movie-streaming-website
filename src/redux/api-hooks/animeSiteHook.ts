import axiosInstance from "../../axios/axios";
import {
  setCurrentAnimeEpisode,
  setCurrentAnimeInfo,
} from "../slices/animeSlice";
import { useAppDispatch } from "../store";

export default function AnimeSiteHook() {
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
  async function getCurrentAnimeInfo(id: string) {
    try {
      const data = await axiosInstance.get(`/anime/gogoanime/info/${id}`);
      if (data.status === 200) {
        console.log(data.data);
        dispatch(setCurrentAnimeInfo(data.data));
      }
    } catch (e: any) {
      console.log(e.message);
    } 
  }

  return { getCurrentAnimeEpisodes, getCurrentAnimeInfo };
}
