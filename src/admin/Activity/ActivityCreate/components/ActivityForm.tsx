import React, { useState } from 'react';
import RichTextEditor from 'components/RichTextEditor';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useFormik } from 'formik';
import * as yup from 'yup';

interface ActivityFormProp {
  setCurrentComponent: (currentComponent: string) => void;
}

const validationSchema = yup.object({
  title: yup
    .string()
    .trim()
    .required('请输入活动标题'),
  dateTime: yup
    .date()
    .nullable()
    .required('请选择活动时间'),
  address: yup
    .string()
    .trim()
    .required('请输入活动地点'),
  limit: yup
    .number()
    .min(0, '输入人数无效')
    .required('请输入活动最多限制人数'),
});

const ActivityForm: React.FC<ActivityFormProp> = ({ setCurrentComponent }) => {

  const [description, setDescription] = useState('');

  const initialValues = {
    title: '',
    dateTime: null,
    address: '',
    limit: 0,
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
      <Box mb={2} sx={{ float: 'right' }}>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => setCurrentComponent('ActivityConfig')}
        >
           配置报名表单
        </Button>
      </Box>
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              活动标题
            </Typography>
            <TextField
              label="Title *"
              variant="outlined"
              name={'title'}
              fullWidth
              size='small'
              value={formik.values.title}
              onChange={formik.handleChange}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              活动时间
            </Typography>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Date & Time *"
                value={formik.values.dateTime}
                minDate={new Date()}
                minTime={new Date()}
                onChange={(val) => formik.setFieldValue('dateTime', val)}
                renderInput={(params) => 
                  <TextField
                    {...params} 
                    size='small'
                    fullWidth
                    name={'dateTime'}
                    error={formik.touched.dateTime && Boolean(formik.errors.dateTime)}
                    helperText={formik.touched.dateTime && formik.errors.dateTime}
                  />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              活动地点
            </Typography>
            <TextField
              label="Address *"
              variant="outlined"
              name={'address'}
              fullWidth
              size='small'
              value={formik.values.address}
              onChange={formik.handleChange}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} sm={4}>
            <Typography
              variant={'subtitle2'}
              sx={{ marginBottom: 2 }}
              fontWeight={700}
            >
              最多参与人数（0表示不限制）
            </Typography>
            <TextField
              label="Member limitation *"
              variant="outlined"
              name={'limit'}
              type="number"
              fullWidth
              size='small'
              value={formik.values.limit}
              onChange={formik.handleChange}
              error={formik.touched.limit && Boolean(formik.errors.limit)}
              helperText={formik.touched.limit && formik.errors.limit}
            />
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
        </Grid>
        <Box
          width='100%'
          height='60vh'
        >
          <Typography
            variant={'subtitle2'}
            sx={{
              marginTop: 2,
              marginBottom: 1
            }}
            fontWeight={700}
          >
            活动描述
          </Typography>
          <RichTextEditor content={description} setContent={setDescription} height='calc(100% - 21px)'/>
        </Box>
        <Button
          size={'large'}
          variant={'contained'}
          type={'submit'}
          sx={{
            width: '150px',
            marginTop: 4,
            float: 'right'
          }}
        >
          Save
        </Button>
      </form>
    </>
  );
};

export default ActivityForm;