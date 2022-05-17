import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

const mock = [
  {
    title: 'Google Drive',
    subtitle:
      'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
    icon: 'https://assets.maccarianagency.com/svg/logos/google-drive.svg',
  },
  {
    title: 'Google Ad Manager',
    subtitle:
      'A very simple and modern template with a very harmonious color scheme. Also the additional plugins like the statistics are great and fit perfectly into the overall picture.',
    icon: 'https://assets.maccarianagency.com/svg/logos/google-ad-manager.svg',
  },
  {
    title: 'Atlassian',
    subtitle:
      'Keep your entire team in sync with development and easily manage tasks, goals, and deadlines. Easily manage and edit any Adwords campaign inline to improve ROI with constant review.',
    icon: 'https://assets.maccarianagency.com/svg/logos/atlassian.svg',
  },
];

const Integrations = (): JSX.Element => {
  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700, color: 'common.white' }}
        >
          Syncronization with different companiees
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
          sx={{ color: 'common.white' }}
        >
          Forward thinking businesses use our cloud backup service to ensure
          data reliability and safety.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <Box
                component={Avatar}
                width={{ xs: 60, md: 80 }}
                height={{ xs: 60, md: 80 }}
                marginBottom={2}
                src={item.icon}
              />
              <Typography
                variant={'h6'}
                gutterBottom
                align={'center'}
                sx={{ fontWeight: 600, color: 'common.white' }}
              >
                {item.title}
              </Typography>
              <Typography sx={{ color: 'common.white' }} align={'center'}>
                {item.subtitle}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Integrations;
