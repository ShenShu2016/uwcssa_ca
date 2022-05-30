/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 23:43:50
 * @FilePath: /uwcssa_ca/src/Routes.tsx
 * @Description:
 *
 */

import { AdminLayout, Main } from 'layouts';
import {
  Navigate,
  Routes as ReactRoutes,
  Route,
  useLocation,
} from 'react-router-dom';
import React, { useEffect } from 'react';

import AdminRoutes from 'admin/AdminRoutes';
import ProtectedRoute from 'components/ProtectedRoute';
import ViewRoutes from 'views/ViewRoutes';

// import docsRoutes from 'docs/routes';
// import blocksRoutes from 'blocks/routes';
// import demosRoutes from 'demos/routes';

const Routes = (): JSX.Element => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [location]);
  return (
    <ReactRoutes>
      {ViewRoutes().map((item, i) => (
        <Route
          key={i}
          path={item.path}
          element={
            <ProtectedRoute
              redirectPath={item.redirectPath}
              isAllowed={item.isAllowed}
            >
              <Main>{item.renderer()}</Main>
            </ProtectedRoute>
          }
        />
      ))}
      {AdminRoutes().map((item, i) => (
        <Route
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
      {/* {docsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}
      {blocksRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))}
      {demosRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
      ))} 
      <Route path="/" element={<Navigate replace to="/" />} />*/}
      <Route path="*" element={<Navigate replace to="/404" />} />
    </ReactRoutes>
  );
};

export default Routes;
