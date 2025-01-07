import { Unit } from "../../enums/units";

export default function convertOzToMl(value: string, unit: Unit): number {
  return unit === Unit.OZ ? parseFloat(value) * 29.5735 : parseFloat(value);
}
