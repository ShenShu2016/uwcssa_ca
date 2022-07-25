/*
 * @Author: Shen Shu
 * @Date: 2022-06-14 10:58:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-23 15:35:11
 * @FilePath: /uwcssa_ca/src/layouts/AdminLayout/components/Sidebar/Sidebar.tsx
 * @Description:
 *
 */
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import React from "react";
import SidebarNav from "./components/SidebarNav/SidebarNav";

interface Props {
  // eslint-disable-next-line @typescript-eslint/ban-types
  onClose: () => void;
  open: boolean;
  variant: "permanent" | "persistent" | "temporary" | undefined;
  pages: Array<{
    groupTitle: string;
    pages: Array<PageItem>;
  }>;
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
          maxWidth: 256,
          top: { xs: 0, md: 71 },
          height: { xs: "100%", md: "calc(100% - 71px)" },
        },
      }}
    >
      <Box
        sx={{
          height: "100%",
          padding: 1,
          paddingTop: { xs: 2, sm: 3 },
        }}
      >
        <SidebarNav pages={pages} onClose={onClose} />
      </Box>
    </Drawer>
  );
}

export default Sidebar;
