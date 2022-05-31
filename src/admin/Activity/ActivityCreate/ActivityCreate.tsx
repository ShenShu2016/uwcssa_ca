/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-05-31 10:20:04
 * @LastEditTime: 2022-05-31 18:02:32
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

const steps = [
  '填写活动信息',
  '配置报名表单',
  '完成',
];

const ActivityCreate: React.FC = () => {

  const [currentComponent, setCurrentComponent] = useState('ActivityForm');

  return (
    <>
      <PageTitle
        title='发起活动'
        marginTop='-50px'
        description={
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((label) => (
              <Step
                key={label}
                sx={{
                  '& .MuiStepLabel-root .Mui-completed': {
                    color: '#aed581', // circle color (COMPLETED)
                  },
                  '& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel':
                      {
                        color: 'common.white', // Just text label (COMPLETED)
                      },
                  '& .MuiStepLabel-root .Mui-active': {
                    color: 'secondary.main', // circle color (ACTIVE)
                  },
                  '& .MuiStepLabel-label.Mui-active.MuiStepLabel-alternativeLabel':
                      {
                        color: 'common.white', // Just text label (ACTIVE)
                      },
                  '& .MuiStepLabel-root .Mui-active .MuiStepIcon-text': {
                    fill: 'black', // circle's number (ACTIVE)
                  },
                }}
              >
                <StepLabel>{label}</StepLabel>
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
            <ActivityForm key='ActivityForm' setCurrentComponent={setCurrentComponent}/>
            <ActivityConfig key='ActivityConfig'/>
          </Card>
        </Box>
      </PageTitle>
    </>
  );
};

export default ActivityCreate;