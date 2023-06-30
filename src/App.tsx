import "./App.css";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageSelection from "./views/PageSelection";
import LayOut from "./views/LayOut";
import MovieHomePage from "./views/movie-streaming-page/MovieHomePage";
import AnimeHomePage from "./views/anime-streaming-page/AnimeHomePage";
import AnimeInfo from "./views/anime-streaming-page/AnimeInfo";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    children: [
      { path: "pageSelection", element: <PageSelection /> },
      {
        path: "movie",
        element: <MovieHomePage />,
      },
      {
        path: "anime",
        element: <AnimeHomePage />,
        children: [
          {
            path: ":chosenAnime",
            element: <AnimeInfo />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
