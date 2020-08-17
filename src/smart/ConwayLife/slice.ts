import { createSlice } from "@reduxjs/toolkit";

export const conwayFieldSlice = createSlice({
    name: "conwayField",
    initialState: [
        [
            {
                alive: false,
                step: 0,
                animated: false,
            },
        ],
    ],
    reducers: {
        update: (state, action) => {
            return action.payload;
        },
    },
});
