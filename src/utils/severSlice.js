import { createSlice } from "@reduxjs/toolkit";

const serverSlice = createSlice({
    name:"server",
    initialState:{
        chartData:null,
        dark:false
    },
    reducers:{
        addChartData:(state,action)=>{
            state.chartData=action.payload
        },
        toggleTheme:(state,action)=>{
            state.dark=!state.dark
        }
    }})

    export  const {addChartData,toggleTheme}=serverSlice.actions;
    export default serverSlice.reducer;

