/*
 * @Author: Shikai Jin
 * @Date: 2022-06-05 19:59:54
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-11 17:40:38
 * @FilePath: /uwcssa_ca/src/views/ResearchDevelopment/components/Team/components/DeveloperCard.tsx
 * @Description:
 *
 */

import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Grid,
  IconButton,
  ListItemText,
} from '@mui/material';

import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import React from 'react';
import { ResearchDevelopmentTeam } from 'redux/researchDevelopmentTeam/researchDevelopmentTeamSlice';
import { stringAvatar } from 'components/Avatar/AvatarFunction';

type Props = {
  developers: ResearchDevelopmentTeam[];
};

const DevelopCard: React.FC<Props> = (props): JSX.Element => {
  const { developers } = props;

  return (
    <>
      {developers.map((item, i) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={3}
          key={i}
          data-aos={'fade-up'}
          data-aos-delay={i * 100}
          data-aos-offset={100}
          data-aos-duration={600}
        >
          <Card
            sx={{
              boxShadow: 0,
              background: 'transparent',
              backgroundImage: 'none',
            }}
          >
            <Box
              component={CardMedia}
              borderRadius={2}
              width={1}
              height={1}
              minHeight={300}
              image={item.user.avatarURL?.objectCompressedURL}
              {...stringAvatar(item.user.name, {
                width: 'auto',
                height: 'auto',
              })}
            />
            <Box component={CardContent} bgcolor={'transparent'} marginTop={-6}>
              <Box component={Card} borderRadius={2}>
                <CardContent>
                  <ListItemText
                    sx={{
                      overflow: 'hidden',
                      height: '40px',
                    }}
                    primary={item.name || 'null'}
                    secondary={`${item.title}-${item.subTitle}`}
                  />
                  <Box marginTop={4} sx={{ height: '20px' }}>
                    {item.email ? (
                      <IconButton
                        size={'small'}
                        color={'primary'}
                        onClick={() => window.open(`mailto:${item.email}`)}
                      >
                        <EmailIcon />
                      </IconButton>
                    ) : null}
                    {item.github ? (
                      <IconButton
                        size={'small'}
                        color={'primary'}
                        onClick={() => window.open(`${item.github}`)}
                      >
                        <GitHubIcon />
                      </IconButton>
                    ) : null}
                    {item.linkedIn ? (
                      <IconButton
                        size={'small'}
                        color={'primary'}
                        onClick={() => window.open(`${item.linkedIn}`)}
                      >
                        <LinkedInIcon />
                      </IconButton>
                    ) : null}
                  </Box>
                </CardContent>
              </Box>
            </Box>
          </Card>
        </Grid>
      ))}
    </>
  );
};

export default DevelopCard;
