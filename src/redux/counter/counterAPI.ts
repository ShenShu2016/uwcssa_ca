/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 18:10:27
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 18:11:30
 * @FilePath: \uwcssa_ca\frontend\src\redux\counter\counterAPI.ts
 * @Description:
 *
 */
// A mock function to mimic making an async request for data
export function fetchCount(amount = 1) {
  return new Promise<{ data: number }>((resolve) =>
    setTimeout(() => resolve({ data: amount }), 500),
  );
}
