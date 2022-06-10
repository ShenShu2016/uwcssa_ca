/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-09 22:00:57
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/EventPreview.tsx
 */

import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { ActiveType } from 'API';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { EventStatus } from 'redux/form/formSlice';
import React from 'react';
import { create } from 'domain';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { postEvent } from 'redux/event/eventSlice';
import { useSwiper } from 'swiper/react';
import { v4 as uuid } from 'uuid';

const EventPreview: React.FC = () => {
  const swiper = useSwiper();
  const dispatch = useAppDispatch();
  const createData = useAppSelector((state) => state.form.createData);
  const ownerUsername = useAppSelector(getOwnerUserName);
  const preArticleId = uuid();
  const printData = () => {
    console.log(createData);
    const data = {
      id: preArticleId,
      title: createData.basicInfo.title,
      coverPageImgURL: createData.posterImage,
      content: createData.basicInfo.content,
      online: createData.basicInfo.online,
      group: false,
      startDate: createData.basicInfo.startDateTime,
      endDate: createData.basicInfo.endDateTime,
      eventStatus: EventStatus.ComingSoon,
      eventEventLocationId: undefined, //这东西要跟google map api结合 和另一个 Address 表联动。。
      eventFormId: undefined, //这东西要跟google map api结合 和另一个 Address 表联动。。
      active: 'T',
    };
    console.log(data);
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

  const completeActivityCreate = async () => {
    const createEventInput = {
      id: preArticleId,
      title: createData.basicInfo.title,
      coverPageImgURL: createData.posterImage,
      content: createData.basicInfo.content,
      online: createData.basicInfo.online,
      group: false, //这个好像还没做
      startDate: createData.basicInfo.startDateTime,
      endDate: createData.basicInfo.endDateTime,
      eventStatus: EventStatus.ComingSoon,
      eventEventLocationId: undefined, //这东西要跟google map api结合 和另一个 Address 表联动。。
      eventFormId: undefined, // 这里放form 的ID 不是form item 的id。
      eventCountId: undefined, //这个东西我要在slice里面处理。 就undefined 放着
      active: ActiveType.T,
      owner: ownerUsername,
    };
    const response = await dispatch(
      postEvent({
        createEventInput,
      }),
    );
    if (response.meta.requestStatus === 'fulfilled') {
      alert('活動創建成功');
    } else {
      alert('活動創建失敗');
    }
  };

  return (
    <Box height="80vh">
      <Box>
        <Button
          variant="contained"
          endIcon={<ArrowBackIcon />}
          onClick={() => swiper.slidePrev()}
        >
          配置报名表单
        </Button>
      </Box>
      <Box>
        这里准备做整个活动创建的preview 可以先空出来 等用户端的ui做好以后
        再补到这里 让这里的预览和效果和用户最终看到的保持一致
      </Box>
      <Box>
        <Button sx={{ m: '24px' }} variant="contained" onClick={printData}>
          console.log要提交的表单数据
        </Button>
        <br />
        <Button
          sx={{ m: '24px' }}
          variant="contained"
          onClick={completeActivityCreate}
        >
          提交表单
        </Button>
      </Box>
    </Box>
  );
};

export default EventPreview;
