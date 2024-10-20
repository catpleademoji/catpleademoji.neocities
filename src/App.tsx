import "./App.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import RootPage from "./Pages/RootPage";
import HomePage from "./Pages/HomePage";
import EmojisPage from "./Pages/EmojisPage";
import GamesPage from "./Pages/GamesPage";
import NotFoundPage from "./Pages/NotFoundPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootPage />,
    children: [
      { index: true, loader: () => redirect("/home") },
      { path: "/home", element: <HomePage /> },
      { path: "/emojis", element: <EmojisPage /> },
      { path: "/games", element: <GamesPage /> },
      { path: "/other", element: <></> },
    ],
    errorElement: <NotFoundPage />,
  }
])

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
