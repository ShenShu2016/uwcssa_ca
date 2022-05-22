/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 14:08:10
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-22 13:42:22
 * @FilePath: /uwcssa_ca/frontend/src/Routes.tsx
 * @Description:
 *
 */

import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';

import ProtectedRoute from 'components/ProtectedRoute';
import React from 'react';
import ViewRoutes from 'views/ViewRoutes';

// import docsRoutes from 'docs/routes';
// import blocksRoutes from 'blocks/routes';
// import demosRoutes from 'demos/routes';

const Routes = (): JSX.Element => {
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
              {item.renderer()}
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
