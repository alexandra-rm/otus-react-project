import { combineReducers } from "@reduxjs/toolkit";
import { conwayFieldSlice, conwaySettingsSlice } from "smart/ConwayLife/slice";

export const reducer = combineReducers({
  conwaySettings: conwaySettingsSlice.reducer,
  conwayField: conwayFieldSlice.reducer,
});

export type StoreState = ReturnType<typeof reducer>;
