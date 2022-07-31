/* eslint-disable indent */
/*
 * @Author: 李佳修
 * @Date: 2022-06-03 16:11:08
 * @LastEditTime: 2022-07-27 14:34:23
 * @LastEditors: Leo
 * @FilePath: \uwcssa_ca\src\admin\Event\EventCreate\components\FormItemPool.tsx
 */

import { Box, Button, Card } from "@mui/material";
import React, { useEffect } from "react";
import {
  fetchFormItemList,
  selectAllFormItems,
  FormType,
  addQuestion,
} from "redux/form/formSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import CheckBoxGroup from "./FormItems/CheckBoxGroup";
import DatePicker from "./FormItems/DatePicker";
import DateTimePicker from "./FormItems/DateTimePicker";

import RadioGroup from "./FormItems/RadioGroup";
import Select from "./FormItems/Select";
import TextFieldLong from "./FormItems/TextFieldLong";
import TextFieldShort from "./FormItems/TextFieldShort";
import TimePicker from "./FormItems/TimePicker";

// import FormItemDetail from './FormItemDetail';
// import { FormItem } from 'redux/form/formSlice';
// import FormItemCreate from './FormItemCreate';
// import { DialogType } from './FormItemCreate';

// interface FormItemPoolProp {
//     questions: []
// }
function FormItemPool() {
  const formItemList = useAppSelector(selectAllFormItems);
  // const selectedList = useAppSelector(state => state.form.createData.selectedQuestions);
  // const [detailDialogOpen, setDetailDialogOpen] = useState<boolean>(false);
  // const [detailedItem, setDetailedItem] = useState<null | FormItem>(null);
  // const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  // const [editItem, setEditItem] = useState(null);
  const dispatch = useAppDispatch();

  // console.log(formItemList);

  useEffect(() => {
    dispatch(
      fetchFormItemList({ isAuth: true, filter: { isExample: { eq: true } } }),
    );
  }, [dispatch]);

  const handleAddQuestion = (data) => {
    dispatch(addQuestion(data));
  };

  // const handleCheckDetail = (data) => {
  //   setDetailedItem(data);
  //   setDetailDialogOpen(true);
  // };

  // const handleEditQuestion = (data) => {
  //   setEditItem(data);
  //   setEditDialogOpen(true);
  //   // console.log(data);
  // };

  // const handleCompleteCreateFormItem = () => {
  //   dispatch(fetchFormItemList({ isAuth: true }));
  // };

  return (
    <>
      {formItemList &&
        formItemList.map((item) => (
          <Card
            sx={{
              p: 1,
              marginY: 1,
              cursor: "pointer",
            }}
            key={item.id}
          >
            {item.formType === FormType.TextFieldShort ? (
              <TextFieldShort item={item} />
            ) : null}

            {item.formType === FormType.TextFieldLong ? (
              <TextFieldLong item={item} />
            ) : null}

            {item.formType === FormType.Select ||
            item.formType === FormType.MultipleSelect ? (
              <Select item={item} />
            ) : null}

            {item.formType === FormType.DatePicker ? (
              <DatePicker item={item} />
            ) : null}

            {item.formType === FormType.TimePicker ? (
              <TimePicker item={item} />
            ) : null}

            {item.formType === FormType.DateTimePicker ? (
              <DateTimePicker item={item} />
            ) : null}

            {item.formType === FormType.RadioGroupH ||
            item.formType === FormType.RadioGroupV ||
            item.formType === FormType.Boolean ? (
              <RadioGroup item={item} />
            ) : null}

            {item.formType === FormType.Checkbox ? (
              <CheckBoxGroup item={item} />
            ) : null}
            <Box paddingY={1} display="flex" justifyContent="space-between">
              <Button
                variant="text"
                size="small"
                onClick={() => handleAddQuestion(item)}
              >
                使用问题
              </Button>
              {/* <Button variant="text" size='small' onClick={() => handleCheckDetail(item)}>查看详情</Button>
                  <Button variant="text" size='small' onClick={() => handleEditQuestion(item)}>编辑问题</Button> */}
            </Box>
          </Card>
        ))}
      {/* <FormItemCreate
        editItem={editItem}
        type={DialogType.edit}
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
        completeCreate={handleCompleteCreateFormItem}
      />
      <FormItemDetail open={detailDialogOpen} setOpen={setDetailDialogOpen} item={detailedItem}/> */}
    </>
  );
}

export default FormItemPool;
