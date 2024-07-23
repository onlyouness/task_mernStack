import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user:null,
    token:null,
}

export const AuthSlice = createSlice({
    name:"auth",initialState,
    reducers:{
        setLogin:(state,action)=>{
            state.user = action.payload.user,
            state.token = action.payload.token,
            localStorage.setItem('user', JSON.stringify(action.payload.user));
            localStorage.setItem('token',action.payload.token);
        },
        setLogOut:(state)=>{
            state.user = null,
            state.token = null,
            localStorage.removeItem('user');
            localStorage.removeItem('token');
        },
      

    }
})

export const {setLogin,setLogOut} = AuthSlice.actions;
export default AuthSlice.reducer;