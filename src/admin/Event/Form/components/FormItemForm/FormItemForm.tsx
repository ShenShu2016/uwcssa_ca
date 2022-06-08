/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: Shen Shu
 * @Date: 2022-06-03 16:39:34
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-06-08 13:46:02
 * @FilePath: /uwcssa_ca/src/admin/Event/Form/components/FormItemForm/FormItemForm.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import { Button, Divider, Grid } from '@mui/material';

import Container from 'components/Container';
import FormInputFieldComponent from './FormInputFieldComponent';
import { FormItem } from 'redux/form/formSlice';
import React from 'react';
import { useFormik } from 'formik';

function getYupValidation(formItem: FormItem) {
  let validation: any = yup;
  if (formItem.formType === 'MultipleSelect') {
    return validation.array().of(yup.string()); //github ai帮忙写的。。牛逼
  }
  if (formItem.formType === 'Checkbox') {
    return validation.boolean();
  }
  if (
    formItem.formType === 'RadioGroupH' ||
    formItem.formType === 'RadioGroupV' ||
    formItem.formType === 'DatePicker' ||
    formItem.formType === 'DateTimePicker' ||
    formItem.formType === 'TimePicker'
  ) {
    return yup.string();
  }
  if (formItem.isString) {
    validation = validation.string();
  }
  if (formItem.isEmail) {
    validation = validation.email('Please enter a valid email address');
  }
  if (formItem.isNumber) {
    validation = validation.number('Please enter a valid number');
  }
  if (formItem.minLength) {
    validation = validation.min(
      formItem.minLength,
      'Please enter more than ' + formItem.minLength + ' characters',
    );
  }
  if (formItem.maxLength) {
    validation = validation.max(
      formItem.maxLength,
      'Please enter less than ' + formItem.maxLength + ' characters',
    );
  }
  if (formItem.isRequired) {
    validation = validation.required('This field is required'); //required 要放在最后面
  }
  return validation;
}

function FormItemForm({ formItemList }: { formItemList: Array<FormItem> }) {
  const sortedFormItemList = formItemList.sort((a, b) => a.order - b.order);
  const validationSchema = yup.object({
    content1: sortedFormItemList[0] && getYupValidation(sortedFormItemList[0]),
    content2: sortedFormItemList[1] && getYupValidation(sortedFormItemList[1]),
    content3: sortedFormItemList[2] && getYupValidation(sortedFormItemList[2]),
    content4: sortedFormItemList[3] && getYupValidation(sortedFormItemList[3]),
    content5: sortedFormItemList[4] && getYupValidation(sortedFormItemList[4]),
    content6: sortedFormItemList[5] && getYupValidation(sortedFormItemList[5]),
    content7: sortedFormItemList[6] && getYupValidation(sortedFormItemList[6]),
    content8: sortedFormItemList[7] && getYupValidation(sortedFormItemList[7]),
    content9: sortedFormItemList[8] && getYupValidation(sortedFormItemList[8]),
    content10: sortedFormItemList[9] && getYupValidation(sortedFormItemList[9]),
    content11:
      sortedFormItemList[10] && getYupValidation(sortedFormItemList[10]),
    content12:
      sortedFormItemList[11] && getYupValidation(sortedFormItemList[11]),
    content13:
      sortedFormItemList[12] && getYupValidation(sortedFormItemList[12]),
    content14:
      sortedFormItemList[13] && getYupValidation(sortedFormItemList[13]),
    content15:
      sortedFormItemList[14] && getYupValidation(sortedFormItemList[14]),
    content16:
      sortedFormItemList[15] && getYupValidation(sortedFormItemList[15]),
    content17:
      sortedFormItemList[16] && getYupValidation(sortedFormItemList[16]),
    content18:
      sortedFormItemList[17] && getYupValidation(sortedFormItemList[17]),
    content19:
      sortedFormItemList[18] && getYupValidation(sortedFormItemList[18]),
  });

  const initialValues = {
    content1: '',
    content2: '',
    content3: '',
    content4: '',
    content5: '',
    content6: '',
    content7: '',
    content8: '',
    content9: '',
    content10: '',
    content11: '',
    content12: '',
    content13: '',
    content14: '',
    content15: '',
    content16: '',
    content17: '',
    content18: '',
    content19: '',
  };

  const onSubmit = async (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });
  return (
    <Container>
      FormItemForm
      <Divider sx={{ my: '2rem' }} />
      <form onSubmit={formik.handleSubmit}>
        <Grid container spacing={1}>
          {sortedFormItemList.map((formItem) => {
            return (
              <Grid item xs={12} sm={12} key={formItem.id}>
                <FormInputFieldComponent formItem={formItem} formik={formik} />
              </Grid>
            );
          })}
        </Grid>
        <Button size={'large'} variant={'contained'} type={'submit'}>
          Submit
        </Button>
      </form>
    </Container>
  );
}

export default FormItemForm;
