/*
 * @Author: Shen Shu
 * @Date: 2022-05-28 16:04:22
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 14:03:13
 * @FilePath: /uwcssa_ca/src/layouts/AdminLayout/AdminLayout.tsx
 * @Description:
 *
 */

import {
  AppBar,
  Box,
  Divider,
  alpha,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";

import Container from "components/Container";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import pages from "../navigation--admin";
import Topbar from "./components/Topbar/Topbar";

interface Props {
  children: React.ReactNode;
}

function AdminLayout({ children }: Props): JSX.Element {
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

  return (
    <Box>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.paper,
          borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
        }}
        elevation={0}
      >
        <Container maxWidth={1} paddingY={{ xs: 1, sm: 1.5 }}>
          <Topbar onSidebarOpen={handleSidebarOpen} />
        </Container>
      </AppBar>
      <Sidebar
        onClose={handleSidebarClose}
        open={open}
        variant={isMd ? "permanent" : "temporary"}
        pages={pages}
      />
      <main>
        <Box height={{ xs: 58, sm: 66, md: 71 }} />
        <Box
          display="flex"
          flex="1 1 auto"
          overflow="hidden"
          paddingLeft={{ md: "256px" }}
        >
          <Box display="flex" flex="1 1 auto" overflow="hidden">
            <Box flex="1 1 auto" height="100%" overflow="auto">
              {children}
              <Divider />
              <Container paddingY={4}>
                <Footer />
              </Container>
            </Box>
          </Box>
        </Box>
      </main>
    </Box>
  );
}

export default AdminLayout;
