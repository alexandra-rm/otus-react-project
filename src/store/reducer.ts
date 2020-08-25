import { combineReducers } from "@reduxjs/toolkit";
import { conwayFieldSlice } from "smart/ConwayLife/slice";
import { conwaySettingsSlice } from "smart/ControlsForm/slice";

export const reducer = combineReducers({
    conwaySettings: conwaySettingsSlice.reducer,
    conwayField: conwayFieldSlice.reducer,
});

export type StoreState = ReturnType<typeof reducer>;
