import "./App.css";
import { useEffect, useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Button } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import axios from "./axios/axios";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  useEffect(() => {
    const url = "https://api.consumet.org/anime/gogoanime/demon?page=2";
    const data = async () => {
      try {
        const data = await axios.get(url, { params: { page: 2 } });
        console.log(data);
        return data;
      } catch (err: any) {
        throw new Error(err.message);
      }
    };

    data();
  }, []);
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <main>This app is using the dark mode</main>
        <Button variant="outlined">hello</Button>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
