/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-03 18:18:13
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/components/ActivityConfig.tsx
 */
import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FormItemCreate from './FormItemCreate';
import FormItemPool from './FormItemPool';
import Typography from '@mui/material/Typography';
import { FormType } from 'redux/form/formSlice';
import TextFieldShort from './FormItems/TextFieldShort';
import Select from './FormItems/Select';
import { useAppSelector } from 'redux/hooks';
import { useSwiper } from 'swiper/react';

const ActivityConfig: React.FC = () => {
  const swiper = useSwiper();
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const selectedQuestions = useAppSelector(state => state.form.createData.selectedQuestions);

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
        <Box height={'100%'} width='30%' paddingY={2}>
          <FormItemPool />
        </Box>
        <Box
          height={'100%'}
          width='70%'
          padding={2}
          display='flex'
          flexDirection={'column'}
          alignItems='center'
        >
          <Typography variant="h6" gutterBottom component="div">
              活动报名表单
          </Typography>
          {
            selectedQuestions.map(item => (
              <Box key={item.id}>
                {
                  item.formType === FormType.TextFieldShort ?
                    <TextFieldShort item={item}/> : null
                }
             
                {
                  item.formType === FormType.Select ?
                    <Select item={item}/> : null
                }
              </Box>
            ))
          }
          <Button
            variant="contained"
            sx={{width: '30%'}}
            onClick={() => setDialogOpen(true)}
          >
            新建问题
          </Button>
        </Box>
      </Box>
      <FormItemCreate open={dialogOpen} setOpen={setDialogOpen}/>
    </Box>
  );
};

export default ActivityConfig;
