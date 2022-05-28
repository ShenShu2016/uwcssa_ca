/*
 * @Author: 李佳修
 * @Date: 2022-05-27 17:23:40
 * @LastEditTime: 2022-05-28 10:59:05
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/views/Home/components/Entries.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import HomeIcon from '@mui/icons-material/Home';
import SellIcon from '@mui/icons-material/Sell';
import WorkIcon from '@mui/icons-material/Work';
import Typography from '@mui/material/Typography';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import { styled } from '@mui/material/styles';

const StyledCard = styled(Card)(({ theme }) => ({
  width: '100%',
  height: '65px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'transform 0.2s',
  '&:hover': {
    transform: 'scale(1.1)'
  }
}));

const Entries = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        justifyContent: 'space-between',
        gridTemplateColumns: 'repeat(2,50%)',
        gridGap: '12px'
      }}>
      <Box>
        <StyledCard>
          <HomeIcon color="primary" fontSize='large'/>
          <Typography align='center' fontSize={12} p={1}>租房</Typography>
        </StyledCard>
      </Box>
      <Box>
        <StyledCard>
          <LocalActivityIcon color="primary" fontSize='large'/>
          <Typography align='center' fontSize={12} p={1}>活动</Typography>
        </StyledCard>
      </Box>
      <Box>
        <StyledCard>
          <SellIcon color="primary" fontSize='large'/>
          <Typography align='center' fontSize={12} p={1}>二手交易</Typography>
        </StyledCard>
      </Box>
      <Box>
        <StyledCard>
          <WorkIcon color="primary" fontSize='large'/>
          <Typography align='center' fontSize={12} p={1}>工作机会</Typography>
        </StyledCard>
      </Box>
    </Box> 
  );
};

export default Entries;