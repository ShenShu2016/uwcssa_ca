/* eslint-disable indent */
/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-07-24 15:45:36
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/EventPreview.tsx
 */

import { Box, Button, Card, Dialog, DialogTitle } from "@mui/material";
import { EventStatus, postForm, postFormItem } from "redux/form/formSlice";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { ActiveType } from "API";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import EventSwiperItem from "components/EventContainer/components/EventSwiperItem";
// import FullScreenLoading from 'components/FullScreenLoading';
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { getOwnerUserName } from "redux/auth/authSlice";
import { postAddress } from "redux/address/addressSlice";
import { postEvent } from "redux/event/eventSlice";
import { useSnackbar } from "notistack";
import { useSwiper } from "swiper/react";
import { v4 as uuid } from "uuid";
import DynamicForm from "components/DynamicForm/DynamicForm";
import EventDetail from "views/Event/EventDetail/EventDetail";

interface EventPreviewProp {
  setLoading: React.Dispatch<
    React.SetStateAction<{
      status: boolean;
      message: string;
    }>
  >;
}
function EventPreview({ setLoading }: EventPreviewProp) {
  const swiper = useSwiper();
  const dispatch = useAppDispatch();
  const { enqueueSnackbar } = useSnackbar();
  const createData = useAppSelector((state) => state.form.createData);
  const eventCreateAddress = useAppSelector(
    (state) => state.address.eventCreateAddress,
  );
  console.log(eventCreateAddress);
  const ownerUsername = useAppSelector(getOwnerUserName);
  const [open, setOpen] = useState<boolean>(false);
  const previewData = {
    title: createData.basicInfo.title,
    coverPageImgURL: createData.posterImage,
    content: createData.basicInfo.content,
    online: createData.basicInfo.online,
    group: false,
    description: createData.basicInfo.description,
    startDate: createData.basicInfo.startDateTime,
    endDate: createData.basicInfo.endDateTime,
    eventStatus: EventStatus.ComingSoon,
    eventEventLocationId: undefined, // 这东西要跟google map api结合 和另一个 Address 表联动。。
    eventFormId: undefined, // 这东西要跟google map api结合 和另一个 Address 表联动。。
    active: "T",
  };
  console.log(createData.completeStatus);

  const preArticleId = uuid();
  const preAddressId = uuid();

  // const [loading, setLoading] = useState({
  //   status: false,
  //   message: '',
  // });
  // const printData = () => {
  //   console.log(createData);
  //   const data = {
  //     id: preArticleId,
  //     title: createData.basicInfo.title,
  //     coverPageImgURL: createData.posterImage,
  //     content: createData.basicInfo.content,
  //     online: createData.basicInfo.online,
  //     group: false,
  //     description: createData.basicInfo.description,
  //     startDate: createData.basicInfo.startDateTime,
  //     endDate: createData.basicInfo.endDateTime,
  //     eventStatus: EventStatus.ComingSoon,
  //     eventEventLocationId: undefined, //这东西要跟google map api结合 和另一个 Address 表联动。。
  //     eventFormId: undefined, //这东西要跟google map api结合 和另一个 Address 表联动。。
  //     active: 'T',
  //   };
  //   console.log(data);
  // };

  const completeActivityCreate = async () => {
    setLoading({
      status: true,
      message: "正在创建报名表单",
    });
    // eslint-disable-next-line @typescript-eslint/no-use-before-define
    const formId = await createForm();
    if (!formId) {
      enqueueSnackbar("表单创建错误，请重试", { variant: "error" });
      return;
    }
    setLoading({
      status: true,
      message: "正在发布活动",
    });
    const createAddressInput = {
      id: preAddressId,
      name: eventCreateAddress.name,
      formatted_address: eventCreateAddress.formatted_address,
      place_id: eventCreateAddress.place_id,
      reference: eventCreateAddress.reference,
      types: eventCreateAddress.types,
      getPlaceResult: eventCreateAddress,
      lat: eventCreateAddress.geometry.location.lat(),
      lng: eventCreateAddress.geometry.location.lng(),
      owner: ownerUsername,
    };
    console.log(createAddressInput);
    setLoading({
      status: true,
      message: "正在创建地址",
    });
    const responseAddress = await dispatch(postAddress({ createAddressInput }));
    console.log(responseAddress);
    const createEventInput = {
      id: preArticleId,
      title: createData.basicInfo.title,
      coverPageDescription: createData.basicInfo.description,
      coverPageImgURL: createData.posterImage,
      content: createData.basicInfo.content,
      online: createData.basicInfo.online,
      group: false, // 这个好像还没做
      eventFormId: formId,
      startDate: createData.basicInfo.startDateTime,
      endDate: createData.basicInfo.endDateTime,
      eventStatus: EventStatus.ComingSoon,
      // eventEventLocationId: undefined, //这东西要跟google map api结合 和另一个 Address 表联动。。
      eventEventLocationId: preAddressId,
      eventCountId: uuid(), // 这个东西我要在slice里面处理。 就undefined 放着
      active: ActiveType.T,
      owner: ownerUsername,
    };
    console.log(98989, createEventInput);
    setLoading({
      status: true,
      message: "正在创建活动",
    });
    const response = await dispatch(
      postEvent({
        createEventInput,
      }),
    );
    console.log(response);
    if (response.meta.requestStatus === "fulfilled") {
      enqueueSnackbar("活动创建成功", { variant: "success" });
    } else {
      enqueueSnackbar("活动创建失败", { variant: "error" });
    }
    setLoading({
      status: false,
      message: "",
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
    if (formRes.meta.requestStatus === "fulfilled") {
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
        (item) => item.meta.requestStatus === "fulfilled",
      );
      if (!complete) {
        return;
      }
      console.log(resList);
    } else {
      return;
    }
    // eslint-disable-next-line consistent-return
    return formRes.payload.id;
  };

  return (
    <Box height="80vh">
      <Dialog
        open={open}
        maxWidth="xs"
        fullWidth
        onClose={() => setOpen(false)}
        scroll="paper"
      >
        <DialogTitle>
          {previewData ? previewData.title : "活动报名"}
        </DialogTitle>

        <DynamicForm
          formItemList={createData.selectedQuestions}
          setOpen={undefined}
          eventId={undefined}
        />
      </Dialog>
      <Box>
        <Button
          variant="contained"
          endIcon={<ArrowBackIcon />}
          onClick={() => swiper.slidePrev()}
        >
          配置报名表单
        </Button>
      </Box>
      {createData.completeStatus.EventForm &&
      createData.completeStatus.EventPoster ? (
        <Box sx={{ m: "2rem" }}>
          <Card sx={{ p: 2 }}>
            <EventSwiperItem
              event={previewData}
              handleJoinEvent={() => setOpen(true)}
              fromPreview
            />
          </Card>
          <Box mt={2} p={2} component={Card} height="60vh" overflow="auto">
            <EventDetail
              fromPreview
              previewEvent={previewData}
              prevenJoinClick={() => setOpen(true)}
            />
          </Box>
        </Box>
      ) : (
        <Card
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            minHeight: "30vh",
          }}
        >
          <NotInterestedIcon sx={{ fontSize: "60px", color: "#9e9e9e" }} />
          <Box mt={2}>请完成所有必填信息后再进行预览和确认提交</Box>
        </Card>
      )}

      <Box display="flex" justifyContent="center">
        {/* <Button sx={{ m: '24px' }} variant="contained" onClick={printData}>
          console.log要提交的表单数据
        </Button>
        <br /> */}
        <Button
          size="large"
          sx={{ m: "24px", width: "50%" }}
          variant="contained"
          onClick={completeActivityCreate}
          disabled={
            !createData.completeStatus.EventForm ||
            !createData.completeStatus.EventPoster
          }
        >
          提交表单
        </Button>
      </Box>
    </Box>
  );
}

export default EventPreview;
