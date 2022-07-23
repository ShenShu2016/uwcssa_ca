/*
 * @Author: 李佳修
 * @Date: 2022-05-18 09:12:03
 * @LastEditTime: 2022-06-02 20:17:48
 * @LastEditors: Shikai Jin
 * @FilePath: /uwcssa_ca/src/layouts/Main/components/Sidebar/Sidebar.tsx
 */

import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React from "react";
import { SidebarNav } from "./components";

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  variant: "permanent" | "persistent" | "temporary" | undefined;
  pages: {
    dashboard: Array<PageItem> | PageItem;
    UWCSSA: Array<PageItem> | PageItem;
    freshman: Array<PageItem> | PageItem;
    news: Array<PageItem> | PageItem;
    // house: Array<PageItem> | PageItem;
    // jobs: Array<PageItem> | PageItem;
    about: Array<PageItem> | PageItem;
    activity: Array<PageItem> | PageItem;
    contact: Array<PageItem> | PageItem;
  };
}

function Sidebar({ pages, open, variant, onClose }: Props): JSX.Element {
  return (
    <Drawer
      anchor="left"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: 280,
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 1,
        }}
      >
        <SidebarNav pages={pages} />
      </Box>
    </Drawer>
  );
}

export default Sidebar;
