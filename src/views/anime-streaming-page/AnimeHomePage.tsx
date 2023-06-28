import { Box, Button, Grid } from "@mui/material";
import { useEffect } from "react";
import AnimeSiteHook from "../../redux/api-hooks/animeSiteHook";
import { RootState, useAppSelector } from "../../redux/store";

export default function AnimeHomePage() {
  const { getCurrentAnimeEpisodes } = AnimeSiteHook();
  const { animeHomePage } = useAppSelector(
    (state: RootState) => state.animeState
  );
  useEffect(() => {
    getCurrentAnimeEpisodes();
  }, []);
  return (
    <>
      <Button variant="outlined">Primary</Button>

      <Grid
        container
        spacing={2}
        sx={{
          width: 1000,
          minWidth: 0,
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {animeHomePage.results.map((item) => (
          <>
            <Grid xs={2}>
              <Box
                component="img"
                sx={{
                  height: "200px",
                  width: "100%",
                  maxHeight: "300px",
                  maxWidth: { xs: 350, md: 250 },
                }}
                src={item.image}
              />
            </Grid>
          </>
        ))}
      </Grid>
    </>
  );
}
