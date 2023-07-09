import { Box, Link, Typography } from "@mui/material";
import { useEffect } from "react";
import AnimeSiteHook from "../../redux/api-hooks/animeSiteHook";
import { RootState, useAppSelector } from "../../redux/store";
import { useParams } from "react-router-dom";
import "./styles.css";

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
      <Box
        className="anime-image-cover"
        sx={{
          display: "flex",
          flexDirection: "row",
          overflow: "none",
          width: "100%",
          height: "350px",
          border: "2px white solid",
          padding: "10px",
        }}
      >
        <Box
          className="anime-image-cover"
          component="img"
          sx={{
            height: "100%",
            width: "20vw",
            borderRadius: "5px",
            objectFit: "cover",
          }}
          src={animeInfo.image}
        />
        <Typography variant="h4">{animeInfo.title}</Typography>
      </Box>
      {Array.isArray(animeInfo.episodes) &&
        animeInfo.episodes.map((item: any) => {
          return (
            <Box>
              <Typography>{item.number}</Typography>
              <Link href={item.url} color="inherit">
                link source:{item.url}
              </Link>
            </Box>
          );
        })}
    </Box>
  );
}
