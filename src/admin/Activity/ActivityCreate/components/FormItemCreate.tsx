/*
 * @Author: 李佳修
 * @Date: 2022-06-03 09:32:30
 * @LastEditTime: 2022-06-04 12:13:54
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItemCreate.tsx
 */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import { FormType } from 'redux/form/formSlice';
import MenuItem from '@mui/material/MenuItem';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import Input from '@mui/material/Input';
import useMessage from 'hooks/useMessage';
import { useFormik } from 'formik';
import FieldLabel from './FieldLabel';
import { postFormItem } from 'redux/form/formSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import { getOwnerUserName } from 'redux/auth/authSlice';
import * as yup from 'yup';
import { Divider } from '@mui/material';


interface FormItemCreateProp {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    completeCreate: () => void
}

interface Option {
    label: string;
    key: string;
}

const FormItemCreate: React.FC<FormItemCreateProp> = ({ open, setOpen, completeCreate }) => {
  const [options, setOptions] = useState<Array<Option>>([]);
  const [newOption, setNewOption] = useState<string>('');
  const ownerUserName = useAppSelector(getOwnerUserName);
  const dispatch = useAppDispatch();
  const message = useMessage();
  const handleClose = () => {
    setOpen(false);
  };

  const handleAddOption = () => {
    const exist = options.find(item => item.label === newOption);
    if (exist) {
      message.open({
        type: 'warning',
        message: `选项${newOption}已存在`
      });
      return;
    }
    setOptions((prev: Option[]) => {
      const current = [...prev];
      current.push({
        label: newOption,
        key: newOption
      });
      return current;
    });
    setNewOption('');
  };

  const handleRemoveOption = (option: Option) => {
    const current = options.filter((item) => item.key !== option.key);
    setOptions(current);
  };

  const validationSchema = yup.object({
    title: yup
      .string()
      .trim()
      .required('请输入问题名称'),
    formType: yup
      .string()
      .trim()
      .required('请选择问题类型'),
  });

  const initialValues = {
    title: '',
    placeholder: '',
    description: '',
    formType: '',
    isRequired: false
  };

  const onSubmit = async (values) => {
    console.log(values);
    // 如果类型是选择器或者checkbox
    if ((formik.values.formType === FormType.Select ||
        formik.values.formType === FormType.Checkbox ||
        formik.values.formType === FormType.RadioGroupH ||
        formik.values.formType === FormType.RadioGroupV)
        && !options.length) {
      message.open({
        type: 'warning',
        message: '请完成选项配置'
      });
      return;
    }

    // 通过前面的校验后 可以发送请求创建问题
    const res = await dispatch(postFormItem({
      createFormItemInput: {
        name: values.title,
        order: 1,
        isString: true,
        isEmail: false,
        isNumber: false,
        isRequired: values.isRequired,
        description: values.description,
        formType: values.formType,
        placeholder: values.placeholder,
        formSelectChoices: options.map((item) => item.label),
        owner: ownerUserName
      }
    }));
    if (res.meta.requestStatus === 'fulfilled') {
      message.open({
        type: 'success',
        message: '问题创建成功，记得加入表单才能生效哦'
      });
      setOpen(false);
      completeCreate();
    }
    console.log(res);

    return values;
  };

  const formik = useFormik({ 
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const handleFieldValueChange = (e) => {
    formik.handleChange(e);
  };

  return (
    
    <Dialog
      maxWidth={false}
      open={open}
      onClose={handleClose}
      scroll={'paper'}
    >
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>创建问题</DialogTitle>
        <DialogContent dividers>
          <Box width={'50vw'}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <FieldLabel name='问题标题' isRequired />
                <TextField
                  label="Title"
                  variant="outlined"
                  name={'title'}
                  fullWidth
                  size='small'
                  value={formik.values.title}
                  onChange={(e) => handleFieldValueChange(e)}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel name='问题类型' isRequired />
                <TextField
                  label="Type"
                  variant="outlined"
                  name={'formType'}
                  select={true}
                  size='small'
                  fullWidth
                  value={formik.values.formType}
                  onChange={(e) => handleFieldValueChange(e)}
                  error={formik.touched.formType && Boolean(formik.errors.formType)}
                  helperText={formik.touched.formType && formik.errors.formType}
                >
                  <MenuItem value={FormType.TextFieldShort}>文本输入框</MenuItem>
                  <MenuItem value={FormType.TextFieldLong}>文本输入区域</MenuItem>
                  <MenuItem value={FormType.RadioGroupH}>单项选择（横向）</MenuItem>
                  <MenuItem value={FormType.RadioGroupV}>单项选择（纵向）</MenuItem>
                  <MenuItem value={FormType.Select}>多项选择（下拉选择）</MenuItem>
                  <MenuItem value={FormType.Checkbox}>多项选择（checkbox）</MenuItem>
                  {/* <MenuItem value={FormType.RadioGroupH}>是或否</MenuItem> */}
                  <MenuItem value={FormType.DatePicker}>日期选择</MenuItem>
                  <MenuItem value={FormType.TimePicker}>时间选择</MenuItem>
                  <MenuItem value={FormType.DateTimePicker}>日期时间选择</MenuItem>
                </TextField>
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel name='提示文字' />
                <TextField
                  label="Placeholder"
                  variant="outlined"
                  name={'placeholder'}
                  placeholder='提示文字'
                  size='small'
                  fullWidth
                  value={formik.values.placeholder}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel name='问题描述' description='鼠标悬浮在问题后的“？”上时显示问题描述'/>
                <TextField
                  label="Description"
                  variant="outlined"
                  name={'description'}
                  size='small'
                  fullWidth
                  value={formik.values.description}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid>
              {/* 选项配置 当选择select或checkbox的时候显示 */}
              <Grid
                item
                xs={12}
                sx={{
                  display: formik.values.formType === FormType.Select ||
                  formik.values.formType === FormType.Checkbox ||
                  formik.values.formType === FormType.RadioGroupH ||
                  formik.values.formType === FormType.RadioGroupV ?
                    'block' : 'none'
                }}
              >
                <Divider sx={{ mb: 1 }}/>
                <FieldLabel name='选项配置' isRequired/>
                {
                  options.map((option, index) => (
                    <Box
                      width='fit-content'
                      padding='6px 24px'
                      display='flex'
                      alignItems={'center'}
                      key={option.key}
                      mb='4px'
                      borderRadius='8px'
                      sx={{
                        '&:hover': {
                          backgroundColor: '#e3f2fd'
                        }
                      }}
                    >
                      {index + 1}. {option.label}
                      <HighlightOffIcon
                        onClick={() => handleRemoveOption(option)}
                        sx={{ marginLeft: '24px', color: '#9e9e9e', cursor: 'pointer' }}
                      />
                    </Box>
                  ))
                }
                <Box
                  display='flex'
                  mt='24px'
                  alignItems={'center'}
                >
                  <Input
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    sx={{ ml: '24px' }} 
                    placeholder="Placeholder" />
                  <AddCircleOutlineIcon
                    onClick={handleAddOption}
                    sx={{ marginLeft: '12px', color: '#9e9e9e', cursor: 'pointer' }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel name='是否必填' />
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name={'isRequired'}
                  value={formik.values.isRequired}
                  onChange={(e) => handleFieldValueChange(e)}
                >
                  <FormControlLabel value={true} control={<Radio />} label="必填" />
                  <FormControlLabel value={false} control={<Radio />} label="非必填" />
                </RadioGroup>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button type={'submit'}>创建</Button>
        </DialogActions>
      </form>
    </Dialog>
    
  );
};

export default FormItemCreate;