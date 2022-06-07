import React, { useEffect } from 'react';
import {
  fetchUwcssaDepartmentList,
  selectAllUwcssaDepartments,
} from 'redux/uwcssaDepartment/uwcssaDepartmentSlice';
import {
  fetchUwcssaMemberList,
  selectAllUwcssaMembers,
} from 'redux/uwcssaMember/uwcssaMemberSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';
import { getAuthState } from 'redux/auth/authSlice';
import { stringAvatar } from 'components/Avatar/AvatarFunction';
import { useTheme } from '@mui/material/styles';

const Team = (): JSX.Element => {
  const theme = useTheme();
  const isAuth = useAppSelector(getAuthState);
  const dispatch = useAppDispatch();
  const departments = useAppSelector(selectAllUwcssaDepartments);
  const uwcssaMembers = useAppSelector(selectAllUwcssaMembers);
  const { fetchUwcssaMemberListStatus } = useAppSelector(
    (state) => state.uwcssaMember,
  );
  const { fetchUwcssaDepartmentListStatus } = useAppSelector(
    (state) => state.uwcssaDepartment,
  );
  useEffect(() => {
    const getUwcssaMembers = async () => {
      if (isAuth !== null && fetchUwcssaMemberListStatus === 'idle') {
        await dispatch(fetchUwcssaMemberList({ isAuth }));
      }
    };
    getUwcssaMembers();
  }, [fetchUwcssaMemberListStatus]);

  useEffect(() => {
    const getUwcssaDepartments = async () => {
      if (isAuth !== null && fetchUwcssaDepartmentListStatus === 'idle') {
        await dispatch(fetchUwcssaDepartmentList({ isAuth }));
      }
    };
    getUwcssaDepartments();
  }, [fetchUwcssaDepartmentListStatus]);

  return (
    <Box>
      <Box marginBottom={4}>
        <Typography
          variant="h4"
          align={'center'}
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          学生会
        </Typography>
      </Box>
      <>
        {departments.map((department, i) => {
          return (
            <Box key={i} marginBottom={4}>
              <Box marginBottom={4}>
                <Typography
                  variant="h6"
                  align={'center'}
                  color={'text.secondary'}
                >
                  {department.id}
                </Typography>
              </Box>

              <Grid container spacing={2}>
                {uwcssaMembers
                  .filter(
                    (x) => x.uwcssaDepartmentUwcssaMembersId === department.id,
                  )
                  .map((item, i) => {
                    return (
                      <Grid item xs={12} md={4} key={i}>
                        <Box
                          width={1}
                          height={1}
                          component={Card}
                          boxShadow={0}
                          variant={'outlined'}
                          bgcolor={'alternate.main'}
                        >
                          <CardContent sx={{ padding: 3 }}>
                            <ListItem
                              component="div"
                              disableGutters
                              sx={{ padding: 0 }}
                            >
                              <ListItemAvatar sx={{ marginRight: 3 }}>
                                <Avatar
                                  src={item.user.avatarURL?.objectCompressedURL}
                                  {...stringAvatar(item.user.name, {
                                    width: 80,
                                    height: 80,
                                  })}
                                />
                              </ListItemAvatar>
                              <ListItemText
                                sx={{ margin: 0 }}
                                primary={item.name || 'null'}
                                secondary={item.title || 'null'}
                                primaryTypographyProps={{
                                  variant: 'h6',
                                  fontWeight: 700,
                                }}
                                secondaryTypographyProps={{
                                  variant: 'subtitle1',
                                }}
                              />
                            </ListItem>
                          </CardContent>
                        </Box>
                      </Grid>
                    );
                  })}
              </Grid>
            </Box>
          );
        })}
      </>
    </Box>
  );
};

export default Team;
