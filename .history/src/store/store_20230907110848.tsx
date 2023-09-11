import { configureStore } from "@reduxjs/toolkit";
import { UserLeaveRequestSlice } from "./features/userLeaveRequestSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    leaveRequestSlice: UserLeaveRequestSlice.reducer,
  },
});

export const useAppDispach: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<
  typeof store.getState
>> = useSelector;
