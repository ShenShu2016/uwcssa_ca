/*
 * @Author: 李佳修
 * @Date: 2022-05-21 14:23:37
 * @LastEditTime: 2022-05-21 15:18:23
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/frontend/src/redux/alert/alertSlice.tsx
 */
import { createSlice } from "@reduxjs/toolkit";

interface AlertState {
  isOpen: boolean;
  type: "success" | "info" | "warning" | "error";
  message: string;
}

const initialState: AlertState = {
  isOpen: false,
  type: "info",
  message: "alert message",
};

const alertSlice = createSlice({
  name: "alert",
  initialState,
  reducers: {
    setAlert(state, action) {
      if (action.payload.isOpen) {
        state.type = action.payload.type;
        state.message = action.payload.message;
      }
      state.isOpen = action.payload.isOpen;
    },
  },
});

export const { setAlert } = alertSlice.actions;
export default alertSlice.reducer;
