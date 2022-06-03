/*
 * @Author: Shen Shu
 * @Date: 2022-06-02 18:10:36
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-03 17:58:17
 * @FilePath: /uwcssa_ca/src/admin/Activity/Form/FormTest.tsx
 * @Description:
 *
 */

import { Box, Divider, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { fetchFormItemList, selectAllFormItems } from 'redux/form/formSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Container from 'components/Container';
import FormItemForm from './components/FormItemForm/FormItemForm';
import { getAuthState } from 'redux/auth/authSlice';

function FormTest() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);

  const { fetchFormItemListStatus } = useAppSelector(
    (state) => state.form.formItem,
  );
  const formItemList = useAppSelector(selectAllFormItems);

  useEffect(() => {
    if (isAuth !== null && fetchFormItemListStatus === 'idle') {
      dispatch(
        fetchFormItemList({
          isAuth,
        }),
      );
    }
  }, [isAuth, fetchFormItemListStatus]);

  return (
    <Container>
      FormTest
      <Box sx={{ display: 'flex' }}>
        {formItemList.map((item) => {
          return (
            <Container key={item.id} component={Paper}>
              <Typography variant="body2">name: {item.name}</Typography>
              <Typography>order: {item.order}</Typography>
              <Typography>isRequired: {item.isRequired.toString()}</Typography>
              <Typography>isString: {item.isString.toString()}</Typography>
              <Typography>isEmail: {item.isEmail.toString()}</Typography>
              <Typography>isNumber: {item.isNumber.toString()}</Typography>
              <Typography>description: {item.description}</Typography>
              <Typography>formType: {item.formType}</Typography>
              <Typography>helperText: {item.helperText}</Typography>
              <Typography>minLength: {item.minLength}</Typography>
              <Typography>maxLength: {item.maxLength}</Typography>
              <Typography>placeholder: {item.placeholder}</Typography>
              <Typography>label: {item.label}</Typography>
              <Typography>
                formSelectChoices:
                {item.formSelectChoices?.map((select) => {
                  return select;
                })}
              </Typography>
              <Typography>createdAt:{item.createdAt}</Typography>
              <Typography>updatedAt:{item.updatedAt}</Typography>
              <Typography>owner:{item.owner}</Typography>
            </Container>
          );
        })}
      </Box>
      <Divider />
      <FormItemForm formItemList={formItemList} />
    </Container>
  );
}

export default FormTest;
