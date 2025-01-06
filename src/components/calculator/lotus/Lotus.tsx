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

function Lotus() {
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
    let bootle = bottleSize;
    let drop = dropSize;

    if (dropUnit === Unit.OZ) {
      drop = (parseFloat(drop) * 29.5735).toString();
    }

    if (bottleUnit === Unit.OZ) {
      bootle = (parseFloat(bootle) * 29.5735).toString();
    }

    setMagnesium(
      (
        Math.floor(
          (((9.0 / (4 * parseFloat(drop)) / 0.0986) * parseFloat(bootle)) /
            1000) *
            1000
        ) / 1000
      ).toString()
    );

    setPotassium(
      (
        Math.floor(
          (((7.0 / (2 * parseFloat(drop)) / 0.3906) * parseFloat(bootle)) /
            1000) *
            1000
        ) / 1000
      ).toString()
    );

    setSodium(
      (
        Math.floor(
          (((4.0 / (2 * parseFloat(drop)) / 0.2737) * parseFloat(bootle)) /
            1000) *
            1000
        ) / 1000
      ).toString()
    );

    setCalcium(
      (
        Math.floor(
          (((14.0 / (4 * parseFloat(drop)) / 0.2726) * parseFloat(bootle)) /
            1000) *
            1000
        ) / 1000
      ).toString()
    );

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
      <Button variant="outlined" onClick={calculate} color="primary">
        {t("calculate")}
      </Button>

      {openTable && (
        <Box
          component="table"
          width="100%"
          border={1}
          borderColor="grey.400"
          borderRadius={1}
          marginTop={2}
        >
          <Box component="thead">
            <Box component="tr">
              <Box component="th" border={1} borderColor="grey.400" padding={1}>
                {t("magnesium")}
              </Box>
              <Box component="th" border={1} borderColor="grey.400" padding={1}>
                {t("calcium")}
              </Box>
              <Box component="th" border={1} borderColor="grey.400" padding={1}>
                {t("sodium")}
              </Box>
              <Box component="th" border={1} borderColor="grey.400" padding={1}>
                {t("potassium")}
              </Box>
            </Box>
          </Box>
          <Box component="tbody">
            <Box component="tr">
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {magnesium} g
              </Box>
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {calcium} g
              </Box>
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {sodium} g
              </Box>
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {potassium} g
              </Box>
            </Box>
            <Box component="tr">
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {(parseFloat(magnesium) / 28.35).toFixed(5) || ""} oz
              </Box>
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {(parseFloat(calcium) / 28.35).toFixed(5) || ""} oz
              </Box>
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {(parseFloat(sodium) / 28.35).toFixed(5) || ""} oz
              </Box>
              <Box component="td" border={1} borderColor="grey.400" padding={1}>
                {(parseFloat(potassium) / 28.35).toFixed(5) || ""} oz
              </Box>
            </Box>
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default Lotus;
