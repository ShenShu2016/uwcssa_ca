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
import { useTheme } from '@mui/material/styles';

const mocks = [
  {
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    department: '主席团',
  },
  {
    name: 'sdfsdfsf',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    department: '主席团',
  },
  {
    name: 'sdfsdf',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img4.jpg',
    department: '主席团',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
    department: '活动部',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img6.jpg',
    department: '外联部',
  },
  {
    name: 'Clara Bertoletti',
    title: 'MUI lover',
    avatar: 'https://assets.maccarianagency.com/avatars/img1.jpg',
    department: '活动部',
  },
  {
    name: 'Jhon Anderson',
    title: 'Senior Frontend Developer',
    avatar: 'https://assets.maccarianagency.com/avatars/img2.jpg',
    department: '技术部',
  },
  {
    name: 'Chary Smith',
    title: 'SEO at Comoti',
    avatar: 'https://assets.maccarianagency.com/avatars/img3.jpg',
    department: '文体部',
  },
];

const Team = (): JSX.Element => {
  const theme = useTheme();

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
        <Typography variant="h6" align={'center'} color={'text.secondary'}>
          dfgdfgdg
        </Typography>
      </Box>
      <Grid container spacing={2}>
        {mocks.map((item, i) => {
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
                      primaryTypographyProps={{
                        variant: 'h6',
                        fontWeight: 700,
                      }}
                      secondaryTypographyProps={{ variant: 'subtitle1' }}
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
};

export default Team;
