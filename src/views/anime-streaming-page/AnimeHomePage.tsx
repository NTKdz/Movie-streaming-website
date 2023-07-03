import "./styles.css";
import { Box, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import AnimeSiteHook from "../../redux/api-hooks/animeSiteHook";
import { RootState, useAppSelector } from "../../redux/store";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { useNavigate } from "react-router-dom";

export default function AnimeHomePage() {
  const navigate = useNavigate();
  const { getCurrentAnimeEpisodes } = AnimeSiteHook();
  const { animeHomePage } = useAppSelector(
    (state: RootState) => state.animeState
  );
  useEffect(() => {
    getCurrentAnimeEpisodes();
  }, []);

  function navigateToAnime(id: string) {
    navigate(`/anime/${id}`);
  }
  return (
    <Box className="anime-homePage-container">
      <Grid
        container
        spacing={2}
        sx={{
          width: "100%",
          minWidth: 0,
          display: "flex",  
          flexWrap: "wrap",
          gap: 2,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px",
        }}
        padding="10px"
      >
        {Array.isArray(animeHomePage.results) &&
          animeHomePage.results.map((item: any) => (
            <Grid
              className="episode-title-container"
              md={2}
              xs={4}
              sx={{
                position: "relative",
                border: "1px solid #202020",
                borderRadius: "5px",
                padding: "10px",
              }}
              onClick={() => navigateToAnime(item.id)}
            >
              <Box
                width="100%"
                height={{ sm: 250, md: 250 }}
                display="flex"
                justifyContent="center"
              >
                <Box
                  className="anime-image-cover"
                  component="img"
                  sx={{
                    height: "auto",
                    width: "100%",
                    borderRadius: "5px",
                    objectFit: "cover",
                  }}
                  src={item.image}
                />
              </Box>
              <Typography
                noWrap
                sx={{
                  overFlow: "hidden",
                  wordWrap: "none",
                  height: "20px",
                  marginTop: "0px",
                }}
                display="block"
                color="textPrimary"
                variant="caption"
                align="center"
              >
                {item.title}
              </Typography>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                position="absolute"
                width="100%"
                height="100%"
                top="0"
                left="0"
                sx={{
                  "&:hover > #play-icon,&:hover > .episode-image-overlay": {
                    opacity: 1,
                    cursor: "pointer",
                  },
                }}
              >
                <Box
                  className="episode-image-overlay"
                  position="absolute"
                  width="100%"
                  height="100%"
                  top="0"
                  left="0"
                  sx={{
                    opacity: 0,
                    backgroundColor: "rgba(0,0,0, 0.4)",
                    transition: "0.5s ease",
                  }}
                ></Box>
                <PlayCircleOutlineIcon
                  id="play-icon"
                  sx={{
                    fontSize: "50px",
                    position: "absolute",
                    opacity: 0,
                    transition: "0.5s ease",
                  }}
                />
              </Box>
            </Grid>
          ))}
      </Grid>
    </Box>
  );
}
