import {configureStore} from '@reduxjs/toolkit';
import UrlReducer from './slices/urls/Urlslice';
export const store = configureStore({
    reducer:{
        urlImagenes:UrlReducer,
    },
})


