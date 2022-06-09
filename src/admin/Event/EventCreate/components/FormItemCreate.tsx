/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 09:32:30
 * @LastEditTime: 2022-06-09 15:34:31
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/FormItemCreate.tsx
 */

import * as yup from 'yup';

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  FormControlLabel,
  Grid,
  Input,
  MenuItem,
  Radio,
  RadioGroup,
  TextField
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import FullScreenLoading from 'components/FullScreenLoading';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import FieldLabel from './FieldLabel';
import { FormType } from 'redux/form/formSlice';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { postFormItem, updateFormItemDetail } from 'redux/form/formSlice';
import { useFormik } from 'formik';
import useMessage from 'hooks/useMessage';

export enum DialogType {
  create,
  edit
}

interface FormItemCreateProp {
  type: DialogType;
  editItem?: any;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  completeCreate: () => void;
}

interface Option {
  label: string;
  key: string;
}

const FormItemCreate: React.FC<FormItemCreateProp> = ({
  type,
  editItem=null,
  open,
  setOpen,
  completeCreate,
}) => {
  const [options, setOptions] = useState<Array<Option>>([]);
  const [newOption, setNewOption] = useState<string>('');
  const ownerUserName = useAppSelector(getOwnerUserName);
  const dispatch = useAppDispatch();
  const message = useMessage();
  const handleClose = () => {
    setOpen(false);
  };
  const [fullScreenLoading, setFullScreenLoading] = useState({
    loading: false,
    message: '',
  });

  const resetForm = () => {
    formik.resetForm();
    setOptions([]);
  };

  useEffect(() => {
    if (type === DialogType.create) {
      resetForm();
    }
    if (type === DialogType.edit && editItem) {
      let inputType = '';
      if (editItem.isString) inputType = 'string';
      if (editItem.isEmail) inputType = 'email';
      if (editItem.isNumber) inputType = 'number';
      formik.setFieldValue('formType', editItem.formType);
      formik.setFieldValue('title', editItem.question);
      formik.setFieldValue('placeholder', editItem.placeholder || '');
      formik.setFieldValue('description', editItem.description || '');
      formik.setFieldValue('label', editItem.label || '');
      formik.setFieldValue('helperText', editItem.helperText || '');
      formik.setFieldValue('minLength', editItem.minLength || 0);
      formik.setFieldValue('maxLength', editItem.maxLength || 0);
      formik.setFieldValue('inputType', inputType || '');
      formik.setFieldValue('isRequired', editItem.isRequired ? 1 : 0);
      if (editItem.formSelectChoices?.length) {
        setOptions(() => {
          const current = editItem.formSelectChoices.map(item => ({
            label: item,
            key: item
          }));
          return current;
        });
      }
    }
  }, [type, editItem]);

  const handleAddOption = () => {
    const exist = options.find((item) => item.label === newOption);
    if (exist) {
      message.open({
        type: 'warning',
        message: `选项${newOption}已存在`,
      });
      return;
    }
    setOptions((prev: Option[]) => {
      const current = [...prev];
      current.push({
        label: newOption,
        key: newOption,
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
    title: yup.string().trim().required('请输入问题名称'),
    formType: yup.string().trim().required('请选择问题类型'),
  });

  const initialValues = {
    title: '',
    placeholder: '',
    description: '',
    label: '',
    formType: '',
    helperText: '',
    minLength: 0,
    maxLength: 0,
    inputType: '',
    isRequired: 0,
  };

  const onSubmit = async (values) => {
    // 如果类型是选择器或者checkbox
    if (
      (formik.values.formType === FormType.Select ||
        formik.values.formType === FormType.RadioGroupH ||
        formik.values.formType === FormType.RadioGroupV) &&
      !options.length
    ) {
      message.open({
        type: 'warning',
        message: '请完成选项配置',
      });
      return;
    }
    setFullScreenLoading({
      loading: true,
      message: type === DialogType.create ? '正在创建问题' : '正在修改问题配置',
    });
    const param = {
      question: values.title,
      order: 1,
      isDate: false,
      isTrim: true,
      isBoolean: values.formType === FormType.Boolean,
      isString: values.inputType === 'string',
      isEmail: values.inputType === 'email',
      isNumber: values.inputType === 'number',
      minLength: values.minLength,
      maxLength: values.maxLength,
      isRequired: !!values.isRequired,
      description: values.description,
      label: values.label,
      helperText: values.helperText,
      formType: values.formType,
      placeholder: values.placeholder,
      formSelectChoices: options.map((item) => item.label),
      owner: ownerUserName,
    };
    // 通过前面的校验后 可以发送请求创建问题
    const res = type === DialogType.create ? await dispatch(
      postFormItem({
        createFormItemInput: param,
      }),
    ) : await dispatch(updateFormItemDetail({
      updateFormItemInput: {
        id: editItem.id,
        ...param
      }
    }));
    if (res.meta.requestStatus === 'fulfilled') {
      message.open({
        type: 'success',
        message: type === DialogType.create ? '问题创建成功，记得加入表单才能生效哦' : '修改问题配置成功',
      });
      setFullScreenLoading({
        loading: false,
        message: '',
      });
      setOpen(false);
      completeCreate();
      resetForm();
    }

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
    <Dialog maxWidth={false} open={open} onClose={handleClose} scroll={'paper'}>
      <FullScreenLoading
        message={fullScreenLoading.message}
        loading={fullScreenLoading.loading}
      />
      <form onSubmit={formik.handleSubmit}>
        <DialogTitle>{ type === DialogType.create ? '创建问题' : '编辑问题' }</DialogTitle>
        <DialogContent dividers>
          <Box width={'50vw'}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <FieldLabel name="问题类型" isRequired />
                <TextField
                  label="Type"
                  variant="outlined"
                  name={'formType'}
                  select={true}
                  size="small"
                  fullWidth
                  value={formik.values.formType}
                  onChange={(e) => handleFieldValueChange(e)}
                  error={
                    formik.touched.formType && Boolean(formik.errors.formType)
                  }
                  helperText={formik.touched.formType && formik.errors.formType}
                >
                  <MenuItem value={FormType.TextFieldShort}>
                    文本输入框
                  </MenuItem>
                  <MenuItem value={FormType.TextFieldLong}>
                    文本输入区域
                  </MenuItem>
                  <MenuItem value={FormType.RadioGroupH}>
                    单项选择（横向）
                  </MenuItem>
                  <MenuItem value={FormType.RadioGroupV}>
                    单项选择（纵向）
                  </MenuItem>
                  <MenuItem value={FormType.Select}>
                    单项选择（下拉选择）
                  </MenuItem>
                  <MenuItem value={FormType.MultipleSelect}>
                    多项选择（下拉选择）
                  </MenuItem>
                  <MenuItem value={FormType.Checkbox}>
                    Checkbox勾选
                  </MenuItem>
                  <MenuItem value={FormType.Boolean}>是或否</MenuItem>
                  <MenuItem value={FormType.DatePicker}>日期选择</MenuItem>
                  <MenuItem value={FormType.TimePicker}>时间选择</MenuItem>
                  <MenuItem value={FormType.DateTimePicker}>
                    日期时间选择
                  </MenuItem>
                  <MenuItem value={FormType.FileUpload}>文件上传</MenuItem>
                </TextField>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                display: formik.values.formType ? 'flex' : 'none',
              }}
            >
              <Grid item xs={12}>
                <Divider sx={{ mt: 2 }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel
                  name="问题标题"
                  isRequired
                  description="必填，显示在输入框上方"
                />
                <TextField
                  label="Title"
                  variant="outlined"
                  name={'title'}
                  fullWidth
                  size="small"
                  value={formik.values.title}
                  onChange={(e) => handleFieldValueChange(e)}
                  error={formik.touched.title && Boolean(formik.errors.title)}
                  helperText={formik.touched.title && formik.errors.title}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ 
                  display: formik.values.formType !== FormType.Boolean &&
                  formik.values.formType !== FormType.RadioGroupH &&
                  formik.values.formType !== FormType.RadioGroupV &&
                  formik.values.formType !== FormType.Checkbox ?
                    'block' : 'none'
                }}
              >
                <FieldLabel
                  name="提示文字"
                  description="输入框聚焦且未输入的情况下显示提示文字"
                />
                <TextField
                  label="Placeholder"
                  variant="outlined"
                  name={'placeholder'}
                  placeholder="提示文字"
                  size="small"
                  fullWidth
                  value={formik.values.placeholder}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ 
                  display: formik.values.formType !== FormType.Boolean &&
                  formik.values.formType !== FormType.RadioGroupH &&
                  formik.values.formType !== FormType.RadioGroupV ?
                    'block' : 'none'
                }}
              >
                <FieldLabel
                  name="问题标签"
                  description={formik.values.formType === FormType.Checkbox ? 'checkbox后面显示的文字' : '输入框未聚焦时显示的文字' }
                />
                <TextField
                  label="问题标签"
                  variant="outlined"
                  name={'label'}
                  placeholder="提示文字"
                  size="small"
                  fullWidth
                  value={formik.values.label}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel
                  name="问题描述"
                  description="鼠标悬浮在问题后的“？”上时显示问题描述"
                />
                <TextField
                  label="Description"
                  variant="outlined"
                  name={'description'}
                  size="small"
                  fullWidth
                  value={formik.values.description}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid>
              {/* <Grid item xs={12} sm={6}>
                <FieldLabel name="校验提示" />
                <TextField
                  label="Helper text"
                  variant="outlined"
                  name={'helperText'}
                  size="small"
                  fullWidth
                  value={formik.values.helperText}
                  helperText={'校验提示会出现在输入框的下方'}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid> */}
              <Grid
                item
                xs={12}
                sm={6}
              >
                <>
                  <FieldLabel name="是否必填" description={formik.values.formType === FormType.Checkbox ? 'checkbox类型不支持配置是否必填，不填写时默认为不勾选' : ''}/>
                  <RadioGroup
                    row
                    aria-labelledby="demo-row-radio-buttons-group-label"
                    name={'isRequired'}
                    value={formik.values.isRequired}
                    onChange={(e) => handleFieldValueChange(e)}
                  >
                    <FormControlLabel
                      value={1}
                      disabled={formik.values.formType === FormType.Checkbox}
                      control={<Radio />}
                      label="必填"
                    />
                    <FormControlLabel
                      value={0}
                      disabled={formik.values.formType === FormType.Checkbox}
                      control={<Radio />}
                      label="非必填"
                    />
                  </RadioGroup>
                </>
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                display:
                  formik.values.formType === FormType.Select ||
                  formik.values.formType === FormType.MultipleSelect ||
                  formik.values.formType === FormType.RadioGroupH ||
                  formik.values.formType === FormType.RadioGroupV
                    ? 'block'
                    : 'none',
              }}
            >
              {/* 选项配置 当选择select或checkbox的时候显示 */}
              <Grid item xs={12}>
                <Divider sx={{ mb: 1, mt: 1 }} />
                <FieldLabel name="选项配置" isRequired />
                {options.map((option, index) => (
                  <Box
                    width="fit-content"
                    padding="6px 24px"
                    display="flex"
                    alignItems={'center'}
                    key={option.key}
                    mb="4px"
                    borderRadius="8px"
                    sx={{
                      '&:hover': {
                        backgroundColor: '#e3f2fd',
                      },
                    }}
                  >
                    {index + 1}. {option.label}
                    <HighlightOffIcon
                      onClick={() => handleRemoveOption(option)}
                      sx={{
                        marginLeft: '24px',
                        color: '#9e9e9e',
                        cursor: 'pointer',
                      }}
                    />
                  </Box>
                ))}
                <Box display="flex" mt="24px" alignItems={'center'}>
                  <Input
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    sx={{ ml: '24px' }}
                    placeholder="Placeholder"
                  />
                  <AddCircleOutlineIcon
                    onClick={handleAddOption}
                    sx={{
                      marginLeft: '12px',
                      color: '#9e9e9e',
                      cursor: 'pointer',
                    }}
                  />
                </Box>
              </Grid>
              <Grid item xs={12}>
                <Divider />
              </Grid>
            </Grid>

            <Grid
              container
              spacing={2}
              sx={{
                display:
                  formik.values.formType === FormType.TextFieldLong ||
                  formik.values.formType === FormType.TextFieldShort
                    ? 'flex'
                    : 'none',
              }}
            >
              <Grid item xs={12}>
                <Divider sx={{ mt: 1 }} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel
                  name="最少输入字数限制"
                  description="0或不填表示不限制"
                />
                <TextField
                  label="Min length"
                  type="number"
                  variant="outlined"
                  name={'minLength'}
                  size="small"
                  fullWidth
                  helperText="仅允许输入数字"
                  value={formik.values.minLength}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel
                  name="最多输入字数限制"
                  description="0或不填表示不限制"
                />
                <TextField
                  label="Max length"
                  variant="outlined"
                  name={'maxLength'}
                  size="small"
                  type="number"
                  fullWidth
                  helperText="仅允许输入数字"
                  value={formik.values.maxLength}
                  onChange={(e) => handleFieldValueChange(e)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FieldLabel name="输入框内容限制" />
                <RadioGroup
                  row
                  aria-labelledby="demo-row-radio-buttons-group-label"
                  name={'inputType'}
                  value={formik.values.inputType}
                  onChange={(e) => handleFieldValueChange(e)}
                >
                  <FormControlLabel
                    value={'string'}
                    control={<Radio />}
                    label="无限制"
                  />
                  <FormControlLabel
                    value={'number'}
                    control={<Radio />}
                    label="仅数字"
                  />
                  <FormControlLabel
                    value={'email'}
                    control={<Radio />}
                    label="Email"
                  />
                </RadioGroup>
              </Grid>
            </Grid>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>取消</Button>
          <Button type={'submit'}>{type === DialogType.create ? '创建' : '编辑'}</Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default FormItemCreate;
