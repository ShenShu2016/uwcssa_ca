/*
 * @Author: 李佳修
 * @Date: 2022-05-31 10:41:55
 * @LastEditTime: 2022-06-01 15:23:18
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/components/pageTitle.tsx
 */
import React, { ReactNode } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface PageTitleProp {
  title: string;
  children: ReactNode;
  marginTop?: string;
  description?: string | ReactNode;
}

const PageTitle: React.FC<PageTitleProp> = ({
  children,
  title = "",
  description = "",
  marginTop = "-80px",
}) => (
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

export default PageTitle;
