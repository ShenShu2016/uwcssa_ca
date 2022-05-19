import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

// import Container from 'components/Container';

const info = {
  avatar: 'https://assets.maccarianagency.com/avatars/img5.jpg',
  name: 'Clara Bertoletti',
  isVerified: true,
  title: 'Paradigm Technician',
  followers: 84,
  href: '#',
};


const UserCardGrid = (): JSX.Element => {
  const theme = useTheme();
  return (
    <Box>
      <Card
        sx={{
          p: { xs: 2, md: 4 },
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: 1,
          height: 1,
          background: 'transparent',
          backgroundImage: `linear-gradient(0deg, ${theme.palette.background.paper} 75%, ${theme.palette.primary.main} 0%)`,
        }}
      >
        <Avatar
          src={info.avatar}
          variant={'circular'}
          sx={{
            width: 80,
            height: 80,
          }}
        />
        <Box
          display={'flex'}
          justifyContent={'center'}
          alignItems={'center'}
          marginTop={2}
        >
          <Typography fontWeight={600}>{info.name}</Typography>
          {info.isVerified ? (
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={22}
              height={22}
              color={'primary.main'}
              marginLeft={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"
              />
            </Box>
          ) : null}
        </Box>
        <Typography color={'text.secondary'}>{info.title}</Typography>
        <Box flexGrow={1} />
        <Stack
          spacing={2}
          marginTop={2}
          width={1}
          alignItems={'center'}
        >
          <Box
            display={'flex'}
            justifyContent={'center'}
            alignItems={'center'}
          >
            <Box
              component={'svg'}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              width={18}
              height={18}
              color={'text.secondary'}
              marginRight={1}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </Box>
            <Typography color={'text.secondary'} variant={'subtitle2'}>
              {info.followers} followers
            </Typography>
          </Box>
          <Button
            component={'a'}
            variant={'outlined'}
            color={'primary'}
            href={info.href}
          >
                    View profile
          </Button>
        </Stack>
      </Card>
    </Box>
  );
};

export default UserCardGrid;
