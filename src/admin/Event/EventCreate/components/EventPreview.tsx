/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-06-18 21:52:16
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/EventPreview.tsx
 */

import { EventStatus, postForm, postFormItem } from 'redux/form/formSlice';
import React, { useState } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import { ActiveType } from 'API';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import FullScreenLoading from 'components/FullScreenLoading';
import { getOwnerUserName } from 'redux/auth/authSlice';
import { postEvent } from 'redux/event/eventSlice';
import useMessage from 'hooks/useMessage';
import { useSwiper } from 'swiper/react';
import { v4 as uuid } from 'uuid';

const EventPreview: React.FC = () => {
  const swiper = useSwiper();
  const dispatch = useAppDispatch();
  const createData = useAppSelector((state) => state.form.createData);
  const ownerUsername = useAppSelector(getOwnerUserName);
  const message = useMessage();
  const preArticleId = uuid();

  const [loading, setLoading] = useState({
    status: false,
    message: '',
  });
  const printData = () => {
    console.log(createData);
    const data = {
      id: preArticleId,
      title: createData.basicInfo.title,
      coverPageImgURL: createData.posterImage,
      content: createData.basicInfo.content,
      online: createData.basicInfo.online,
      group: false,
      description: createData.basicInfo.description,
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
    setLoading({
      status: true,
      message: '正在创建报名表单',
    });
    const formId = await createForm();
    if (!formId) {
      message.error('表单创建错误， 请重试');
      return;
    }
    setLoading({
      status: true,
      message: '正在发布活动',
    });
    const createEventInput = {
      id: preArticleId,
      title: createData.basicInfo.title,
      coverPageImgURL: createData.posterImage,
      content: createData.basicInfo.content,
      online: createData.basicInfo.online,
      group: false, //这个好像还没做
      eventFormId: formId,
      startDate: createData.basicInfo.startDateTime,
      endDate: createData.basicInfo.endDateTime,
      eventStatus: EventStatus.ComingSoon,
      // eventEventLocationId: undefined, //这东西要跟google map api结合 和另一个 Address 表联动。。
      eventEventLocationId: createData.basicInfo.address,
      eventCountId: uuid(), //这个东西我要在slice里面处理。 就undefined 放着
      active: ActiveType.T,
      owner: ownerUsername,
    };
    const response = await dispatch(
      postEvent({
        createEventInput,
      }),
    );
    console.log(response);
    if (response.meta.requestStatus === 'fulfilled') {
      message.success('活动创建成功');
    } else {
      message.error('活动创建失败');
    }
    setLoading({
      status: false,
      message: '',
    });
  };

  const createForm = async () => {
    // 首先先创建一个form
    const formRes = await dispatch(
      postForm({
        createFormInput: {
          owner: ownerUsername,
        },
      }),
    );
    if (formRes.meta.requestStatus === 'fulfilled') {
      console.log(formRes);
      const formId = formRes.payload.id;
      const reqList = createData.selectedQuestions.map((item) => ({
        ...item,
        id: undefined,
        createdAt: undefined,
        updatedAt: undefined,
        formFormItemsId: formId,
        isExample: false,
      }));
      const resList = await Promise.all(
        reqList.map((req) =>
          dispatch(
            postFormItem({
              createFormItemInput: req,
            }),
          ),
        ),
      );
      const complete = resList.every(
        (item) => item.meta.requestStatus === 'fulfilled',
      );
      if (!complete) {
        return;
      }
      console.log(resList);
    } else {
      return;
    }
    return formRes.payload.id;
  };

  return (
    <Box height="80vh">
      <FullScreenLoading loading={loading.status} message={loading.message} />
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
