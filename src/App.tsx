import { Box, Divider } from "@mui/material";

import "./App.css";
import Header from "./components/header/Header";
import BottlesCalculator from "./components/bottles-calculator/BottlesCaculator";
import DevBanner from "./components/dev-banner/DevBanner";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation("common");
  return (
    <Box display={"flex"} width={"100%"} justifyContent={"center"} flexDirection={"column"} height={"100vh"}>
      <DevBanner />
      <Header />
      <BottlesCalculator />
      <Divider sx={{ marginX: 12 }} />
      <h2>{t("solution_placeholder")}</h2>
    </Box>
  );
}

export default App;
