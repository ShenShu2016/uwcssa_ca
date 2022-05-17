import React from 'react';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';

const mock = [
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img2.jpg',
    title: 'Motivation is the first step to success',
    subtitle:
      'Once you\'re setup, instantly withdraw payments or deposit into your bank account within 2-3 business days.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    title: 'Success steps for your personal or business life',
    subtitle:
      'We make sure to include all the amenities and niceties that a growing startup could possibly need.',
  },
  {
    media: 'https://assets.maccarianagency.com/backgrounds/img4.jpg',
    title: 'Increasing prosperity with positive thinking',
    subtitle:
      'Once you\'re setup, instantly withdraw payments or deposit into your bank account within 2-3 business days.',
  },
];

const News = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant={'h4'}
          gutterBottom
          align={'center'}
          sx={{ fontWeight: 700 }}
        >
          Our latest news
        </Typography>
        <Typography
          variant={'h6'}
          component={'p'}
          color={'text.secondary'}
          align={'center'}
        >
          After 3 days all of your offers will arrive and you will have another
          7 days to select your new company.
        </Typography>
      </Box>
      <Grid container spacing={isMd ? 4 : 2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            {mock.map((item, index) => (
              <Grid
                item
                xs={12}
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                data-aos-offset={100}
                data-aos-duration={600}
              >
                <Box
                  component={Card}
                  display={'flex'}
                  flexDirection={{ xs: 'column', sm: 'row' }}
                >
                  <CardMedia
                    title={item.title}
                    image={item.media}
                    sx={{
                      height: { xs: 240, sm: 'auto' },
                      width: { xs: 1, sm: 300 },
                    }}
                  />
                  <CardContent>
                    <Box>
                      <Typography
                        variant="h6"
                        gutterBottom
                        color="text.primary"
                      >
                        {item.title}
                      </Typography>
                      <Typography variant="subtitle1" color="text.secondary">
                        {item.subtitle}
                      </Typography>
                    </Box>
                    <CardActions sx={{ justifyContent: 'flex-end' }}>
                      <Button>Read More</Button>
                    </CardActions>
                  </CardContent>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <Grid container spacing={isMd ? 4 : 2} direction="column">
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card} bgcolor={'primary.main'}>
                <CardContent>
                  <Typography
                    variant="h6"
                    gutterBottom
                    color="text.primary"
                    sx={{ color: 'common.white' }}
                  >
                    You like what you’re reading?
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    sx={{ color: 'common.white' }}
                  >
                    Get free online programing tips and resources delivered
                    directly to your inbox.
                  </Typography>
                </CardContent>
              </Box>
            </Grid>
            <Grid item xs={12} data-aos="fade-up">
              <Box component={Card}>
                <CardContent>
                  <Typography variant="h6" gutterBottom color="text.primary">
                    Interactive decision support system
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    size="large"
                    endIcon={
                      <Box
                        component={'svg'}
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        width={24}
                        height={24}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </Box>
                    }
                  >
                    View all
                  </Button>
                </CardContent>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default News;
