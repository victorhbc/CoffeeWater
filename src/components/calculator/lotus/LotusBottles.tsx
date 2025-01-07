import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Unit } from "../../../helpers/enums/units";
import caculateLotusBottleSolution from "../../../helpers/functions/calculator/calculateLotusBottleSolutions";
import convertOzToMl from "../../../helpers/functions/converters/ozToMl";
import MineralTable from "../../mineral-table/mineralTable";

function LotusBottles() {
  const [dropSize, setDropSize] = useState<string>("");

  const { t } = useTranslation("common");

  const [dropUnit, setDropUnit] = useState<string | number>("");
  const [openDrop, setOpenDrop] = useState(false);

  const [bottleUnit, setBottleUnit] = useState<string | number>("");
  const [openBottle, setOpenBottle] = useState(false);
  const [bottleSize, setBottleSize] = useState<string>("");

  const [magnesium, setMagnesium] = useState<string>("");
  const [calcium, setCalcium] = useState<string>("");
  const [sodium, setSodium] = useState<string>("");
  const [potassium, setPotassium] = useState<string>("");

  const [openTable, setOpenTable] = useState(false);

  const calculate = () => {
    const drop = convertOzToMl(dropSize, dropUnit as Unit);
    const bottle = convertOzToMl(bottleSize, bottleUnit as Unit);

    const magnesium = caculateLotusBottleSolution(9.0, 4, drop, bottle, 0.0986);
    const potassium = caculateLotusBottleSolution(7.0, 2, drop, bottle, 0.3906);
    const sodium = caculateLotusBottleSolution(4.0, 2, drop, bottle, 0.2737);
    const calcium = caculateLotusBottleSolution(14.0, 4, drop, bottle, 0.2726);

    setMagnesium(magnesium.toString());
    setPotassium(potassium.toString());
    setSodium(sodium.toString());
    setCalcium(calcium.toString());

    setOpenTable(true);
  };
  return (
    <Box
      maxWidth="90%"
      width="500px"
      margin="auto"
      display="flex"
      flexDirection={"column"}
      gap={2}
      marginBottom={2}
    >
      <Box
        width="100%"
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TextField
          fullWidth
          placeholder="0.00"
          required
          variant="standard"
          label={t("drop_wheight")}
          value={dropSize}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            const regex = /^\d*\.?\d{0,}$/;
            if (regex.test(value)) {
              setDropSize(value);
            }
          }}
        />
        <FormControl sx={{ minWidth: 120 }} required>
          <InputLabel>{t("unit")}</InputLabel>
          <Select
            open={openDrop}
            variant="standard"
            onClose={() => setOpenDrop(false)}
            onOpen={() => setOpenDrop(true)}
            value={dropUnit}
            label={t("unit")}
            onChange={(event: SelectChangeEvent<typeof dropUnit>) =>
              setDropUnit(event.target.value)
            }
          >
            <MenuItem value={Unit.OZ}>fl oz</MenuItem>
            <MenuItem value={Unit.ML}>ml</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box
        width="100%"
        display={"flex"}
        gap={2}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <TextField
          fullWidth
          placeholder="0.00"
          required
          variant="standard"
          label={t("bottle_size")}
          value={bottleSize}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            const value = event.target.value;
            const regex = /^\d*\.?\d{0,}$/;
            if (regex.test(value)) {
              setBottleSize(value);
            }
          }}
        />
        <FormControl sx={{ minWidth: 120 }} required>
          <InputLabel>{t("unit")}</InputLabel>
          <Select
            required
            open={openBottle}
            variant="standard"
            onClose={() => setOpenBottle(false)}
            onOpen={() => setOpenBottle(true)}
            value={bottleUnit}
            label={t("unit")}
            onChange={(event: SelectChangeEvent<typeof bottleUnit>) =>
              setBottleUnit(event.target.value)
            }
          >
            <MenuItem value={Unit.OZ}>fl oz</MenuItem>
            <MenuItem value={Unit.ML}>ml</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Button
        variant="outlined"
        onClick={calculate}
        color="primary"
        disabled={
          !dropSize ||
          parseFloat(dropSize) <= 0 ||
          !bottleSize ||
          parseFloat(bottleSize) <= 0 ||
          !dropUnit ||
          !bottleUnit
        }
      >
        {t("calculate")}
      </Button>

      {openTable && (
        <MineralTable
          calcium={calcium}
          magnesium={magnesium}
          potassium={potassium}
          sodium={sodium}
          t={t}
        />
      )}
    </Box>
  );
}

export default LotusBottles;
