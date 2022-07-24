/* eslint-disable @typescript-eslint/no-shadow */
/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-05-31 10:20:04
 * @LastEditTime: 2022-07-24 15:40:36
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/EventCreate.tsx
 */

import "swiper/css";

import { Box, Card, Step, StepLabel, Stepper } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

import PageTitle from "admin/components/pageTitle";
import { useAppSelector } from "redux/hooks";
import FullScreenLoading from "components/FullScreenLoading/FullScreenLoading";
import EventConfig from "./components/EventConfig";
import EventForm from "./components/EventForm";
import EventPoster from "./components/EventPoster";
import EventPreview from "./components/EventPreview";

export enum Steps {
  EventForm = "EventForm",
  EventPoster = "EventPoster",
  EventConfig = "EventConfig",
  EventPreview = "EventPreview",
}
export interface ActivityFormInfo {
  title: string;
  dateTime: null | Date;
  address: string;
  limit: number;
  content: string;
}

const stepItems = [
  {
    label: "填写活动信息",
    key: Steps.EventForm,
  },
  {
    label: "添加活动海报",
    key: Steps.EventPoster,
  },
  {
    label: "配置报名表单",
    key: Steps.EventConfig,
  },
  {
    label: "完成",
    key: Steps.EventPreview,
  },
];

function SwipeCommiter({ activeStep }: any) {
  const swiper = useSwiper();

  useEffect(() => {
    swiper.slideTo(activeStep);
  }, [activeStep]);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  return <></>;
}
function EventCreate(): React.ReactElement {
  const completed = useAppSelector(
    (state) => state.form.createData.completeStatus,
  );
  const [activeStep, setActiveStep] = useState<number>(0);
  const [loading, setLoading] = useState({
    status: false,
    message: "",
  });

  return (
    <PageTitle
      title="发起活动"
      marginTop="-50px"
      description={
        <Stepper activeStep={activeStep} alternativeLabel>
          {stepItems.map((step, index) => (
            <Step
              key={step.key}
              completed={completed[step.key]}
              sx={{
                "& .MuiStepLabel-label.MuiStepLabel-alternativeLabel": {
                  color: "common.white", // Just text label (ACTIVE)
                },
                "& .MuiStepLabel-root .Mui-completed": {
                  color: "#aed581", // circle color (COMPLETED)
                },
                "& .Mui-active": {
                  color: "#f9a825 !important", // circle color (COMPLETED)
                },
                "& .MuiStepLabel-label.Mui-completed.MuiStepLabel-alternativeLabel":
                  {
                    color: "common.white", // Just text label (COMPLETED)
                  },
              }}
            >
              <StepLabel
                sx={{
                  "& svg": {
                    cursor: "pointer",
                  },
                }}
                onClick={() => setActiveStep(index)}
              >
                {step.label}
              </StepLabel>
            </Step>
          ))}
        </Stepper>
      }
    >
      <Box paddingX="2%" pb={4}>
        <FullScreenLoading loading={loading.status} message={loading.message} />
        <Card
          sx={{
            paddingX: 4,
            paddingY: 2,
          }}
        >
          <Swiper
            spaceBetween={100}
            speed={800}
            allowTouchMove={false}
            onSlideChange={(e) => setActiveStep(e.activeIndex)}
          >
            <SwipeCommiter activeStep={activeStep} />
            <SwiperSlide>
              <EventForm />
            </SwiperSlide>
            <SwiperSlide>
              <EventPoster />
            </SwiperSlide>
            <SwiperSlide>
              <EventConfig />
            </SwiperSlide>
            <SwiperSlide>
              <EventPreview setLoading={setLoading} />
            </SwiperSlide>
          </Swiper>
        </Card>
      </Box>
    </PageTitle>
  );
}
export default EventCreate;
