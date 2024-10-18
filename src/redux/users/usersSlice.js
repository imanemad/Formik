import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState={
    loading:false,
    isFetching:false,
    users:[],
    error:""
}

export const getUsers=createAsyncThunk('user/getUsers', async ()=>{
    const res=await fetch(`https://jsonplaceholder.typicode.com/users`)
    return await res.json()
})

const userSlice=createSlice({
    name:"user",
    initialState,
    extraReducers:builder=>{
        builder.addCase(getUsers.pending,(state)=>{
            if (state.users.length>0) state.isFetching=true
            else{
                state.loading=true
                state.isFetching=true
            }
        })
        builder.addCase(getUsers.fulfilled,(state,action)=>{
            state.loading=false
            state.isFetching=false
            state.users=action.payload
            state.error=''
        })
        builder.addCase(getUsers.rejected,(state,action)=>{
            state.loading=false
            state.isFetching=false
            state.users=[]
            state.error=action.error.message
        })
    }
})

export default userSlice.reducer