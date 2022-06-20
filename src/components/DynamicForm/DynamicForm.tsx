/*
 * @Author: Shen Shu
 * @Date: 2022-06-02 18:10:36
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-19 23:30:15
 * @FilePath: /uwcssa_ca/src/components/DynamicForm/DynamicForm.tsx
 * @Description:
 *
 */

import * as yup from 'yup';

import { Button, DialogActions, DialogContent, Grid } from '@mui/material';

import FormInputFieldComponent from './components/FormItemForm/FormInputFieldComponent';
import { FormItem } from 'redux/form/formSlice';
import React from 'react';
import { useFormik } from 'formik';

function getYupValidation(formItem: FormItem) {
  let validation: any = yup;
  if (formItem.formType === 'MultipleSelect') {
    return validation.array().of(yup.string()); //github ai帮忙写的。。牛逼
  }
  if (formItem.formType === 'Boolean' || formItem.formType === 'Checkbox') {
    validation = validation.boolean();
  } else {
    if (formItem.isNumber) {
      validation = validation.number('Please enter a valid number');
    } else {
      validation = validation.string();
      if (formItem.isEmail) {
        validation = validation.email('Please enter a valid email address');
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
    }
  }

  if (formItem.isRequired) {
    validation = validation.required('This field is required'); //required 要放在最后面
  }
  return validation;
}

function DynamicForm({ formItemList, setOpen }: any) {
  const formItemListSortByOrder = [...formItemList];
  formItemListSortByOrder.sort((a, b) => a.order - b.order);

  const initialValues = {};
  const yupObject = {};

  formItemListSortByOrder.forEach((item) => {
    if (item.formType === 'Checkbox') {
      initialValues[`content${item.order}`] = false;
    } else {
      initialValues[`content${item.order}`] = '';
    }
    yupObject[`content${item.order}`] = item && getYupValidation(item);
  });

  const validationSchema = yup.object(yupObject);

  const onSubmit = async (values) => {
    console.log('表单提交', values);
    setOpen(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: validationSchema,
    onSubmit,
  });

  const handleSubmitClicked = (values) => {
    if (!formik.isValid) {
      //console.error('表单未完成' + formik.errors);
    } else {
      //console.log('表单完成', values);
    }
  };
  return (
    <form onSubmit={formik.handleSubmit}>
      <DialogContent dividers>
        <Grid container spacing={4}>
          {formItemListSortByOrder.map((formItem) => {
            return (
              <Grid item xs={12} sm={12} key={formItem.id} marginX={4}>
                <FormInputFieldComponent formItem={formItem} formik={formik} />
              </Grid>
            );
          })}
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button type={'submit'} onClick={handleSubmitClicked}>
          提交
        </Button>
      </DialogActions>
    </form>
  );
}

export default DynamicForm;
