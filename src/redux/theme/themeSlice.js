import { createSlice } from "@reduxjs/toolkit"

const initialState={
    mode:"light"
}

const darkmodeSlice=createSlice({
    name:"theme",
    initialState,
    reducers:{
        setDarkMode:(state)=>{
            state.mode="dark"
        },
        setLightMode:(state)=>{
            state.mode="light"
        },
        setTheme:(state,action)=>{
            state.mode=action.payload
        }
    }
})

export default darkmodeSlice.reducer
export const{setDarkMode,setLightMode,setTheme}=darkmodeSlice.actions