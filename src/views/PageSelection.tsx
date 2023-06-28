import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./pageSelectorStyles.css";

export default function PageSelection() {
  const navigate = useNavigate();

  const style = {
    hover: {
      backgroundColor: "blue",
    },
  };

  function selectPage() {
    navigate("/anime");
  }

  return (
    <>
      <Box
        sx={{
          width: 300,
          display: "flex",
          flexWrap: "wrap",
          gap: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            minWidth: 200,
            minHeight: 50,
            backgroundColor: "green",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={selectPage}
        >
          <p>GOGOANIME</p>
        </Box>
      </Box>
    </>
  );
}
