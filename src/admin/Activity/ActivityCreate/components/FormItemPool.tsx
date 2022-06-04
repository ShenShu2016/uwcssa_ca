/*
 * @Author: 李佳修
 * @Date: 2022-06-03 16:11:08
 * @LastEditTime: 2022-06-04 10:52:08
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/FormItemPool.tsx
 */
import React, { useEffect } from 'react';
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
// interface FormItemPoolProp {
//     questions: []
// }

const FormItemPool: React.FC = () => {
  const formItemList = useAppSelector(state => state.form.formItem);
  const selectedList = useAppSelector(state => state.form.createData.selectedQuestions);
  const dispatch = useAppDispatch();
  console.log(formItemList);

  useEffect(() => {
    dispatch(fetchFormItemList({ isAuth: true }));
  }, []);

  const handleAddQuestion = (data) => {
    dispatch(addQuestion(data));
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
                  item.formType === FormType.Select ?
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
                item.formType === FormType.RadioGroupV ?
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
                  <Button variant="text" size='small'>查看详情</Button>
                  <Button variant="text" size='small'>编辑问题</Button>
                </Box>
              </Card>)
              : null
          );
        })
      }
    </>
  );
};

export default FormItemPool;