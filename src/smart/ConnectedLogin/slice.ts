import {createSlice} from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null
    },
    reducers: {
        login: (state, action) => {
            console.log("login", action);
            return {
                username: action.payload
            };
        },
        logout: () => {
            return {
                username: null
            }
        }
    }
});