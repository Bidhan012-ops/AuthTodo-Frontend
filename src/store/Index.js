import { configureStore, createSlice } from "@reduxjs/toolkit";

const inputData = localStorage.getItem("setinput");
const dateData = localStorage.getItem("setdate");

const inputeslice = createSlice({
  name: "input",
  initialState: inputData ? JSON.parse(inputData) : false,
  reducers: {
    input: (state, action) => {
      localStorage.setItem("setinput", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

const dateslice = createSlice({
  name: "date",
  initialState: dateData ? JSON.parse(dateData) : false,
  reducers: {
    date: (state, action) => {
      localStorage.setItem("setdate", JSON.stringify(action.payload));
      return action.payload;
    },
  },
});

const timeSlice = createSlice({
  name: "time",
  initialState: null,
  reducers: {
    time: (state, action) => {
      return action.payload;
    },
  },
});
const store = configureStore({
  reducer: {
    input: inputeslice.reducer,
    date: dateslice.reducer,
    time: timeSlice.reducer,
  },
});

export default store;
export const inputaction = inputeslice.actions;
export const dateaction = dateslice.actions;
export const timeaction = timeSlice.actions;