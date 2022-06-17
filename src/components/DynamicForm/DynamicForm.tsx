/*
 * @Author: Shen Shu
 * @Date: 2022-06-02 18:10:36
 * @LastEditors: Shen Shu
 * @LastEditTime: 2022-06-16 22:04:39
 * @FilePath: /uwcssa_ca/src/components/DynamicForm/DynamicForm.tsx
 * @Description:
 *
 */

import { Box, Divider, Paper, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { fetchFormItemList, selectAllFormItems } from 'redux/form/formSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Container from 'components/Container';
import { Form } from 'redux/event/eventSlice';
import FormItemForm from './components/FormItemForm/FormItemForm';
import { getAuthState } from 'redux/auth/authSlice';

function DynamicForm({ formItemList }: any) {
  console.log(formItemList);
  // const dispatch = useAppDispatch();
  // const isAuth = useAppSelector(getAuthState);

  // const { fetchFormItemListStatus } = useAppSelector(
  //   (state) => state.form.formItem,
  // );
  // const formItemList = useAppSelector(selectAllFormItems);
  const formItemListSortByOrder = formItemList.sort(
    (a, b) => a.order - b.order,
  );

  // useEffect(() => {
  //   if (isAuth !== null && fetchFormItemListStatus === 'idle') {
  //     dispatch(
  //       fetchFormItemList({
  //         isAuth,
  //       }),
  //     );
  //   }
  // }, [isAuth, fetchFormItemListStatus]);

  return (
    <Box sx={{ p: '1rem' }}>
      {
        // 这里必须要等待这个数组请求到内容之后再渲染这个组件 因为formik的initValue改成依赖数组长度动态赋值之后
        // 这个数组传一个空的进去 会导致initValue里面没有内容 这样的话 之后渲染的每一个问题的value都会变成undefined
        // 因为initValue是空对象
        formItemList.length ? (
          <FormItemForm formItemList={formItemList} />
        ) : null
      }
    </Box>
  );
}

export default DynamicForm;
