import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect } from "react";
import AnimeSiteHook from "../../redux/api-hooks/animeSiteHook";
import { RootState, useAppSelector } from "../../redux/store";
import "./styles.css";

export default function AnimeHomePage() {
  const { getCurrentAnimeEpisodes } = AnimeSiteHook();
  const { animeHomePage } = useAppSelector(
    (state: RootState) => state.animeState
  );
  useEffect(() => {
    getCurrentAnimeEpisodes();
  }, []);
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
          gap: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          margin: "0px",
        }}
      >
        {Array.isArray(animeHomePage.results) &&
          animeHomePage.results.map((item: any) => (
            <>
              <Grid
                className="episode-title-container"
                md={2}
                xs={4}
                sx={{
                  position: "relative",
                  border: "1px solid #202020",
                  borderRadius: "5px",
                }}
              >
                <Box width="100%" display="flex" justifyContent="center">
                  <Box
                    component="img"
                    sx={{
                      height: "auto",
                      width: "50%",
                      borderRadius: "5px",
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
                <Box className="episode-image-overlay"></Box>
              </Grid>
            </>
          ))}
      </Grid>
    </Box>
  );
}
