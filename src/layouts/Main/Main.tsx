/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-07-24 14:30:05
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/layouts/Main/Main.tsx
 */

import React, { useState } from "react";

import {
  AppBar,
  Box,
  Divider,
  useMediaQuery,
  useTheme,
  useScrollTrigger,
} from "@mui/material";

import Container from "components/Container";
import TopNav from "components/TopNav";
import pages from "../navigation--main";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Topbar/Topbar";

interface Props {
  children: React.ReactNode;
  colorInvert: boolean | undefined;
  bgcolor: string | undefined;
}
function Main({
  children,
  colorInvert = false,
  bgcolor = "transparent",
}: Props): JSX.Element {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
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
      <Box bgcolor={bgcolor} position="relative" zIndex={theme.zIndex.appBar}>
        <Container paddingTop="0px !important" paddingBottom="0 !important">
          <TopNav colorInvert={colorInvert} />
        </Container>
      </Box>
      <AppBar
        position="sticky"
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
}

export default Main;
