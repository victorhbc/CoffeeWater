import { Box, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

function DevBanner() {
  const { t } = useTranslation("common");

  return (
    <Box
      position={"absolute"}
      top={0}
      right={0}
      zIndex={1}
      display={"flex"}
      width={"100%"}
      justifyContent={"center"}
      flexDirection={"column"}
      color={"black"}
      sx={{ backgroundColor: "yellow" }}
    >
      <Typography variant="h5">{t("in_development")}</Typography>
    </Box>
  );
}

export default DevBanner;
