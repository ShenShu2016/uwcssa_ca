/*
 * @Author: Shikai Jin
 * @Date: 2022-06-05 19:59:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-06 16:19:26
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
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { ResearchDevelopmentTeam } from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';

type Props = {
  developers: ResearchDevelopmentTeam[];
};

const DevelopCard: React.FC<Props> = (props): JSX.Element => {
  const theme = useTheme();
  return (
    <>
      {props.developers.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.id}>
          <Box
            component={Card}
            boxShadow={2}
            sx={{
              textDecoration: 'none',
              transition: 'all .2s ease-in-out',
              '&:hover': {
                transform: `translateY(-${theme.spacing(1 / 2)})`,
              },
            }}
          >
            <CardContent>
              <Box
                component={Avatar}
                src={item.user.avatarURL.objectCompressedURL}
                height={80}
                width={80}
              />
              <Box marginTop={4}>
                <ListItemText
                  primary={item.name}
                  secondary={`${item.title}-${item.subTitle}`}
                />
                <Typography variant={'subtitle2'} color={'text.secondary'}>
                  {item.content}
                </Typography>
                <Box marginTop={4}>
                  <IconButton
                    size={'small'}
                    color={'primary'}
                    onClick={() => window.open(`mailto:${item.email}`)}
                  >
                    <EmailIcon />
                  </IconButton>
                  <IconButton
                    size={'small'}
                    color={'primary'}
                    onClick={() => window.open(`${item.github}`)}
                  >
                    <GitHubIcon />
                  </IconButton>
                  <IconButton
                    size={'small'}
                    color={'primary'}
                    onClick={() => window.open(`${item.linkedIn}`)}
                  >
                    <LinkedInIcon />
                  </IconButton>
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
