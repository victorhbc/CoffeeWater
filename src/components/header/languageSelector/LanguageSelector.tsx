import { Box, Tab, Tabs } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";

function LanguageSelector() {
  const { i18n } = useTranslation("common");

  const [alignment, setAlignment] = useState<string | null>("pt");

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setAlignment(newValue);
    i18n.changeLanguage(newValue);
  };

  return (
    <Box
      position={"absolute"}
      top={0}
      right={0}
      padding={2}
      mt={2}
      zIndex={1}
      display={"flex"}
      gap={1}
    >
      <Tabs value={alignment} onChange={handleChange}>
        <Tab value="en" label="English" />
        <Tab value="pt" label="Português" />
      </Tabs>
    </Box>
  );
}

export default LanguageSelector;
