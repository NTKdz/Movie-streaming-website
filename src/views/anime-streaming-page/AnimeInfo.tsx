import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import AnimeSiteHook from "../../redux/api-hooks/animeSiteHook";
import { RootState, useAppSelector } from "../../redux/store";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import "./styles.css";
import { useParams } from "react-router-dom";

export default function AnimeInfo() {
  const { chosenAnime } = useParams();
  const { getCurrentAnimeInfo } = AnimeSiteHook();
  const { animeInfo } = useAppSelector((state: RootState) => state.animeState);
  useEffect(() => {
    getCurrentAnimeInfo(chosenAnime as string);
    console.log(animeInfo);
  }, []);
  return (
    <Box className="anime-homePage-container">
      <Box  className="anime-image-cover" sx={{width:"200px",height:"300px"}}>
        <Box
          className="anime-image-cover"
          component="img"
          sx={{
            height: "auto",
            width: "100%",
            borderRadius: "5px",
            objectFit: "cover",
          }}
          src={animeInfo.image}
        />
      </Box>
    </Box>
  );
}
