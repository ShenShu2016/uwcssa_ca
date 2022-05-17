/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:46:40
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 16:47:08
 * @FilePath: \uwcssa_ca\frontend\src\views\CareerOpening\components\Newsletter\Newsletter.tsx
 * @Description:
 *
 */

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

const Newsletter = (): JSX.Element => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <Typography variant="h4" fontWeight={700}>
            Join over 5000 subscribers for our newsletter
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            component={'form'}
            noValidate
            autoComplete="off"
            sx={{
              '& .MuiInputBase-input.MuiOutlinedInput-input': {
                bgcolor: 'background.paper',
              },
            }}
          >
            <Box
              display="flex"
              flexDirection={{ xs: 'column', sm: 'row' }}
              alignItems={{ xs: 'stretched', sm: 'flex-start' }}
            >
              <Box
                flex={'1 1 auto'}
                component={TextField}
                label="Enter your email"
                variant="outlined"
                color="primary"
                fullWidth
                height={54}
              />
              <Box
                component={Button}
                variant="contained"
                color="primary"
                size="large"
                height={54}
                marginTop={{ xs: 2, sm: 0 }}
                marginLeft={{ sm: 2 }}
              >
                Subscribe
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Newsletter;
