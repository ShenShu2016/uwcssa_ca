/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-05-31 10:20:04
 * @LastEditTime: 2022-06-01 15:18:06
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Activity/ActivityCreate/ActivityCreate.tsx
 */
import React, { useState } from 'react';
import PageTitle from 'admin/components/pageTitle';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import ActivityForm from './components/ActivityForm';
import ActivityConfig from './components/ActivityConfig';
import ActivityPoster from './components/ActivityPoster';
import ActivityPreview from './components/ActivityPreview';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export interface ActivityFormInfo {
    title: string;
    dateTime: null | Date;
    address: string;
    limit: number;
    content: string;
}
// isComplete记录该页面是否完成所有必填信息
// 如果isComplete为true 那么step显示绿色
const steps = [
  {
    label: '填写活动信息',
    key: 'ActivityForm',
    isComplete: true
  },{
    label: '添加活动海报',
    key: 'ActivityPoster',
    isComplete: false
  },{
    label: '配置报名表单',
    key: 'ActivityConfig',
    isComplete: false
  },{
    label: '完成',
    key: 'ActivityPreview',
    isComplete: false
  }

];

const ActivityCreate: React.FC = () => {

  const [activeStep, setActiveStep] = useState(0);
  const [activityForm, setActivityForm] = useState<ActivityFormInfo>({
    title: '',
    dateTime: null,
    address: '',
    limit: 0,
    content: ''
  });

  return (
    <>
      <PageTitle
        title='发起活动'
        marginTop='-50px'
        description={
          <Stepper activeStep={activeStep} alternativeLabel>
            {steps.map((step) => (
              <Step
                key={step.key}
                completed={step.isComplete}
                sx={{
                  '& .MuiStepLabel-label.MuiStepLabel-alternativeLabel':
                      {
                        color: 'common.white', // Just text label (ACTIVE)
                      },
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#aed581', // circle color (COMPLETED)
                  },
                  '& .Mui-active': {
                    color: '#f9a825 !important', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                      {
                        color: 'common.white', // Just text label (COMPLETED)
                      },
                }}
              >
                <StepLabel>{step.label}</StepLabel>
              </Step>
            ))}
          </Stepper>
        }
      >
        <Box paddingX={'5%'} pb={4}>
          <Card
            sx={{
              paddingX: 4,
              paddingY: 2
            }}>
            <Swiper
              spaceBetween={100}
              speed={800}
              allowTouchMove={false}
              onSlideChange={(e) => setActiveStep(e.activeIndex)}
            >
              <SwiperSlide>
                <ActivityForm activityForm={activityForm} setActivityForm={setActivityForm}/>
              </SwiperSlide>
              <SwiperSlide>
                <ActivityPoster/>
              </SwiperSlide>
              <SwiperSlide>
                <ActivityConfig/>
              </SwiperSlide>
              <SwiperSlide>
                <ActivityPreview/>
              </SwiperSlide>
            </Swiper>
          </Card>
        </Box>
      </PageTitle>
    </>
  );
};

export default ActivityCreate;