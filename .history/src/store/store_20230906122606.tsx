import { configureStore } from "@reduxjs/toolkit";
import { UserLeaveRequestSlice } from "./features/userLeaveRequestSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store = configureStore({
  reducer: {
    confirmLeaveArr: UserLeaveRequestSlice.reducer,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<ReturnType<
  typeof store.getState
>> = useSelector;
