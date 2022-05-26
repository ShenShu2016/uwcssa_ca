/*
 * @Author: Shen Shu
 * @Date: 2022-05-25 19:05:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-25 19:48:58
 * @FilePath: /uwcssa_ca/frontend/src/views/ArticleCover/components/SidebarArticles/SidebarArticles.tsx
 * @Description:
 *
 */
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import { LazyLoadImage } from 'react-lazy-load-image-component';
/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const mock = [
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img13.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Lorem ipsum dolor sit amet',
    author: {
      name: 'Clara Bertoletti',
    },
    date: '04 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img14.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Consectetur adipiscing elit',
    author: {
      name: 'Jhon Anderson',
    },
    date: '12 Sep',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img15.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Lorem ipsum dolor sit amet',
    author: {
      name: 'Clara Bertoletti',
    },
    date: '04 Aug',
  },
  {
    image: 'https://assets.maccarianagency.com/backgrounds/img16.jpg',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    title: 'Consectetur adipiscing elit',
    author: {
      name: 'Jhon Anderson',
    },
    date: '12 Sep',
  },
];

const SidebarArticles = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box component={Card} variant={'outlined'} padding={2}>
      <Typography
        variant="h6"
        data-aos={'fade-up'}
        sx={{
          fontWeight: 700,
          marginBottom: 2,
        }}
      >
        Upcoming updates
      </Typography>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid key={i} item xs={12}>
            <Box
              component={Card}
              width={1}
              height={1}
              boxShadow={0}
              display={'flex'}
              flexDirection={{ xs: 'column', md: 'row' }}
              sx={{ backgroundImage: 'none', bgcolor: 'transparent' }}
            >
              <Box
                sx={{
                  width: { xs: 1, md: '50%' },
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
                  src={item.image}
                  alt="..."
                  effect="blur"
                  sx={{
                    objectFit: 'cover',
                    maxHeight: 120,
                    borderRadius: 2,
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0.7)'
                        : 'none',
                  }}
                />
              </Box>
              <CardContent
                sx={{ padding: 1, '&:last-child': { paddingBottom: 1 } }}
              >
                <Typography fontWeight={700}>{item.title}</Typography>
                <Box marginY={1 / 4}>
                  <Typography
                    variant={'caption'}
                    color={'text.secondary'}
                    component={'i'}
                  >
                    {item.author.name} - {item.date}
                  </Typography>
                </Box>
                <Button size={'small'}>Read More</Button>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default SidebarArticles;
