import { createSlice, PayloadAction, CaseReducer } from "@reduxjs/toolkit"
import { createAsyncThunk } from "@reduxjs/toolkit";
import { instance } from "../axios";

export type TData = {
    created_at: string,
    updated_at: string,
    html_url: string,
    language: string,
    id: number,
    name: string
}

interface TProfileState {
    data: Array<TData> | null,
    loading: 'idle' | 'pending' | 'succeeded' | 'failed',
    error: boolean 
}

const profileState:TProfileState = {
    data: null,
    loading: 'idle',
    error:false,
}
export const getUserAxiosRepo = createAsyncThunk(
    'profile/getUserAxios',
    async function(){
         const res = await instance.get('users/EvelinaKir/repos', {
        })
        const result = res.data ? res.data : res.status
        return result
    }
)

export const profileSlice = createSlice({
    name: 'profile',
    initialState: profileState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getUserAxiosRepo.pending, (state) => {
            state.loading = "pending"
        }),
        builder.addCase(getUserAxiosRepo.fulfilled, (state, action) => {
            state.loading = 'succeeded',
            state.data = action.payload
        }),
        builder.addCase(getUserAxiosRepo.rejected, (state) => {
            state.error = true,
            state.loading = 'failed'
        })
    }
})

export default profileSlice.reducer