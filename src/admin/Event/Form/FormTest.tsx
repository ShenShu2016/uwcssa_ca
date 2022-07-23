/*
 * @Author: Shen Shu
 * @Date: 2022-06-02 18:10:36
 * @LastEditors: 李佳修
 * @LastEditTime: 2022-06-08 16:45:07
 * @FilePath: /uwcssa_ca/src/admin/Event/Form/FormTest.tsx
 * @Description:
 *
 */

import { Box, Divider, Paper, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { fetchFormItemList, selectAllFormItems } from "redux/form/formSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import Container from "components/Container";
import { getAuthState } from "redux/auth/authSlice";
import FormItemForm from "./components/FormItemForm/FormItemForm";

function FormTest() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(getAuthState);

  const { fetchFormItemListStatus } = useAppSelector(
    (state) => state.form.formItem,
  );
  const formItemList = useAppSelector(selectAllFormItems);
  const formItemListSortByOrder = formItemList.sort(
    (a, b) => a.order - b.order,
  );

  useEffect(() => {
    if (isAuth !== null && fetchFormItemListStatus === "idle") {
      dispatch(
        fetchFormItemList({
          isAuth,
        }),
      );
    }
  }, [isAuth, fetchFormItemListStatus]);

  return (
    <Box sx={{ p: "1rem" }}>
      FormTest
      <Box sx={{ display: "flex", flexWrap: "wrap" }}>
        {formItemListSortByOrder.map((item) => (
          <Container
            key={item.id}
            component={Paper}
            sx={{ maxWidth: "350px", m: "1rem" }}
          >
            <Typography variant="body2">
              name:
              {item.question}
            </Typography>
            <Typography>
              order:
              {item.order}
            </Typography>
            <Typography>
              isRequired:
              {item.isRequired.toString()}
            </Typography>
            <Typography>
              isString:
              {item.isString.toString()}
            </Typography>
            <Typography>
              isEmail:
              {item.isEmail.toString()}
            </Typography>
            <Typography>
              isNumber:
              {item.isNumber.toString()}
            </Typography>
            <Typography>
              description:
              {item.description}
            </Typography>
            <Typography>
              formType:
              {item.formType}
            </Typography>
            <Typography>
              helperText:
              {item.helperText}
            </Typography>
            <Typography>
              minLength:
              {item.minLength}
            </Typography>
            <Typography>
              maxLength:
              {item.maxLength}
            </Typography>
            <Typography>
              placeholder:
              {item.placeholder}
            </Typography>
            <Typography>
              label:
              {item.label}
            </Typography>
            <Typography>
              formSelectChoices:
              {item.formSelectChoices?.map((select) => select)}
            </Typography>
            <Typography>
              createdAt:
              {item.createdAt}
            </Typography>
            <Typography>
              updatedAt:
              {item.updatedAt}
            </Typography>
            <Typography>
              owner:
              {item.owner}
            </Typography>
          </Container>
        ))}
      </Box>
      <Divider />
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

export default FormTest;
