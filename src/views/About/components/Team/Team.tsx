/*
 * @Author: Shen Shu
 * @Date: 2022-06-14 10:58:14
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-07-24 17:35:22
 * @FilePath: /uwcssa_ca/src/views/About/components/Team/Team.tsx
 * @Description:
 *
 */
import React, { useEffect } from "react";
import {
  fetchUwcssaDepartmentList,
  selectAllUwcssaDepartments,
} from "redux/uwcssaDepartment/uwcssaDepartmentSlice";
import {
  fetchUwcssaMemberList,
  selectAllUwcssaMembers,
} from "redux/uwcssaMember/uwcssaMemberSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import {
  Avatar,
  useTheme,
  Card,
  Grid,
  Typography,
  Box,
  CardContent,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from "@mui/material";

import { getAuthState } from "redux/auth/authSlice";
import stringAvatar from "components/Avatar/AvatarFunction";

function Team(): JSX.Element {
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
      if (isAuth !== null && fetchUwcssaMemberListStatus === "idle") {
        await dispatch(fetchUwcssaMemberList({ isAuth }));
      }
    };
    getUwcssaMembers();
  }, [fetchUwcssaMemberListStatus]);

  useEffect(() => {
    const getUwcssaDepartments = async () => {
      if (isAuth !== null && fetchUwcssaDepartmentListStatus === "idle") {
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
          align="center"
          gutterBottom
          sx={{
            fontWeight: 700,
            marginTop: theme.spacing(1),
          }}
        >
          学生会组织结构
        </Typography>
      </Box>
      <>
        {departments.map((department) => (
          <Box key={department.id} marginBottom={4}>
            <Box marginBottom={4}>
              <Typography variant="h6" align="center" color="text.secondary">
                {department.id}
              </Typography>
            </Box>

            <Grid container spacing={2}>
              {uwcssaMembers
                .filter(
                  (x) => x.uwcssaDepartmentUwcssaMembersId === department.id,
                )
                .map((item) => (
                  <Grid item xs={12} md={4} key={item.id}>
                    <Box
                      width={1}
                      height={1}
                      component={Card}
                      boxShadow={0}
                      variant="outlined"
                      bgcolor="alternate.main"
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
                            primary={item.name || "null"}
                            secondary={item.title || "null"}
                            primaryTypographyProps={{
                              variant: "h6",
                              fontWeight: 700,
                            }}
                            secondaryTypographyProps={{
                              variant: "subtitle1",
                            }}
                          />
                        </ListItem>
                      </CardContent>
                    </Box>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ))}
      </>
    </Box>
  );
}

export default Team;
