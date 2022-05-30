/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

const Reviews = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Grid container spacing={4} direction={isMd ? 'row' : 'column-reverse'}>
        <Grid item xs={12} md={6} data-aos={isMd ? 'fade-right' : 'fade-up'}>
          <Box marginBottom={4}>
            <Box
              component="img"
              height={1}
              width={1}
              src={
                'https://assets.maccarianagency.com/svg/logos/amazon-original.svg'
              }
              alt="..."
              maxWidth={{ xs: 80, sm: 100, md: 120 }}
              marginBottom={2}
              sx={{
                filter:
                  theme.palette.mode === 'dark'
                    ? 'brightness(0) invert(0.7)'
                    : 'none',
              }}
            />
            <Typography variant={'h6'} component={'p'}>
              First class templates. These guys know what they're doing: great
              code quality, clear naming conventions and clear code structure.
              Plain awesome and a pleasure to work with.
            </Typography>
            <Box marginTop={{ xs: 2, sm: 4 }}>
              <Typography variant={'h6'} sx={{ fontWeight: 700 }}>
                Jhon Anderson
              </Typography>
              <Typography color="text.secondary">MUI lover</Typography>
            </Box>
          </Box>
        </Grid>
        <Grid
          item
          container
          justifyContent="center"
          alignItems="center"
          xs={12}
          md={6}
          sx={{
            display: { xs: 'none', md: 'flex' },
          }}
        >
          <Box component={Card} boxShadow={4} height={1} width={1}>
            <Box
              component={CardMedia}
              height={1}
              width={1}
              minHeight={300}
              image="https://assets.maccarianagency.com/backgrounds/img4.jpg"
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Reviews;
