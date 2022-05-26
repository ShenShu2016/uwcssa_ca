/*
 * @Author: Shen Shu
 * @Date: 2022-05-17 16:01:18
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-17 16:02:28
 * @FilePath: \uwcssa_ca\frontend\src\views\CompanyTerms\components\ContactCard\ContactCard.tsx
 * @Description:
 *
 */

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import React from 'react';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';

const ContactCard = (): JSX.Element => {
  const theme = useTheme();

  return (
    <Box
      component={Card}
      boxShadow={0}
      border={`1px solid ${theme.palette.divider}`}
    >
      <Box padding={{ xs: 2, sm: 3 }}>
        <Typography
          sx={{
            fontWeight: '700',
          }}
          gutterBottom
        >
          How can you contact us about this notice?
        </Typography>
        <Typography
          variant={'body2'}
          color={'text.secondary'}
          sx={{
            marginBottom: 2,
          }}
        >
          If you have any questions or concerns about the privacy policy please
          contact us.
        </Typography>
        <Typography variant={'subtitle2'}>
          hi@maccarianagency.com
          <br />
          via Gola 4
          <br />
          Milan, Milano 20143
          <br />
          Italy
        </Typography>
      </Box>
    </Box>
  );
};

export default ContactCard;
