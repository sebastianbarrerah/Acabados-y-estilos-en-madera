import { createSlice } from '@reduxjs/toolkit';



export const urlSlice = createSlice({
    name: 'urlImagenes',
    initialState: [],
    reducers: {
        saveUrl: ( state, actions ) => {
            return state = actions.payload;
        }
    }
})

export const { saveUrl } = urlSlice.actions
export default urlSlice.reducer


