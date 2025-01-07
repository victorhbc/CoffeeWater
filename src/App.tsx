import { Box, Divider } from "@mui/material";

import "./App.css";
import Header from "./components/header/Header";
import Calculator from "./components/calculator/Caculator";
import DevBanner from "./components/dev-banner/DevBanner";

function App() {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      justifyContent={"center"}
      flexDirection={"column"}
      height={"100vh"}
    >
      <DevBanner />
      <Header />
      <Calculator />
      <Divider sx={{ marginX: 12 }} />
      <Calculator />
    </Box>
  );
}

export default App;
