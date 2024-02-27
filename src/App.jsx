import React from "react";
import GlobalStyles from "./general/components/GlobalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./general/utils/theme";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import Howto from "./pages/howto/Howto";
import Game from "./pages/Ingame/Game";
import Category from "./pages/category/Category";
// bu yerda componentlar va bazi boshqa kerakli funksiyalar yuklab olinmoqda

const router = createMemoryRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/how-to",
    element: <Howto />,
  },
  {
    path: "/category",
    element: <Category />,
  },
  {
    path: "/game",
    element: <Game />,
  },
]);
// bu yerda esa react router domda qanday pagelar shakllantirilishi yozilgan

const App = () => {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </>
  );
};
// bu yerda App componenti yasalgan va undan tashqari boshqa page bazibir root dagi ozgaruvchilarni berib qoyilgan

export default App;
// bu yerda esa component export yani boshqa faylda ishlashi uchun yozilgan
