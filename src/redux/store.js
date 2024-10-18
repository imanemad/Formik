import { configureStore } from "@reduxjs/toolkit";
import darkmodeReduser from './theme/themeSlice'
import userReducer from './users/usersSlice'

const store=configureStore({
    reducer:{
        darkmode:darkmodeReduser,
        users:userReducer
    }
})

export default store