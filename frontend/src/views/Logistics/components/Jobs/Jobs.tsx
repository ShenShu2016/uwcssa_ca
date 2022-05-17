/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const mock = [
  {
    title: 'Front-End Developer',
    location: 'Madrid',
    type: 'Remote',
  },
  {
    title: 'Community Manager',
    location: 'Paris',
    type: 'Full time',
  },
  {
    title: 'UX/UI Designer',
    location: 'Yerevan',
    type: 'Part time',
  },
];

const Jobs = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          data-aos={'fade-up'}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          We are hiring
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          color={'text.secondary'}
          data-aos={'fade-up'}
        >
          Keep track of what's happening with your data, change permissions, and
          run
          <br />
          reports against your data anywhere in the world.
        </Typography>
        <Box display="flex" justifyContent={'center'} marginTop={2}>
          <Button variant="contained" color="primary" size="large">
            View all positions
          </Button>
        </Box>
      </Box>
      <Box maxWidth={800} margin={'0 auto'}>
        <Grid container spacing={2}>
          {mock.map((item, i) => (
            <Grid item xs={12} key={i}>
              <Box
                component={Card}
                variant={'outlined'}
                bgcolor={'transparent'}
                sx={{
                  '&:hover': {
                    boxShadow: 2,
                  },
                }}
              >
                <Box
                  component={CardContent}
                  display={'flex'}
                  alignItems={'center'}
                >
                  <Box
                    display={'flex'}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                    flex={'1 1 100%'}
                    justifyContent={{ sm: 'space-between' }}
                    alignItems={{ sm: 'center' }}
                  >
                    <Typography
                      variant={'h6'}
                      fontWeight={700}
                      sx={{ marginBottom: { xs: 1, sm: 0 } }}
                    >
                      {item.title}
                    </Typography>
                    <Typography variant={'subtitle1'} color={'text.secondary'}>
                      {`${item.location} / ${item.type}`}
                    </Typography>
                  </Box>
                  <Box marginLeft={2} color={'primary.main'}>
                    <Box
                      component={'svg'}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width={{ xs: 30, sm: 40 }}
                      height={{ xs: 30, sm: 40 }}
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Jobs;
