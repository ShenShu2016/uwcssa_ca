/*
 * @Author: 李佳修
 * @Date: 2022-05-18 13:56:36
 * @LastEditTime: 2022-05-28 17:11:38
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/views/AdministratorPage/AdministratorPage.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Main from 'layouts/Main';
import Divider from '@mui/material/Divider';
import Sidebar from './components/Siderbar';
import {
  Routes,
  Route,
  Navigate
} from 'react-router-dom';
import items from './route-items';

const AdministratorPage = (): React.ReactElement => {
  return (
    <Main>
      <Divider />
      <Box sx={{ display: 'flex' }} minHeight={'calc(100vh - 320px)'} width='100%'>
        <Box>
          <Sidebar />
        </Box>
        <Box sx={{ flexGrow: 1, p: 3 }}>
          <Routes>
            <Route path="/" element={<Navigate to="/admin/dashboard" />} />
            {
              items.map(item => 
                <Route key={item.key} path={item.path} element={item.component} />
              )
            }
          </Routes>
        </Box>
      </Box>
    </Main>
  );
};

export default AdministratorPage;