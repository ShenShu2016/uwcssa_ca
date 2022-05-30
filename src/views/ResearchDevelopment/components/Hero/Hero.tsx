/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useTheme } from '@mui/material/styles';

import Container from 'components/Container';

const validationSchema = yup.object({
  name: yup
    .string()
    .trim()
    .min(2, 'Please enter a valid name')
    .max(50, 'Please enter a valid name')
    .required('Please specify your name'),
  email: yup
    .string()
    .trim()
    .email('Please enter a valid email address')
    .required('Email is required.'),
});

const Hero = (): JSX.Element => {
  const theme = useTheme();

  const initialValues = {
    name: '',
    email: '',
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
    <Box position={'relative'} zIndex={2}>
      <Box width={1} height={1} position={'absolute'} overflow={'hidden'}>
        <Box
          width={1}
          height={1}
          position={'absolute'}
          top={'50%'}
          left={'50%'}
          sx={{ transform: 'translate(-50%,-50%)' }}
        >
          <iframe
            frameBorder="0"
            allowFullScreen={true}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            title="YouTube video player"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/0qisGSwZym4?autoplay=1&controls=0&showinfo=0&mute=1&loop=1&playlist=0qisGSwZym4"
          />
        </Box>
      </Box>
      <Box
        position={'relative'}
        zIndex={2}
        minHeight={{ xs: 'calc(100vh - 158px)', md: 'calc(100vh - 230px)' }}
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        marginTop={-13}
        paddingTop={13}
        sx={{
          '&::after': {
            content: '""',
            backgroundColor: theme.palette.primary.dark,
            backgroundImage: `linear-gradient(315deg, ${theme.palette.primary.dark} 0%, #031024 60%)`,
            opacity: '0.9',
            width: 1,
            height: 1,
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            zIndex: 3,
          },
        }}
      >
        <Container position={'relative'} zIndex={4}>
          <Box>
            <Box marginBottom={4}>
              <Typography
                variant={'h3'}
                align={'center'}
                gutterBottom
                sx={{
                  color: theme.palette.common.white,
                  fontWeight: 700,
                }}
              >
                We craft beautiful websites and digital products
              </Typography>
              <Typography
                variant={'h6'}
                align={'center'}
                sx={{
                  color: theme.palette.common.white,
                  fontWeight: 700,
                }}
              >
                We design, develop and launch websites and products for
                startups, companies and ourselves.
              </Typography>
            </Box>
            <Box
              padding={{ xs: 3, sm: 6 }}
              width={1}
              component={Card}
              boxShadow={1}
              data-aos="fade-up"
            >
              <form
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
              >
                <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }}>
                  <Box
                    width={1}
                    marginRight={{ xs: 0, md: 2 }}
                    marginBottom={{ xs: 4, md: 0 }}
                    display={'flex'}
                    flexDirection={{ xs: 'column', md: 'row' }}
                  >
                    <TextField
                      sx={{
                        height: 54,
                        marginRight: { xs: 0, md: 2 },
                        marginBottom: { xs: 4, md: 0 },
                      }}
                      variant="outlined"
                      color="primary"
                      size="medium"
                      label="Name"
                      fullWidth
                      name={'name'}
                      value={formik.values.name}
                      onChange={formik.handleChange}
                      error={formik.touched.name && Boolean(formik.errors.name)}
                      helperText={formik.touched.name && formik.errors.name}
                    />
                    <TextField
                      sx={{
                        height: 54,
                      }}
                      variant="outlined"
                      color="primary"
                      size="medium"
                      label="Email"
                      fullWidth
                      name={'email'}
                      value={formik.values.email}
                      onChange={formik.handleChange}
                      error={
                        formik.touched.email && Boolean(formik.errors.email)
                      }
                      helperText={formik.touched.email && formik.errors.email}
                    />
                  </Box>
                  <Box>
                    <Button
                      sx={{ height: 54, whiteSpace: 'nowrap', minWidth: 100 }}
                      variant="contained"
                      color="primary"
                      size="medium"
                      fullWidth
                      type="submit"
                    >
                      Send
                    </Button>
                  </Box>
                </Box>
              </form>
            </Box>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Hero;
