import { configureStore } from "@reduxjs/toolkit";
import { UserLeaveRequestSlice } from "./features/userLeaveRequestSlice";

export const store = configureStore({
    reducer: {
    leaveRequestSlice:UserLeaveRequestSlice.reducer
        
    }
})