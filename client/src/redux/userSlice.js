import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"


export const userLogin = createAsyncThunk('user/userLogin', async (formData) => {
    const res = await axios.post('http://localhost:5000/login', formData, { withCredentials: true })
    return res
})


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: null
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
        },
        logout: (state, action) => {
            state.user = null
        }

    },
    extraReducers:{
        [userLogin.pending]:(state,action)=>{
            console.log("loading")
            
        },
        [userLogin.fulfilled]:(state,action)=>{
            console.log(action.payload.data)
            state.user=action.payload.data
        },
        [userLogin.rejected]:(state,action)=>{
            console.log("rejected")
        }
    }
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer