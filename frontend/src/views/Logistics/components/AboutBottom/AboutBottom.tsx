/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const AboutBottom = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item container justifyContent={'center'} xs={12} md={6}>
          <Box
            component={LazyLoadImage}
            effect="blur"
            src="https://assets.maccarianagency.com/backgrounds/img51.png"
            width={1}
            height={1}
            maxWidth={400}
          />
        </Grid>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Box>
            <Typography
              variant="h4"
              data-aos={'fade-up'}
              gutterBottom
              sx={{
                fontWeight: 700,
              }}
            >
              Monitor and analyze usage patterns.
            </Typography>
            <Typography data-aos={'fade-up'}>
              Keep track of what's happening with your data, change permissions,
              and run reports against your data anywhere in the world.Keep track
              of what's happening with your data, change permissions, and run
              reports against your data anywhere in the world.Keep track of
              what's happening with your data, change permissions, and run
              reports against your data anywhere in the world.Keep track of
              what's happening with your data, change permissions, and run
              reports against your data anywhere in the world.Keep track of
              what's happening with your data, change permissions, and run
              reports against your data anywhere in the world.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutBottom;
