import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Page from '../components/Page';
import React from 'react';
import Typography from '@mui/material/Typography';

const Notifications = (): JSX.Element => {
  return (
    <>
      <Page>
        <Box>
          <Box
            display={'flex'}
            flexDirection={{ xs: 'column', md: 'row' }}
            justifyContent={'space-between'}
            alignItems={{ xs: 'flex-start', md: 'center' }}
          >
            <Typography variant="h6" fontWeight={700}>
              Update website notifications
            </Typography>
            <Button
              size={'large'}
              variant={'outlined'}
              sx={{ marginTop: { xs: 2, md: 0 } }}
            >
              Reset all
            </Button>
          </Box>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <form>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">System settings</Typography>
                <Typography variant="caption">
                  You will recieve emails in your business email address
                </Typography>
                <Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="E-mail alerts"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Push notifications"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Text messages"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={false} color="primary" />
                      }
                      label="Phone calles"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="h6">Chat settings</Typography>
                <Typography variant="caption">
                  You will recieve emails in your business email address
                </Typography>
                <Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={false} color="primary" />
                      }
                      label="E-mail alerts"
                    />
                  </Box>
                  <Box>
                    <FormControlLabel
                      control={
                        <Checkbox defaultChecked={true} color="primary" />
                      }
                      label="Push notifications"
                    />
                  </Box>
                </Box>
              </Grid>
              <Grid item container xs={12}>
                <Box
                  display="flex"
                  flexDirection={{ xs: 'column', sm: 'row' }}
                  alignItems={{ xs: 'stretched', sm: 'center' }}
                  justifyContent={'space-between'}
                  width={1}
                  margin={'0 auto'}
                >
                  <Box marginBottom={{ xs: 1, sm: 0 }}>
                    <Typography variant={'subtitle2'}>
                      You may also consider to update your{' '}
                      <Link
                        color={'primary'}
                        href={'/account-security'}
                        underline={'none'}
                      >
                        security settings.
                      </Link>
                    </Typography>
                  </Box>
                  <Button size={'large'} variant={'contained'} type={'submit'}>
                    Save
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
      </Page>
    </>
  );
};

export default Notifications;
