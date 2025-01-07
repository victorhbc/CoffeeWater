export default function caculateLotusBottleSolution(
  factor: number,
  lotusDrops: number,
  drop: number,
  bottleSize: number,
  constant: number
): number {
  return (
    ((((factor / (lotusDrops * constant * drop)) * bottleSize) / 1000) * 1000) /
    1000
  );
}
