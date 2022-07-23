/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 18:10:27
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 18:10:55
 * @FilePath: \uwcssa_ca\frontend\src\redux\hooks.ts
 * @Description:
 *
 */

import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
