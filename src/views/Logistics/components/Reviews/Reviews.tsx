/*
 * @Author: Shikai Jin
 * @Date: 2022-05-17 22:50:55
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-05-19 15:46:50
 * @FilePath: \uwcssa_ca\frontend\src\views\Logistics\components\Reviews\Reviews.tsx
 * @Description:
 *
 */

import { Stack, Tooltip } from '@mui/material';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import React from 'react';
import Typography from '@mui/material/Typography';

const mock = [
  {
    feedback:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
  },
  {
    feedback:
      'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  },
  {
    feedback:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
  },
];

const Reviews = (): JSX.Element => {
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
            color: 'common.white',
          }}
        >
          Our Awesome Team
        </Typography>
        <Typography
          variant="h6"
          align={'center'}
          data-aos={'fade-up'}
          sx={{ color: 'common.white' }}
        >
          This is the paragraph where you can write more details about your
          team. Keep you user engaged by providing meaningful information.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mock.map((item, i) => (
          <Grid item xs={12} md={4} key={i}>
            <Box
              width={1}
              height={1}
              data-aos={'fade-up'}
              data-aos-delay={i * 100}
              data-aos-offset={100}
              data-aos-duration={600}
              component={Card}
              display={'flex'}
              flexDirection={'column'}
              alignItems={'center'}
              boxShadow={0}
              variant={'outlined'}
            >
              <CardContent
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Box sx={{ paddingBottom: 2 }}>
                  <ListItem component="div" disableGutters sx={{ padding: 0 }}>
                    <ListItemAvatar sx={{ marginRight: 3 }}>
                      <Avatar
                        src={item.avatar}
                        variant={'rounded'}
                        sx={{ width: 100, height: 100, borderRadius: 2 }}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </ListItem>
                </Box>
                <Typography
                  color="text.secondary"
                  sx={{ paddingBottom: 5, maxHeight: '100px' }}
                >
                  {item.feedback}
                </Typography>
                <Stack direction="row" spacing={2}>
                  <Tooltip placement="top" title="Follow me!" arrow>
                    <Box
                      component={Avatar}
                      src="https://www.logo.wine/a/logo/GitHub/GitHub-Icon-White-Dark-Background-Logo.wine.svg"
                      fontSize="1.125rem"
                      sx={{
                        cursor: 'pointer',
                      }}
                    />
                  </Tooltip>
                  <Tooltip placement="top" title="Follow me!" arrow>
                    <Box
                      component={Avatar}
                      src="https://www.logo.wine/a/logo/LinkedIn/LinkedIn-Icon-Logo.wine.svg"
                      fontSize="1.125rem"
                      sx={{
                        cursor: 'pointer',
                      }}
                    />
                  </Tooltip>
                </Stack>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
