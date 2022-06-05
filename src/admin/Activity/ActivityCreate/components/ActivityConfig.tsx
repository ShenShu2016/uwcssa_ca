/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-05 16:24:21
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/ActivityConfig.tsx
 */
import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormItemCreate from './FormItemCreate';
import FormItemPool from './FormItemPool';
import Typography from '@mui/material/Typography';
import { FormType } from 'redux/form/formSlice';
import TextFieldShort from './FormItems/TextFieldShort';
import TextFieldLong from './FormItems/TextFieldLong';
import Select from './FormItems/Select';
import DatePicker from './FormItems/DatePicker';
import TimePicker from './FormItems/TimePicker';
import DateTimePicker from './FormItems/DateTimePicker';
import RadioGroup from './FormItems/RadioGroup';
import CheckBoxGroup from './FormItems/CheckBoxGroup';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import { useSwiper } from 'swiper/react';
import { removeQuestion, reorderQuestion } from 'redux/form/formSlice';
import Tooltip from '@mui/material/Tooltip';
import { fetchFormItemList } from 'redux/form/formSlice';
import TextField from '@mui/material/TextField';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';

const ActivityConfig: React.FC = () => {
  const swiper = useSwiper();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedQuestions = useAppSelector(state => state.form.createData.selectedQuestions);
  const rederList = [...selectedQuestions];
  rederList.sort((prev, next) => prev.order - next.order);
  console.log(rederList);
  
  const handleRemoveQuestion = (item) => {
    dispatch(removeQuestion(item));
  };

  const handleCompleteCreateFormItem = () => {
    dispatch(fetchFormItemList({ isAuth: true }));
  };

  const handleOrderChange = (e, item) => {
    if (e.target.value !== '') {
      dispatch(reorderQuestion({
        order: e.target.value,
        item
      }));
    }
    console.log(e.target.value, item);
  };

  return (
    <Box p={'2px'}>
      <Box display='flex' justifyContent='space-between'>
        <Button
          variant="contained"
          endIcon={<ArrowBackIcon />}
          onClick={() => swiper.slidePrev()}
        >
           添加活动海报
        </Button>
        <Button
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          onClick={() => swiper.slideNext()}
        >
           完成活动创建
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: '110vh',
        }}
      >
        <Box height={'100%'} width='35%' padding={'12px 24px 12px 0px'} overflow='auto'>
          <FormItemPool />
        </Box>
        <Box
          height={'100%'}
          width='65%'
          display='flex'
          flexDirection={'column'}
          alignItems='center'
          overflow='auto'
        >
          <Typography variant="h6" gutterBottom component="div">
              活动报名表单
          </Typography>
          <Box width={'100%'}  boxSizing='border-box'>
            {
              rederList.map(item => (
                <Box
                  key={item.id}
                  mt={1}
                  padding={2}
                  display='flex'
                  borderRadius={'12px'}
                  sx={{
                    '&:hover': {
                      background: '#e1f5fe',
                      '& .remove_icon': {
                        display: 'flex'
                      }
                    }
                  }}
                >
                  <Box
                    width='100px'
                    display={'flex'}
                    p={2}
                    alignItems={'center'}
                  >
                    <TextField
                      id="outlined-multiline-flexible"
                      type='number'
                      label="排序"
                      size='small'
                      inputProps={{ min: 1, max: rederList.length }}
                      value={item.order}
                      onChange={(e) => handleOrderChange(e, item)}
                      InputLabelProps={{
                        sx: {
                          fontSize: '12px'
                        }
                      }}
                    />
                  </Box>
                  <Box width={'calc(100% - 150px)'}>
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
                  </Box>
                  <Box
                    className='remove_icon'
                    width='50px'
                    display='none'
                    alignItems='center'
                    justifyContent='flex-end'
                  >
                    <Tooltip title={'移除问题'} placement="top" arrow>
                      <RemoveCircleIcon
                        sx={{color: '#e53935', cursor: 'pointer'}}
                        onClick={() => handleRemoveQuestion(item)}
                      />
                    </Tooltip>
                  </Box>
                </Box>
              ))
            }
          </Box>
          <Button
            variant="contained"
            sx={{width: '30%', mt: '24px'}}
            onClick={() => setDialogOpen(true)}
          >
            新建问题
          </Button>
        </Box>
      </Box>
      <FormItemCreate open={dialogOpen} setOpen={setDialogOpen} completeCreate={handleCompleteCreateFormItem}/>
    </Box>
  );
};

export default ActivityConfig;
