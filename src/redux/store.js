import { configureStore } from "@reduxjs/toolkit";
import flightReducer from "./slices/flightSlice";

export default configureStore({ reducer: { flightReducer } });
