import { createListenerMiddleware, isAnyOf } from "@reduxjs/toolkit";
import { decrement, increment } from "./counter.slice";
import { RootState } from "..";

const counterListenerMiddleware = createListenerMiddleware();

counterListenerMiddleware.startListening({
  matcher: isAnyOf(decrement, increment),
  effect: (_, listenerApi) => {
    const state = listenerApi.getState() as RootState;

    localStorage.setItem("@counter", JSON.stringify(state.counter));
  },
});

export default counterListenerMiddleware;
