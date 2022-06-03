/*
 * @Author: Shikai Jin
 * @Date: 2022-06-02 20:53:01
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-02 21:09:38
 * @FilePath: /uwcssa_ca/src/views/About/components/Story/Story.tsx
 * @Description:
 *
 */
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typography from '@mui/material/Typography';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

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
              Our story
            </Typography>
            <Typography component={'p'}>
              The Chinese Students and Scholars Association at University of
              Windsor (UWCSSA) is a non-political, non-profit, service-oriented
              organization, which is officially ratified by U.W.S.A. at
              University of Windsor. Founded in 1985 by a group of Chinese
              students and visiting scholars, the CSSA has provided services to
              Chinese people in Windsor for nearly 20 years.
              <br />
              <br />
              Our goal is to unite Chinese students and scholars in Windsor; to
              help Chinese students and scholars to adjust their campus lives
              and adopt the new culture; to provide them with comfortable
              environment and various opportunities to communicate and thus
              enrich their lives in Canada; and to promote Chinese culture
              heritage and multicultural communications in Canada.
              <br />
              <br />
              We welcome all Chinese students & scholars to join us and make
              CSSA a much bigger, stronger, and helpful association for all
              Chinese in U of W as well as in the Great Windsor Area.
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
