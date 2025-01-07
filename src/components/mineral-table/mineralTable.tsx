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
  minerals: { [key: string]: string };
  t: (key: string) => string;
}

const MineralTable: React.FC<MineralTableProps> = ({ minerals, t }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            {Object.keys(minerals).map((key) => (
              <TableCell align="center" key={key}>
                {t(key)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            {Object.values(minerals).map((value, index) => (
              <TableCell align="center" key={index}>
                {parseFloat(value).toFixed(2)} g
              </TableCell>
            ))}
          </TableRow>
          <TableRow>
            {Object.values(minerals).map((value, index) => (
              <TableCell align="center" key={index}>
                {(parseFloat(value) / 28.35).toFixed(5)} oz
              </TableCell>
            ))}
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MineralTable;
