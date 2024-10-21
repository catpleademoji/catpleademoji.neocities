// import { redirect } from "react-router-dom";
import EmojisPage from "./Pages/EmojisPage";
import GamesPage from "./Pages/GamesPage";
import HomePage from "./Pages/HomePage";
import NotFoundPage from "./Pages/NotFoundPage";
import RootPage from "./Pages/RootPage";

export const routes = [
  {
    path: "/",
    element: <RootPage />,
    children: [
      { path: "/", element: <HomePage /> },
      { path: "/emojis", element: <EmojisPage /> },
      { path: "/games", element: <GamesPage /> },
      { path: "/404", element: <NotFoundPage /> },
    ],
    errorElement: <NotFoundPage />,
  }
];
