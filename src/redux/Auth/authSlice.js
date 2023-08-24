import { createSlice } from "@reduxjs/toolkit";
import { register, login, logOut  } from "./authOperation";

const INITIAL_STATE = {
    user: { name: null, email: null, password: null },
    token: null,
    isLogin: false,

}

const authSlice = createSlice({
    name: 'auth',
    initialState: INITIAL_STATE,
    extraReducers: builder => {
        builder
            // REGISTER  
            .addCase(register.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
            })
        
            // LOGIN
            .addCase(login.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.token = action.payload.token;
                state.isLogin = true;
            })
        
            // LogOut
            .addCase(logOut.fulfilled, (state) => {
                state.user = { name: null, email: null };
                state.token = null;
                state.isLogin = false;
            })
            
    }
})

export const authReducer = authSlice.reducer;