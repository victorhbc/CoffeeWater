import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  TableContainer,
  Paper,
} from "@mui/material";

interface MineralTableProps {
  magnesium: string;
  calcium: string;
  sodium: string;
  potassium: string;
  t: (key: string) => string;
}

const MineralTable: React.FC<MineralTableProps> = ({
  magnesium,
  calcium,
  sodium,
  potassium,
  t,
}) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="center">{t("magnesium")}</TableCell>
            <TableCell align="center">{t("calcium")}</TableCell>
            <TableCell align="center">{t("sodium")}</TableCell>
            <TableCell align="center">{t("potassium")}</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell align="center">
              {parseFloat(magnesium).toFixed(2)} g
            </TableCell>
            <TableCell align="center">
              {parseFloat(calcium).toFixed(2)} g
            </TableCell>
            <TableCell align="center">
              {parseFloat(sodium).toFixed(2)} g
            </TableCell>
            <TableCell align="center">
              {parseFloat(potassium).toFixed(2)} g
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell align="center">
              {(parseFloat(magnesium) / 28.35).toFixed(5) || ""} oz
            </TableCell>
            <TableCell align="center">
              {(parseFloat(calcium) / 28.35).toFixed(5) || ""} oz
            </TableCell>
            <TableCell align="center">
              {(parseFloat(sodium) / 28.35).toFixed(5) || ""} oz
            </TableCell>
            <TableCell align="center">
              {(parseFloat(potassium) / 28.35).toFixed(5) || ""} oz
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MineralTable;
