/*
 * @Author: Shen Shu
 * @Date: 2022-05-26 13:57:44
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-05-29 23:56:13
 * @FilePath: /uwcssa_ca/src/views/Settings/Billing/Billing.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Page from '../components/Page';
import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import valid from 'card-validator';

const validationSchema = yup.object({
  cardNumber: yup
    .string()
    .test(
      'test-number',
      'Credit card number is invalid',
      (value) => valid.number(value).isValid,
    ),
  name: yup.string().trim().required('Please specify your name on the card'),
  date: yup
    .string()
    .typeError('Not a valid expiration date. Example: MM/YY')
    .max(5, 'Not a valid expiration date. Example: MM/YY')
    .matches(
      /([0-9]{2})\/([0-9]{2})/,
      'Not a valid expiration date. Example: MM/YY',
    )
    .required('Expiration date is required'),
  zip: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid zip')
    .max(8, 'Please enter a valid zip')
    .required('Please specify the billing zip code'),
  cvv: yup
    .string()
    .trim()
    .matches(/^\d+$/, 'Not a valid CVV. Should contain only numbers')
    .min(3, 'Please enter a valid cvv')
    .max(3, 'Please enter a valid cvv')
    .required('Please specify your card cvv'),
});

const Billing = (): JSX.Element => {
  const initialValues = {
    cardNumber: '',
    name: '',
    date: '',
    zip: '',
    cvv: '',
  };

  const onSubmit = (values) => {
    return values;
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  return (
    <>
      <Page>
        <Box>
          <Typography variant="h6" gutterBottom fontWeight={700}>
            Change your card data
          </Typography>
          <Typography
            variant={'subtitle2'}
            color={'text.secondary'}
            gutterBottom
          >
            Please be informed that we do not share any sensitive information
            such as your bank card data with any third party agencies and
            companies.
          </Typography>
          <Typography variant={'subtitle2'} color={'text.secondary'}>
            Please read our{' '}
            <Link color={'primary'} href={'/company-terms'} underline={'none'}>
              terms of use
            </Link>{' '}
            to be informed how we manage your bank data.
          </Typography>
          <Box paddingY={4}>
            <Divider />
          </Box>
          <Box>
            <form onSubmit={formik.handleSubmit}>
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Enter your card number
                  </Typography>
                  <TextField
                    label="Card number *"
                    variant="outlined"
                    name={'cardNumber'}
                    fullWidth
                    value={formik.values.cardNumber}
                    onChange={formik.handleChange}
                    error={
                      formik.touched.cardNumber &&
                      Boolean(formik.errors.cardNumber)
                    }
                    helperText={
                      formik.touched.cardNumber && formik.errors.cardNumber
                    }
                  />
                </Grid>
                <Grid item xs={12}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Name on the card
                  </Typography>
                  <TextField
                    label="Name *"
                    variant="outlined"
                    name={'name'}
                    fullWidth
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Expiration date
                  </Typography>
                  <TextField
                    label="Expiration date *"
                    variant="outlined"
                    name={'date'}
                    fullWidth
                    value={formik.values.date}
                    onChange={formik.handleChange}
                    error={formik.touched.date && Boolean(formik.errors.date)}
                    helperText={formik.touched.date && formik.errors.date}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    Billing zip code
                  </Typography>
                  <TextField
                    label="Zip code *"
                    variant="outlined"
                    name={'zip'}
                    fullWidth
                    value={formik.values.zip}
                    onChange={formik.handleChange}
                    error={formik.touched.zip && Boolean(formik.errors.zip)}
                    helperText={formik.touched.zip && formik.errors.zip}
                  />
                </Grid>
                <Grid item xs={12} sm={4}>
                  <Typography
                    variant={'subtitle2'}
                    sx={{ marginBottom: 2 }}
                    fontWeight={700}
                  >
                    CVV
                  </Typography>
                  <TextField
                    label="Card CVV *"
                    variant="outlined"
                    name={'cvv'}
                    fullWidth
                    value={formik.values.cvv}
                    onChange={formik.handleChange}
                    error={formik.touched.cvv && Boolean(formik.errors.cvv)}
                    helperText={formik.touched.cvv && formik.errors.cvv}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Divider />
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
                          href={'/account-general'}
                          underline={'none'}
                        >
                          private information.
                        </Link>
                      </Typography>
                    </Box>
                    <Button
                      size={'large'}
                      variant={'contained'}
                      type={'submit'}
                    >
                      Save
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Page>
    </>
  );
};

export default Billing;
