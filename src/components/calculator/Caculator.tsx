import { Box, Collapse, IconButton } from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { ExpandMore as ExpandMoreIcon } from "@mui/icons-material";
import LotusBottles from "./lotus/LotusBottles";

function Calculator() {
  const { t } = useTranslation("common");

  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <Box>
      <Box>
        <Box
          width="100%"
          justifyContent={"center"}
          alignItems={"center"}
          display="flex"
          gap={2}
        >
          <IconButton
            onClick={handleToggle}
            aria-expanded={isOpen}
            aria-label="toggle"
            style={{
              width: "4rem",
              height: "4rem",
              transform: isOpen ? "rotate(180deg)" : "rotate(0)",
              transition: "transform 0.3s",
            }}
          >
            <ExpandMoreIcon />
          </IconButton>
          <h2>{t("drop_wheight_placeholder")}</h2>
        </Box>

        <Collapse in={isOpen} timeout="auto" unmountOnExit>
          <LotusBottles />
        </Collapse>
      </Box>
    </Box>
  );
}

export default Calculator;
