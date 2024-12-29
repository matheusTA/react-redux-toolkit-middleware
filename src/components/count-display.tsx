import { useAppSelector } from "../store";

export function CountDisplay() {
  const value = useAppSelector((state) => state.counter.value);
  return <div className="text-9xl font-medium text-zinc-200">{value}</div>;
}
