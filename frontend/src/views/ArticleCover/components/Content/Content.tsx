/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Content = (): JSX.Element => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  const photos = [
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
      rows: 1,
      cols: 2,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img22.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img24.jpg',
      rows: 1,
      cols: 1,
    },
    {
      src: 'https://assets.maccarianagency.com/backgrounds/img21.jpg',
      rows: 1,
      cols: 2,
    },
  ];

  return (
    <Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }}>
        <Typography variant={'subtitle1'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Typography>
        <Box width={1} height={1} marginY={4}>
          <LazyLoadImage
            height={'100%'}
            width={'100%'}
            src={'https://assets.maccarianagency.com/backgrounds/img4.jpg'}
            alt="Remote working"
            effect="blur"
            style={{
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
              objectFit: 'cover',
              borderRadius: 8,
              width: '100%',
              height: '100%',
              maxHeight: 400,
            }}
          />
        </Box>
        <Typography
          variant={'h4'}
          color={'primary'}
          align={'center'}
          fontWeight={'normal'}
        >
          “So many teams struggle to make their onboarding experience anywhere
          near as good as their core product, so the results of this is poor
          retention”
        </Typography>
        <Box marginY={4}>
          <Typography variant={'h5'} gutterBottom>
            Big heading for a new topic
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
          <Box marginTop={2}>
            <ul>
              <li>
                <Typography>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Typography>
              </li>
              <li>
                <Typography>
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </Typography>
              </li>
            </ul>
          </Box>
        </Box>
      </Box>
      <Box marginY={4}>
        <ImageList
          variant="quilted"
          cols={3}
          rowHeight={isMd ? 300 : 220}
          gap={isMd ? 16 : 8}
        >
          {photos.map((item, i) => (
            <ImageListItem key={i} cols={item.cols || 2} rows={item.rows || 1}>
              <LazyLoadImage
                height={'100%'}
                width={'100%'}
                src={item.src}
                alt="..."
                effect="blur"
                style={{
                  objectFit: 'cover',
                  cursor: 'poiner',
                  borderRadius: 8,
                  filter:
                    theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
                }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingBottom={4}>
        <Box>
          <Typography variant={'h5'} gutterBottom>
            Small heading for a smaller transition
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Box>
      </Box>
      <Box
        component={Card}
        boxShadow={2}
        display={'flex'}
        flexDirection={{ xs: 'column', md: 'row-reverse' }}
        sx={{ backgroundImage: 'none' }}
      >
        <Box
          sx={{
            width: { xs: 1, md: '50%' },
            position: 'relative',
            '& .lazy-load-image-loaded': {
              height: 1,
              display: 'flex !important',
            },
          }}
        >
          <Box
            component={LazyLoadImage}
            height={1}
            width={1}
            src={'https://assets.maccarianagency.com/backgrounds/img1.jpg'}
            alt="..."
            effect="blur"
            sx={{
              objectFit: 'cover',
              maxHeight: 360,
              filter:
                theme.palette.mode === 'dark' ? 'brightness(0.7)' : 'none',
            }}
          />
          <Box
            component={'svg'}
            viewBox="0 0 112 690"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            sx={{
              position: 'absolute',
              bottom: 0,
              top: '-50%',
              left: 0,
              right: 0,
              color: theme.palette.background.paper,
              transform: 'scale(2)',
              height: 1,
              width: 'auto',
              transformOrigin: 'top center',
              display: { xs: 'none', md: 'block' },
            }}
          >
            <path
              d="M0 0h62.759v172C38.62 384 112 517 112 517v173H0V0z"
              fill="currentColor"
            />
          </Box>
        </Box>
        <CardContent
          sx={{
            position: 'relative',
            width: { xs: 1, md: '50%' },
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant={'h6'} gutterBottom>
                  Download our sturtup giude
                </Typography>
                <Typography color={'text.secondary'}>
                  Small heading for a smaller transition
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Name *"
                  variant="outlined"
                  name={'name'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email *"
                  variant="outlined"
                  name={'email'}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <Button
                  size={'large'}
                  fullWidth
                  variant={'contained'}
                  type={'submit'}
                  sx={{ height: 54 }}
                >
                  Download
                </Button>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Box>
      <Box paddingX={{ xs: 0, sm: 4, md: 6 }} paddingY={4}>
        <Typography color={'text.secondary'}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur.
        </Typography>
      </Box>
      <Box paddingY={4}>
        <Divider />
      </Box>
      <Box
        display={'flex'}
        alignItems={'center'}
        justifyContent={'space-between'}
        flexWrap={'wrap'}
      >
        <Box display={'flex'} alignItems={'center'}>
          <Avatar
            sx={{ width: 50, height: 50, marginRight: 2 }}
            src={'https://assets.maccarianagency.com/avatars/img3.jpg'}
          />
          <Box>
            <Typography fontWeight={600}>Jhon Anderson</Typography>
            <Typography color={'text.secondary'}>May 19, 2021</Typography>
          </Box>
        </Box>
        <Box display={'flex'} alignItems={'center'}>
          <Typography color={'text.secondary'}>Share:</Typography>
          <Box marginLeft={0.5}>
            <IconButton aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Content;
