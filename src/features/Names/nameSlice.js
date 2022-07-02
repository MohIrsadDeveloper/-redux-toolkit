import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name : "abdul"
};

export const nameSlice = createSlice({
    name : "nameChange",
    initialState,
    reducers : {
        changeToAsma : (state) => {
            state.name = "Asma"
        },
        changeToAiysha : (state) => {
            state.name = "Aiysha"
        }
    }
});

export const {changeToAsma, changeToAiysha} = nameSlice.actions;

export default nameSlice.reducer;