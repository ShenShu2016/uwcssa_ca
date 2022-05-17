import { Navigate, Routes as ReactRoutes, Route } from 'react-router-dom';

import React from 'react';
import viewsRoutes from 'views/routes';

// import docsRoutes from 'docs/routes';
// import blocksRoutes from 'blocks/routes';
// import demosRoutes from 'demos/routes';

const Routes = (): JSX.Element => {
  return (
    <ReactRoutes>
      {viewsRoutes.map((item, i) => (
        <Route key={i} path={item.path} element={item.renderer()} />
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
      <Route path="/" element={<Navigate replace to="/" />} />
      <Route path="*" element={<Navigate replace to="/not-found-cover" />} /> */}
    </ReactRoutes>
  );
};

export default Routes;
