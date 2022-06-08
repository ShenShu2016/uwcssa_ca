/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-08 13:45:16
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/EventPreview.tsx
 */
import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
// import { useAppDispatch, useAppSelector } from 'redux/hooks';
// import { postEvent } from 'redux/event/eventSlice';
import { useSwiper } from 'swiper/react';

const EventPreview: React.FC = () => {
  const swiper = useSwiper();
  // const createData = useAppSelector(state => state.form.createData);

  const printData = () => {
    // console.log(createData);
    // const data = {

    // }
  };

  // __typename: "Event",
  // id: string,
  // title?: string | null,
  // coverPageImgURL?: string | null,
  // coverPageDescription?: string | null,
  // content?: string | null,
  // imgURLs?: Array< string | null > | null,
  // sponsor?: Array< string | null > | null,
  // online: boolean,
  // group: boolean,
  // tags?: ModelEventTagsConnection | null,
  // startDate: string,
  // endDate: string,
  // eventStatus: EventStatus,
  // eventLocation?: Address | null,
  // form?: Form | null,
  // comments?: ModelCommentConnection | null,
  // eventParticipants?: ModelEventParticipantConnection | null,
  // active: ActiveType,
  // createdAt: string,
  // updatedAt: string,
  // owner: string,
  // user?: UserProfile | null,
  // eventEventLocationId?: string | null,
  // eventFormId?: string | null,

  const completeActivityCreate = () => {console.log(999);};

  return (
    <Box height='80vh'>
      <Box>
        <Button
          variant="contained"
          endIcon={<ArrowBackIcon />}
          onClick={() => swiper.slidePrev()}
        >
            配置报名表单
        </Button>
      </Box>
      <Box>这里准备做整个活动创建的preview 可以先空出来 等用户端的ui做好以后 再补到这里 让这里的预览和效果和用户最终看到的保持一致</Box>
      <Box>
        <Button sx={{m: '24px'}} variant="contained" onClick={printData}>console.log要提交的表单数据</Button>
        <br />
        <Button sx={{m: '24px'}} variant="contained" onClick={completeActivityCreate}>提交表单</Button>
      </Box>
    </Box>
  );
};

export default EventPreview;