/* eslint-disable react/function-component-definition */
/* eslint-disable indent */
/*
 * @Author: 李佳修
 * @Date: 2022-06-05 14:38:23
 * @LastEditTime: 2022-07-27 15:17:35
 * @LastEditors: Leo
 * @FilePath: \uwcssa_ca\src\admin\Event\EventCreate\components\FormItemDetail.tsx
 */

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import { FormItem, FormType } from "redux/form/formSlice";

import React from "react";
import moment from "moment";

interface FormItemDetailProp {
  item: FormItem;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormItemDetail: React.FC<FormItemDetailProp> = ({
  open,
  setOpen,
  item,
}) => (
  <Dialog
    // maxWidth={false}
    open={open}
    onClose={() => setOpen(false)}
    scroll="paper"
  >
    <DialogTitle>查看问题详情</DialogTitle>
    <DialogContent dividers>
      {item ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
            <TableBody>
              <TableRow>
                <TableCell width="30%" component="th" scope="row">
                  id
                </TableCell>
                <TableCell width="70%" align="right">
                  {item.id}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component="th" scope="row">
                  问题类型
                </TableCell>
                <TableCell align="right">
                  {item.formType === FormType.TextFieldShort
                    ? "文本输入框"
                    : ""}
                  {item.formType === FormType.TextFieldLong
                    ? "文本输入区域"
                    : ""}
                  {item.formType === FormType.RadioGroupH
                    ? "单项选择（横向）"
                    : ""}
                  {item.formType === FormType.RadioGroupV
                    ? "单项选择（纵向）"
                    : ""}
                  {item.formType === FormType.Select
                    ? "单项选择（下拉选择）"
                    : ""}
                  {item.formType === FormType.Checkbox
                    ? "多项选择（checkbox）"
                    : ""}
                  {item.formType === FormType.Boolean ? "是或否" : ""}
                  {item.formType === FormType.DatePicker ? "日期选择" : ""}
                  {item.formType === FormType.TimePicker ? "时间选择" : ""}
                  {item.formType === FormType.DateTimePicker
                    ? "日期时间选择"
                    : ""}
                  {item.formType === FormType.FileUpload ? "文件上传" : ""}
                  {item.formType === FormType.MultipleSelect
                    ? "多项选择（下拉选择）"
                    : ""}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  问题名称
                </TableCell>
                <TableCell align="right">{item.question || "-"}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  是否必填
                </TableCell>
                <TableCell align="right">
                  {item.isRequired ? "是" : "否"}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  内容类型
                </TableCell>
                <TableCell align="right">
                  {item.isString ? "无内容类型限制 " : ""}
                  {item.isEmail ? "邮箱 " : ""}
                  {item.isNumber ? "仅数字 " : ""}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  问题描述
                </TableCell>
                <TableCell align="right">{item.description || "-"}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  提示文字
                </TableCell>
                <TableCell align="right">{item.placeholder || "-"}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  问题标签
                </TableCell>
                <TableCell align="right">{item.label || "-"}</TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  校验提示
                </TableCell>
                <TableCell align="right">{item.helperText || "-"}</TableCell>
              </TableRow>

              {item.formType === FormType.TextFieldLong ||
              item.formType === FormType.TextFieldShort ? (
                <>
                  <TableRow>
                    <TableCell component="th" scope="row">
                      输入最大长度
                    </TableCell>
                    <TableCell align="right">
                      {!item.maxLength ? "不限制" : item.maxLength}
                    </TableCell>
                  </TableRow>

                  <TableRow>
                    <TableCell component="th" scope="row">
                      输入最小长度
                    </TableCell>
                    <TableCell align="right">
                      {!item.minLength ? "不限制" : item.minLength}
                    </TableCell>
                  </TableRow>
                </>
              ) : null}
              {item.formType === FormType.Select ||
              item.formType === FormType.MultipleSelect ||
              item.formType === FormType.Checkbox ||
              item.formType === FormType.RadioGroupH ||
              item.formType === FormType.RadioGroupV ? (
                <TableRow>
                  <TableCell component="th" scope="row">
                    选项
                  </TableCell>
                  <TableCell align="right">
                    {item.formSelectChoices?.join(", ")}
                  </TableCell>
                </TableRow>
              ) : null}

              <TableRow>
                <TableCell component="th" scope="row">
                  问题创建时间
                </TableCell>
                <TableCell align="right">
                  {moment(item.createdAt).format("MMMM Do YYYY, h:mm a") || "-"}
                </TableCell>
              </TableRow>

              <TableRow>
                <TableCell component="th" scope="row">
                  问题最后修改时间
                </TableCell>
                <TableCell align="right">
                  {moment(item.updatedAt).format("MMMM Do YYYY, h:mm a") || "-"}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : null}
    </DialogContent>
    <DialogActions>
      <Button onClick={() => setOpen(false)}>Ok</Button>
    </DialogActions>
  </Dialog>
);

export default FormItemDetail;
