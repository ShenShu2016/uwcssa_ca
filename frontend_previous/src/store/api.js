import { createAction } from "@reduxjs/toolkit";

export const apiCallBegin = createAction("api/CallBegin");
export const apiCallSuccess = createAction("api/CallSuccess");
export const apiCallFailed = createAction("api/CallFailed");