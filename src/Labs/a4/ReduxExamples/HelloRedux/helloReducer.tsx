import {createSlice} from "@reduxjs/toolkit";
const initialState = {
    message: "Hello World!"
};
const helloSlice = createSlice({
    name: "Hello",
    initialState,
    reducers: {},
});
export default helloSlice.reducer;