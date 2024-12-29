import { CountActions } from "./components/count-actions";
import { CountDisplay } from "./components/count-display";

function App() {
  return (
    <div className="bg-zinc-900 flex flex-col items-center justify-center h-screen gap-4">
      <CountDisplay />
      <CountActions />
    </div>
  );
}

export default App;
