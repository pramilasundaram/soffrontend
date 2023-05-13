import {  createSlice } from '@reduxjs/toolkit';


const initialState = {
 name:"user",
 value:null
};

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    value:null
  },
  
  reducers: {
    
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
  },
  
});

export const { login,logout } = userSlice.actions;
export const selectUser = (state) => state.user.value;
export default userSlice.reducer;
