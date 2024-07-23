import { configureStore } from "@reduxjs/toolkit";
import authReducer from './state/AuthSlice'

export default configureStore({
    reducer:{auth:authReducer}
})