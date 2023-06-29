import { Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Box } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function LayOut() {
  const location = useLocation();
  const navigate = useNavigate();

  const [isDarkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (location.pathname === "/") {
      navigate("/pageSelection");
    }
  }, [location.pathname]);

  function toggleDarkMode() {
    setDarkMode(!isDarkMode);
  }
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        {location.pathname !== "/pageSelection" && <NavBar />}
        {isDarkMode && <CssBaseline />}
        <Outlet />
      </ThemeProvider>
    </>
  );
}
