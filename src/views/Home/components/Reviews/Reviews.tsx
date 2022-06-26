/*
 * @Author: Shikai Jin
 * @Date: 2022-05-17 22:50:55
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-25 22:00:58
 * @FilePath: /uwcssa_ca/src/views/Home/components/Reviews/Reviews.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React, { useEffect } from 'react';
import {
  fetchResearchDevelopmentTeamList,
  selectAllResearchDevelopmentTeams,
} from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { getAuthState } from 'redux/auth/authSlice';
import { stringAvatar } from 'components/Avatar/AvatarFunction';

const Reviews = (): JSX.Element => {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);

  const developers = useAppSelector(selectAllResearchDevelopmentTeams);
  const { fetchResearchDevelopmentTeamListStatus } = useAppSelector(
    (state) => state.researchDevelopmentTeam,
  );
  useEffect(() => {
    if (isAuth !== null && fetchResearchDevelopmentTeamListStatus === 'idle') {
      dispatch(fetchResearchDevelopmentTeamList({ isAuth }));
    }
  }, [isAuth, fetchResearchDevelopmentTeamListStatus]);

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
          Development Team
        </Typography>
        {/* <Typography
          variant="h6"
          align={'center'}
          data-aos={'fade-up'}
          sx={{ color: 'common.white' }}
        >
          Companies from across the globe have had fantastic experiences using
          theFront.
          <br />
          Here’s what they have to say.
        </Typography> */}
      </Box>
      <Grid container spacing={2}>
        {developers.map((item, i) => (
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
                        src={item.user.avatarURL?.objectCompressedURL}
                        variant={'rounded'}
                        {...stringAvatar(item.user.name, {
                          width: 100,
                          height: 100,
                          borderRadius: 2,
                        })}
                      />
                    </ListItemAvatar>
                    <ListItemText
                      sx={{ margin: 0 }}
                      primary={item.name}
                      secondary={item.title}
                    />
                  </ListItem>
                </Box>
                <Typography color="text.secondary">{item.content}</Typography>
              </CardContent>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Reviews;
