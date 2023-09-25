import { createSlice } from '@reduxjs/toolkit';
import { isLoading } from 'expo-font';
import { authUserThunk } from '../operations';
const initialState = {
    user: null,
    isLoading: false,
    error: null,
    registrated: false,
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {},
    extraReducers: (builder)=>{
        builder
        .addCase(authUserThunk.pending, state =>{
            state.isLoading = true;
            state.error = null;
        })
        .addCase(authUserThunk.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.user = action.payload.user;
            state.error = null;
            state.registrated = true;
        })
        .addCase(authUserThunk.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
          });
    }
})

export const authReducer = authSlice.reducer;