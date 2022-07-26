/*
 * @Author: 李佳修
 * @Date: 2022-05-31 10:41:55
 * @LastEditTime: 2022-07-25 22:29:52
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/components/pageTitle.tsx
 */
import React, { ReactNode } from "react";
import { Box, Typography } from "@mui/material";

interface PageTitleProp {
  title: string;
  children: ReactNode;
  marginTop?: string;
  description?: string | ReactNode;
}
function PageTitle({
  title = "",
  children,
  marginTop = "-80px",
  description = "",
}: PageTitleProp): JSX.Element {
  return (
    <>
      <Box bgcolor="primary.main" paddingY={4} paddingX="5%" height="200px">
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom
          sx={{ color: "common.white" }}
        >
          {title}
        </Typography>
        <Typography component={Box} sx={{ color: "common.white" }}>
          {description}
        </Typography>
      </Box>
      <Box marginTop={marginTop}>{children}</Box>
    </>
  );
}

export default PageTitle;
