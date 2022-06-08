/*
 * @Author: 李佳修
 * @Date: 2022-06-03 16:11:08
 * @LastEditTime: 2022-06-05 15:54:02
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItemPool.tsx
 */
import React, { useEffect, useState } from 'react';
import { fetchFormItemList } from 'redux/form/formSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import { FormType } from 'redux/form/formSlice';
import TextFieldShort from './FormItems/TextFieldShort';
import TextFieldLong from './FormItems/TextFieldLong';
import Select from './FormItems/Select';
import DatePicker from './FormItems/DatePicker';
import TimePicker from './FormItems/TimePicker';
import DateTimePicker from './FormItems/DateTimePicker';
import RadioGroup from './FormItems/RadioGroup';
import CheckBoxGroup from './FormItems/CheckBoxGroup';
import Button from '@mui/material/Button';
import { addQuestion } from 'redux/form/formSlice';
import FormItemDetail from './FormItemDetail';
import { FormItem } from 'redux/form/formSlice';
// interface FormItemPoolProp {
//     questions: []
// }

const FormItemPool: React.FC = () => {
  const formItemList = useAppSelector(state => state.form.formItem);
  const selectedList = useAppSelector(state => state.form.createData.selectedQuestions);
  const [detailDialogOpen, setDetailDialogOpen] = useState<boolean>(false);
  const [detailedItem, setDetailedItem] = useState<null | FormItem>(null);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFormItemList({ isAuth: true }));
  }, []);

  const handleAddQuestion = (data) => {
    dispatch(addQuestion(data));
  };

  const handleCheckDetail = (data) => {
    setDetailedItem(data);
    setDetailDialogOpen(true);
  };

  return (
    <>
      {
        formItemList?.entities && Object.keys(formItemList.entities).map(key => {
          const item = formItemList.entities[key];
          return (
            selectedList.findIndex(ele => ele.id === key) === -1 ?
              (<Card
                sx={{
                  p: 1,
                  marginY: 1,
                  cursor: 'pointer'
                }}
                key={key}
              >
                {
                  item.formType === FormType.TextFieldShort ?
                    <TextFieldShort item={item}/> : null
                }

                {
                  item.formType === FormType.TextFieldLong ?
                    <TextFieldLong item={item}/> : null
                }
             
                {
                  item.formType === FormType.Select || item.formType === FormType.MultipleSelect ?
                    <Select item={item}/> : null
                }

                {
                  item.formType === FormType.DatePicker ?
                    <DatePicker item={item}/> : null
                }

                {
                  item.formType === FormType.TimePicker ?
                    <TimePicker item={item}/> : null
                }

                {
                  item.formType === FormType.DateTimePicker ?
                    <DateTimePicker item={item}/> : null
                }

                {
                  item.formType === FormType.RadioGroupH ||
                  item.formType === FormType.RadioGroupV ||
                  item.formType === FormType.Boolean ?
                    <RadioGroup item={item}/> : null
                }

                {
                  item.formType === FormType.Checkbox ?
                    <CheckBoxGroup item={item}/> : null
                }
                <Box
                  display={'flex'}
                  justifyContent={'space-between'}
                >
                  <Button variant="text" size='small' onClick={() => handleAddQuestion(item)}>使用问题</Button>
                  <Button variant="text" size='small' onClick={() => handleCheckDetail(item)}>查看详情</Button>
                  <Button variant="text" size='small'>编辑问题</Button>
                </Box>
              </Card>)
              : null
          );
        })
      }
      <FormItemDetail open={detailDialogOpen} setOpen={setDetailDialogOpen} item={detailedItem}/>
    </>
  );
};

export default FormItemPool;