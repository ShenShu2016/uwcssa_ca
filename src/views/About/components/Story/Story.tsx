/*
 * @Author: Shikai Jin
 * @Date: 2022-06-02 20:53:01
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-25 22:13:39
 * @FilePath: /uwcssa_ca/src/views/About/components/Story/Story.tsx
 * @Description:
 *
 */

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

/* eslint-disable react/no-unescaped-entities */

const Story = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column'}>
        <Grid item container alignItems={'center'} xs={12} md={6}>
          <Box>
            <Typography variant={'h4'} gutterBottom sx={{ fontWeight: 700 }}>
              我们的职责 & 使命
            </Typography>
            <Typography component={'p'}>
              温莎大学中国学生学者联谊会是在温莎大学学生会下注册的一个非政治、非赢利的服务性组织。学生会于1985年由当时的一些中国学生、访问学者组建成立，为温莎华人提供服务将近20年。
              <br />
              <br />
              学生会的目标是团结在温莎的中国学生学者；帮助大家适应学校的生活和新的文化环境；提供给大家相互交流的环境和机会；发扬宣传中国的传统文化并加强多文化的交流。
              <br />
              <br />
              我们欢迎所有的温莎大学学生学者加入到学生会中，使学生会更强大，能给大家提供更多的帮助，更好的服务温莎大学的学生以及大温莎地区的华人。
            </Typography>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
        >
          <Box maxWidth={500} width={1}>
            <Box
              component={'img'}
              src={
                'https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration1.svg'
              }
              width={1}
              height={1}
              sx={{
                filter:
                  theme.palette.mode === 'dark' ? 'brightness(0.8)' : 'none',
              }}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Story;
