/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 14:32:18
 * @FilePath: /uwcssa_ca/src/Routes.tsx
 * @Description:
 *
 */

import {
  Navigate,
  Routes as ReactRoutes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect } from "react";

import AdminRoutes from "admin/AdminRoutes";
import ProtectedRoute from "components/ProtectedRoute";
import ViewRoutes from "views/ViewRoutes";
import AdminLayout from "layouts/AdminLayout/AdminLayout";
import Main from "layouts/Main/Main";

function Routes(): JSX.Element {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location]);
  return (
    <ReactRoutes>
      {ViewRoutes().map((item, i) => (
        <Route
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          path={item.path}
          element={
            <ProtectedRoute
              redirectPath={item.redirectPath}
              isAllowed={item.isAllowed}
            >
              <Main colorInvert={item.colorInvert} bgcolor="transparent">
                {item.renderer()}
              </Main>
              {/* 需要处理一下 colorInvert={true} 的问题 */}
            </ProtectedRoute>
          }
        />
      ))}
      {AdminRoutes().map((item, i) => (
        <Route
          // eslint-disable-next-line react/no-array-index-key
          key={i}
          path={item.path}
          element={
            <ProtectedRoute
              redirectPath={item.redirectPath}
              isAllowed={item.isAllowed}
            >
              <AdminLayout>{item.renderer()}</AdminLayout>
            </ProtectedRoute>
          }
        />
      ))}
      <Route path="*" element={<Navigate replace to="/404" />} />
    </ReactRoutes>
  );
}

export default Routes;
