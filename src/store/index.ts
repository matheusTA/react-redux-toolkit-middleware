import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { counterReducer, preLoadCounter } from "./counter/counter.slice";
import counterListenerMiddleware from "./counter/counter.middleware";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  preloadedState: {
    counter: preLoadCounter(),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(counterListenerMiddleware.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
