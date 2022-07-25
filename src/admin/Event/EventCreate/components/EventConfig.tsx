/* eslint-disable indent */
/*
 * @Author: 李佳修
 * @Date: 2022-06-01 09:18:34
 * @LastEditTime: 2022-07-21 23:22:17
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/admin/Event/EventCreate/components/EventConfig.tsx
 */

import { Box, Button, Tooltip, Typography } from "@mui/material";
import React, { useState } from "react";
import {
  SortEnd,
  SortableContainer,
  SortableElement,
  SortableHandle,
} from "react-sortable-hoc";
import {
  removeQuestion,
  reorderQuestion,
  FormItem,
  FormType,
} from "redux/form/formSlice";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import { useSwiper } from "swiper/react";
import CheckBoxGroup from "./FormItems/CheckBoxGroup";
import DatePicker from "./FormItems/DatePicker";
import DateTimePicker from "./FormItems/DateTimePicker";
import FormItemCreate, { DialogType } from "./FormItemCreate";

import FormItemDetail from "./FormItemDetail";
import FormItemPool from "./FormItemPool";

import RadioGroup from "./FormItems/RadioGroup";
import Select from "./FormItems/Select";
import TextFieldLong from "./FormItems/TextFieldLong";
import TextFieldShort from "./FormItems/TextFieldShort";
import TimePicker from "./FormItems/TimePicker";

const EventConfig: React.FC = () => {
  const swiper = useSwiper();
  const [detailDialogOpen, setDetailDialogOpen] = useState<boolean>(false);
  const [detailedItem, setDetailedItem] = useState<null | FormItem>(null);
  const [editItem, setEditItem] = useState(null);
  const [editDialogOpen, setEditDialogOpen] = useState<boolean>(false);
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const selectedQuestions = useAppSelector(
    (state) => state.form.createData.selectedQuestions,
  );
  const rederList = [...selectedQuestions];
  rederList.sort((prev, next) => prev.order - next.order);

  console.log(rederList, 8887777);

  const handleRemoveQuestion = (e, item) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    dispatch(removeQuestion(item));
  };

  // const handleCompleteCreateFormItem = () => {
  //   dispatch(fetchFormItemList({ isAuth: true }));
  // };

  const handleSortEnd = (sort: SortEnd) => {
    dispatch(
      reorderQuestion({
        newOrder: sort.newIndex,
        oldOrder: sort.oldIndex,
      }),
    );
  };

  const handleCheckDetail = (data) => {
    setDetailedItem(data);
    setDetailDialogOpen(true);
  };

  const handleEditQuestion = (data) => {
    setEditItem(data);
    setEditDialogOpen(true);
    // console.log(data);
  };

  const handleCreateNew = () => {
    setEditItem(null);
    setDialogOpen(true);
  };

  const DragHandle = SortableHandle(() => (
    <Box
      sx={{
        height: "100%",
        borderTopLeftRadius: "12px",
        borderBottomLeftRadius: "12px",
        background: "#f5f5f5",
        display: "flex",
        alignItems: "center",
        cursor: "move",
        color: "#9e9e9e",
        "&:hover": {
          background: "#eeeeee",
          color: "#424242",
        },
        "&:active": {
          background: "#e0e0e0",
          color: "#fff",
        },
      }}
    >
      <DragIndicatorIcon />
    </Box>
  ));

  const SortableItem = SortableElement(({ item }) => (
    <Box
      mt={2}
      display="flex"
      borderRadius="12px"
      sx={{
        "&:hover": {
          boxShadow:
            "rgba(17, 17, 26, 0.1) 0px 4px 16px, rgba(17, 17, 26, 0.05) 0px 8px 32px",
          "& .remove_icon": {
            display: "flex",
          },
        },
      }}
    >
      <Box>
        <DragHandle />
      </Box>
      <Box width="calc(100% - 80px)" pl={2} paddingY={1.5}>
        {item.formType === FormType.TextFieldShort ? (
          <TextFieldShort item={item} />
        ) : null}

        {item.formType === FormType.TextFieldLong ? (
          <TextFieldLong item={item} />
        ) : null}

        {item.formType === FormType.Select ||
        item.formType === FormType.MultipleSelect ? (
          <Select item={item} />
        ) : null}

        {item.formType === FormType.DatePicker ? (
          <DatePicker item={item} />
        ) : null}

        {item.formType === FormType.TimePicker ? (
          <TimePicker item={item} />
        ) : null}

        {item.formType === FormType.DateTimePicker ? (
          <DateTimePicker item={item} />
        ) : null}

        {item.formType === FormType.RadioGroupH ||
        item.formType === FormType.RadioGroupV ||
        item.formType === FormType.Boolean ? (
          <RadioGroup item={item} />
        ) : null}

        {item.formType === FormType.Checkbox ? (
          <CheckBoxGroup item={item} />
        ) : null}
        <Box display="flex" justifyContent="space-between">
          {/* <Button variant="text" size='small' onClick={() => handleAddQuestion(item)}>使用问题</Button> */}
          <Button
            variant="text"
            size="small"
            onClick={() => handleCheckDetail(item)}
          >
            查看详情
          </Button>
          <Button
            variant="text"
            size="small"
            onClick={() => handleEditQuestion(item)}
          >
            编辑问题
          </Button>
        </Box>
      </Box>
      <Box
        className="remove_icon"
        width="50px"
        display="none"
        alignItems="center"
        justifyContent="flex-end"
        pr={1}
      >
        <Tooltip title="移除问题" placement="top" arrow>
          <RemoveCircleIcon
            sx={{ color: "#e53935", cursor: "pointer" }}
            onClick={(e) => handleRemoveQuestion(e, item)}
          />
        </Tooltip>
      </Box>
    </Box>
  ));

  const SortableList = SortableContainer(() => (
    <ul>
      {rederList.map((item, index) => (
        <SortableItem key={item.id} index={index} item={item} />
      ))}
    </ul>
  ));

  return (
    <Box p="2px">
      <Box display="flex" justifyContent="space-between">
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
          display: "flex",
          height: "110vh",
        }}
      >
        <Box
          height="100%"
          width="35%"
          padding="12px 24px 12px 0px"
          overflow="auto"
        >
          <FormItemPool />
        </Box>
        <Box
          height="100%"
          width="65%"
          display="flex"
          flexDirection="column"
          alignItems="center"
          overflow="auto"
        >
          <Typography variant="h6" gutterBottom component="div">
            活动报名表单
          </Typography>
          <Box width="100%" boxSizing="border-box" pr={2}>
            <SortableList
              onSortEnd={handleSortEnd}
              distance={1}
              useDragHandle
            />
          </Box>
          <Button
            variant="contained"
            sx={{ width: "30%", mt: "24px" }}
            onClick={handleCreateNew}
          >
            新建问题
          </Button>
        </Box>
      </Box>
      <FormItemCreate
        type={DialogType.create}
        open={dialogOpen}
        setOpen={setDialogOpen}
        // completeCreate={handleCompleteCreateFormItem}
      />
      <FormItemCreate
        editItem={editItem}
        type={DialogType.edit}
        open={editDialogOpen}
        setOpen={setEditDialogOpen}
        // completeCreate={handleCompleteCreateFormItem}
      />
      <FormItemDetail
        open={detailDialogOpen}
        setOpen={setDetailDialogOpen}
        item={detailedItem}
      />
    </Box>
  );
};

export default EventConfig;
