/* eslint-disable react/require-default-props */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable no-nested-ternary */
/*
 * @Author: 李佳修
 * @Date: 2022-06-08 10:31:57
 * @LastEditors: Leo
 * @LastEditTime: 2022-07-27 16:23:35
 * @FilePath: \uwcssa_ca\src\admin\Event\EventCreate\components\EventForm.tsx
 * @Description:
 *
 */

import * as yup from "yup";

import {
  Box,
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { setBasicInfo } from "redux/form/formSlice";
import { useAppDispatch } from "redux/hooks";
import { useFormik } from "formik";
import { useSwiper } from "swiper/react";
import RichTextEditor from "components/RichTextEditor/RichTextEditor";
import GoogleMapDialog from "./GoogleMapDialog";
import FieldLabel from "./FieldLabel";

enum FieldType {
  title = "title",
  online = "online",
  startDateTime = "startDateTime",
  endDateTime = "endDateTime",
  address = "address",
  limit = "limit",
  description = "description",
  content = "content",
}

const validationSchema = yup.object({
  title: yup.string().trim().required("请输入活动标题"),
  startDateTime: yup.date().nullable().required("请选择活动时间"),
  address: yup.string().trim().required("请输入活动地点"),
  limit: yup.number().min(0, "输入人数无效").required("请输入活动最多限制人数"),
  description: yup.string().trim().required("请输入活动描述"),
});
function EventForm({ basicInfo = null }: { basicInfo?: any }) {
  const [description, setDescription] = useState<string>("");
  const [googleMapDialog, setGoogleMapDialog] = useState<boolean>(false);
  const swiper = useSwiper();
  // const activityForm = useAppSelector(state => state.form.createData.basicInfo);
  const [data, setData] = useState({
    title: "",
    startDateTime: null,
    endDateTime: null,
    online: false,
    address: "",
    limit: 0,
    description: "",
    content: "",
  });

  const dispatch = useAppDispatch();

  const onSubmit = (values) => values;

  const formik = useFormik({
    initialValues: data,
    validationSchema,
    onSubmit,
  });

  useEffect(() => {
    if (basicInfo) {
      dispatch(setBasicInfo(basicInfo));
      formik.setValues(basicInfo);
      setDescription(basicInfo.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basicInfo]);

  const handleFieldValueChange = (e, type: FieldType) => {
    setData((prev) => ({
      ...prev,
      [type]:
        type === FieldType.online
          ? e.target.checked
          : type === FieldType.startDateTime ||
            type === FieldType.endDateTime ||
            type === FieldType.content ||
            type === FieldType.address
          ? e
          : e.target.value,
    }));
    // 如果是rte传过来的内容 还需要设置一下description 是用于这个组件里显示内容的
    // 设置完之后就可以return了 因为rte和formik没关系
    if (type === FieldType.content) {
      setDescription(e);
      return;
    }
    if (type === FieldType.online) {
      formik.setFieldValue(type, e.target.checked);
    }
    type === FieldType.startDateTime || type === FieldType.endDateTime
      ? formik.setFieldValue(type, e)
      : formik.handleChange(e);
  };

  const onLocationSelect = (location) => {
    if (location) {
      formik.setFieldValue("address", location.formatted_address);
      handleFieldValueChange(location.place_id, FieldType.address);
    }
  };

  const handleSwiperNext = () => {
    swiper.slideNext();
    dispatch(setBasicInfo(data));
  };

  return (
    <Box p="2px">
      <GoogleMapDialog
        open={googleMapDialog}
        setOpen={setGoogleMapDialog}
        onLocationSelect={onLocationSelect}
      />
      <form onSubmit={formik.handleSubmit}>
        <Box sx={{ float: "right" }}>
          <Button
            variant="contained"
            type="submit"
            endIcon={<ArrowForwardIcon />}
            onClick={handleSwiperNext}
          >
            添加活动海报
          </Button>
        </Box>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={9}>
            <FieldLabel name="活动标题" isRequired />
            <TextField
              label="Title"
              variant="outlined"
              name="title"
              fullWidth
              size="small"
              value={formik.values.title}
              onChange={(e) => handleFieldValueChange(e, FieldType.title)}
              error={formik.touched.title && Boolean(formik.errors.title)}
              helperText={formik.touched.title && formik.errors.title}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FieldLabel name="线上活动" />
            <FormControlLabel
              name="online"
              value={formik.values.online}
              onChange={(e) => handleFieldValueChange(e, FieldType.online)}
              control={<Checkbox size="small" />}
              label="该活动为线上活动"
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FieldLabel name="活动开始时间" isRequired />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Date & Time"
                value={formik.values.startDateTime}
                minDateTime={new Date()}
                onChange={(e) =>
                  handleFieldValueChange(e, FieldType.startDateTime)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    fullWidth
                    name="startDateTime"
                    error={
                      formik.touched.startDateTime &&
                      Boolean(formik.errors.startDateTime)
                    }
                    helperText={
                      formik.touched.startDateTime &&
                      formik.errors.startDateTime
                    }
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FieldLabel
              name="活动结束时间"
              description="不选择结束时间代表长期有效"
            />
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Date & Time"
                value={formik.values.endDateTime}
                minDateTime={new Date()}
                onChange={(e) =>
                  handleFieldValueChange(e, FieldType.endDateTime)
                }
                renderInput={(params) => (
                  <TextField
                    {...params}
                    size="small"
                    fullWidth
                    name="endDateTime"
                  />
                )}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={12} sm={3}>
            <FieldLabel name="活动地点" isRequired />
            <TextField
              label="Address"
              variant="outlined"
              name="address"
              fullWidth
              size="small"
              value={formik.values.address}
              onClick={() => setGoogleMapDialog(true)}
              // onChange={(e) => handleFieldValueChange(e, FieldType.address)}
              error={formik.touched.address && Boolean(formik.errors.address)}
              helperText={formik.touched.address && formik.errors.address}
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <FieldLabel name="最多参数人数（0表示不限制）" isRequired />
            <TextField
              label="Member limitation"
              variant="outlined"
              name="limit"
              type="number"
              fullWidth
              size="small"
              value={formik.values.limit}
              onChange={(e) => handleFieldValueChange(e, FieldType.limit)}
              error={formik.touched.limit && Boolean(formik.errors.limit)}
              helperText={formik.touched.limit && formik.errors.limit}
            />
          </Grid>
          <Grid item xs={12}>
            <FieldLabel name="活动描述" isRequired />
            <TextField
              label="Description"
              variant="outlined"
              rows={3}
              name="description"
              fullWidth
              multiline
              size="small"
              value={formik.values.description}
              onChange={(e) => handleFieldValueChange(e, FieldType.description)}
              error={
                formik.touched.description && Boolean(formik.errors.description)
              }
              helperText={
                formik.touched.description && formik.errors.description
              }
            />
          </Grid>
          <Grid item xs={12}>
            <Divider sx={{ mb: 2 }} />
          </Grid>
        </Grid>
        <Box width="100%" height="67vh" mb={2}>
          <FieldLabel name="活动详情" isRequired />
          <RichTextEditor
            content={description}
            setContent={(e) => handleFieldValueChange(e, FieldType.content)}
            height="calc(100% - 21px)"
          />
        </Box>
      </form>
    </Box>
  );
}

export default EventForm;
