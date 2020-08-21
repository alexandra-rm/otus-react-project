import { combineReducers } from "@reduxjs/toolkit";
import { conwayFieldSlice } from "smart/ConwayLife/slice";
import { conwaySettingsSlice } from "smart/ControlsForm/slice";
import { userSlice } from "smart/ConnectedLogin/slice";

export const reducer = combineReducers({
    conwaySettings: conwaySettingsSlice.reducer,
    conwayField: conwayFieldSlice.reducer,
    user: userSlice.reducer,
});

export type StoreState = ReturnType<typeof reducer>;
