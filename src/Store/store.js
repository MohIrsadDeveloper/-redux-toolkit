import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/Counter/counterSlice";
import nameReducer from '../features/Names/nameSlice';

const store = configureStore({
    reducer : {
        counter : counterReducer,
        name : nameReducer
    }
});

export default store;