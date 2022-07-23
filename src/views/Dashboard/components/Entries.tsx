/*
 * @Author: 李佳修
 * @Date: 2022-05-27 17:23:40
 * @LastEditTime: 2022-06-11 16:32:55
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/views/Dashboard/components/Entries.tsx
 */

import { Box, Card, Typography, styled } from "@mui/material";

import HomeIcon from "@mui/icons-material/Home";
import LocalActivityIcon from "@mui/icons-material/LocalActivity";
import React from "react";
import SellIcon from "@mui/icons-material/Sell";
import WorkIcon from "@mui/icons-material/Work";

const StyledCard = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "65px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  transition: "transform 0.2s",
  "&:hover": {
    transform: "scale(1.1)",
  },
}));

function Entries() {
  return (
    <Box
      sx={{
        display: "grid",
        justifyContent: "space-between",
        gridTemplateColumns: "repeat(2,50%)",
        gridGap: "12px",
      }}
    >
      <Box>
        <StyledCard>
          <HomeIcon color="primary" fontSize="large" />
          <Typography align="center" fontSize={12} p={1}>
            租房
          </Typography>
        </StyledCard>
      </Box>
      <Box>
        <StyledCard>
          <LocalActivityIcon color="primary" fontSize="large" />
          <Typography align="center" fontSize={12} p={1}>
            活动
          </Typography>
        </StyledCard>
      </Box>
      <Box>
        <StyledCard>
          <SellIcon color="primary" fontSize="large" />
          <Typography align="center" fontSize={12} p={1}>
            二手交易
          </Typography>
        </StyledCard>
      </Box>
      <Box>
        <StyledCard>
          <WorkIcon color="primary" fontSize="large" />
          <Typography align="center" fontSize={12} p={1}>
            工作机会
          </Typography>
        </StyledCard>
      </Box>
    </Box>
  );
}

export default Entries;
