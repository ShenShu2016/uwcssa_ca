/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Chip from '@mui/material/Chip';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';

// import Container from 'components/Container';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Lorem ipsum dolor sit amet',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Consectetur adipiscing elit',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img3.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Lorem ipsum dolor sit amet',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Clara Bertoletti',
      avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    },
    date: '04 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img25.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Consectetur adipiscing elit',
    tags: ['UX', 'Design', 'Themes', 'Photography'],
    author: {
      name: 'Jhon Anderson',
      avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    },
    date: '12 Sep',
  },
];

const BlogWithLargeImage = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Grid container>
        {mock.map((item, i) => (
          <Grid key={i} item>
            <Box
              component={Card}
              width={1}
              height={1}
              borderRadius={0}
              boxShadow={0}
              display={'flex'}
              padding={'12px'}
              // flexDirection={{
              //   xs: 'column',
              //   md: i % 2 === 0 ? 'row-reverse' : 'row',
              // }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <CardContent
                sx={{
                  // paddingX: { xs: 1, sm: 2, md: 4 },
                  // paddingY: { xs: 2, sm: 4 },
                  padding: 0,
                  paddingRight: 2,
                  width: { xs: 1, md: '70%' },
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                }}
              >
                <Box>
                  {item.tags.map((item) => (
                    <Chip
                      key={item}
                      label={item}
                      component="a"
                      href=""
                      clickable
                      size={'small'}
                      color={'primary'}
                      sx={{ marginRight: 1 }}
                    />
                  ))}
                </Box>
                <Typography
                  variant={'h6'}
                  fontWeight={400}
                  // sx={{ textTransform: 'uppercase' }}
                >
                  {item.title}
                </Typography>
                <Box marginY={1}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.author.name} - {item.date}
                  </Typography>
                </Box>
                <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                  {item.description}
                </Typography>
                <Box marginTop={2} display={'flex'} justifyContent={'flex-end'}>
                </Box>
              </CardContent>

              <Box
                sx={{
                  width: { md: '30%', height: 'auto' },
                }}
              >
                <Box
                  component={'img'}
                  height={1}
                  width={1}
                  src={item.image}
                  alt="..."
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 120,
                    borderRadius: '12px',
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
                <Button
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
                    Read More
                </Button>
              </Box>
            </Box>
            <Divider />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BlogWithLargeImage;
