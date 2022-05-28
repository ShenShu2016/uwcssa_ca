/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-05-28 11:51:36
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/layouts/Main/Main.tsx
 */

import { Footer, Sidebar, Topbar } from './components';
import React, { useState } from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from 'components/Container';
import Divider from '@mui/material/Divider';
import TopNav from 'components/TopNav';
import pages from '../navigation';
import useMediaQuery from '@mui/material/useMediaQuery';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { useTheme } from '@mui/material/styles';

interface Props {
  children: React.ReactNode;
  colorInvert?: boolean;
  bgcolor?: string;
}

// // eslint-disable-next-line @typescript-eslint/no-unused-vars
// const Content = styled(Box)(({theme}) => ({
//   width: '100%',
//   // minHeight: '100vh',
//   padding: '24px 5%',
//   background: '#f5f5f5'
// }));
//这里改了会导致后面的东西都会有奇奇怪怪的毛病
const Main = ({
  children,
  colorInvert = false,
  bgcolor = 'transparent',
}: Props): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = (): void => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = (): void => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  return (
    <Box>
      <Box bgcolor={bgcolor} position={'relative'} zIndex={theme.zIndex.appBar}>
        <Container paddingTop={'8px !important'} paddingBottom={'0 !important'}>
          <TopNav colorInvert={colorInvert} />
        </Container>
      </Box>
      <AppBar
        position={'sticky'}
        sx={{
          top: 0,
          // boxShadow: '0px 15px 10px -15px #bdbdbd',
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container paddingY={1}>
          <Topbar
            onSidebarOpen={handleSidebarOpen}
            pages={pages}
            colorInvert={trigger ? false : colorInvert}
          />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant="temporary"
        pages={pages}
      />
      {/* <Container paddingY={0}> */}
      <main>
        {children}
        <Divider />
      </main>
      {/* </Container>
      <Divider /> */}
      <Container paddingY={4}>
        <Footer />
      </Container>
    </Box>
  );
};

export default Main;
