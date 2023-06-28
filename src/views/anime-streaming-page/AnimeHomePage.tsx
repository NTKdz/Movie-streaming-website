import { Box, Button } from "@mui/material";
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
      <Box
        sx={{
          width: 1000,
          display: "flex",
          flexWrap: "wrap",
          gap: 0,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {animeHomePage.results.map((item) => (
          <Box
            sx={{
              width: "20%",
              height: 200,
              margin: "5px",
            }}
          >
            <img
              src={item.image}
              style={{
                maxWidth: "100%",
                height: "200px",
                objectFit: "contain",
              }}
            ></img>
          </Box>
        ))}
      </Box>
    </>
  );
}
