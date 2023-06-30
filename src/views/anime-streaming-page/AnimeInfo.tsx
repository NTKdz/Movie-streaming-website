import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import AnimeSiteHook from "../../redux/api-hooks/animeSiteHook";
import { RootState, useAppSelector } from "../../redux/store";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./styles.css";

export default function AnimeInfo() {
  const { getCurrentAnimeEpisodes } = AnimeSiteHook();
  const { animeHomePage } = useAppSelector(
    (state: RootState) => state.animeState
  );
  useEffect(() => {
    console.log("hello")
  }, []);
  return (
    <Box className="anime-homePage-container">
     hello
    </Box>
  );
}
