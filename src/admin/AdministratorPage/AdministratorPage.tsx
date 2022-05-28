/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-05-28 16:13:28
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/AdministratorPage/AdministratorPage.tsx
 */

import { Navigate, Route, Routes } from 'react-router-dom';

import { AdminLayout } from 'layouts';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Main from 'layouts/Main';
import React from 'react';
import Sidebar from './components/Siderbar';

//import items from './route-items';

const AdministratorPage = (): React.ReactElement => {
  return (
    <AdminLayout>
      <Divider />
      <Box
        sx={{ display: 'flex' }}
        minHeight={'calc(100vh - 320px)'}
        width="100%"
      >
        <Box>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            {/* <Route path="/" element={<Navigate to="/admin/dashboard" />} />
            {items.map((item) => (
              <Route key={item.key} path={item.path} element={item.component} />
            ))} */}
          </Routes>
        </Box>
      </Box>
    </AdminLayout>
  );
};

export default AdministratorPage;
