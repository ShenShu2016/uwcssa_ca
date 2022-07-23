/*
 * @Author: Shikai Jin
 * @Date: 2022-06-05 19:59:54
 * @LastEditors: Shikai Jin
 * @LastEditTime: 2022-06-07 20:26:55
 * @FilePath: /uwcssa_ca/src/views/Developers/components/Team/componments/DeveloperCard.tsx
 * @Description:
 *
 */

import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import { ResearchDevelopmentTeam } from "redux/researchDevelopmentTeam/researchDevelopmentTeamSlice";
import { stringAvatar } from "components/Avatar/AvatarFunction";

type Props = {
  developers: ResearchDevelopmentTeam[];
};

const DevelopCard: React.FC<Props> = (props): JSX.Element => {
  const theme = useTheme();
  const { developers } = props;

  return (
    <>
      {developers.slice(0, 8).map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Box
            component={Card}
            boxShadow={2}
            sx={{
              textDecoration: "none",
              transition: "all .2s ease-in-out",
              "&:hover": {
                transform: `translateY(-${theme.spacing(1 / 2)})`,
              },
            }}
          >
            <CardContent>
              <Box
                component={Avatar}
                src={item.user.avatarURL?.objectCompressedURL}
                {...stringAvatar(item.user.name, {
                  width: 80,
                  height: 80,
                })}
              />
              <Box marginTop={4}>
                <ListItemText
                  sx={{
                    overflow: "hidden",
                    height: "50px",
                  }}
                  primary={item.name || "null"}
                  secondary={`${item.title}-${item.subTitle}`}
                />
                <Typography
                  variant="subtitle2"
                  color="text.secondary"
                  sx={{
                    overflow: "hidden",
                    height: "40px",
                  }}
                >
                  {/* 最多2行字 */}
                  {item.content || "还没有填写。。。"}
                </Typography>
                <Box marginTop={4} sx={{ height: "25px" }}>
                  {item.email ? (
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => window.open(`mailto:${item.email}`)}
                    >
                      <EmailIcon />
                    </IconButton>
                  ) : null}
                  {item.github ? (
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => window.open(`${item.github}`)}
                    >
                      <GitHubIcon />
                    </IconButton>
                  ) : null}
                  {item.linkedIn ? (
                    <IconButton
                      size="small"
                      color="primary"
                      onClick={() => window.open(`${item.linkedIn}`)}
                    >
                      <LinkedInIcon />
                    </IconButton>
                  ) : null}
                </Box>
              </Box>
            </CardContent>
          </Box>
        </Grid>
      ))}
    </>
  );
};

export default DevelopCard;
