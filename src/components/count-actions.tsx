import { useAppDispatch } from "../store";
import { decrement, increment } from "../store/counter/counter.slice";

export function CountActions() {
  const dispatch = useAppDispatch();

  function handleDecrement() {
    dispatch(decrement());
  }

  function handleIncrement() {
    dispatch(increment());
  }

  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        className="flex items-center bg-zinc-400 py-2 px-4 rounded-md font-extrabold text-xl text-zinc-950 hover:bg-zinc-500"
        onClick={handleDecrement}
      >
        - 1
      </button>
      <button
        type="button"
        className="bg-zinc-400 py-2 px-4 rounded-md font-extrabold text-xl text-zinc-950 hover:bg-zinc-500"
        onClick={handleIncrement}
      >
        + 1
      </button>
    </div>
  );
}
