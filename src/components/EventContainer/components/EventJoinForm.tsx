/*
 * @Author: 李佳修
 * @Date: 2022-06-15 14:38:54
 * @LastEditTime: 2022-06-16 22:02:47
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/EventJoinForm.tsx
 */

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from 'redux/hooks';

import Box from '@mui/material/Box';
import DynamicForm from 'components/DynamicForm';
import { Event } from 'redux/event/eventSlice';
import { fetchForm } from 'redux/form/formSlice';

interface EventJoinFormProp {
  open: boolean;
  event: Event;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventJoinForm: React.FC<EventJoinFormProp> = ({
  open,
  setOpen,
  event,
}) => {
  // const form = useAppSelector((state) => state.form);
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   if (event?.eventFormId) {
  //     dispatch(fetchForm({
  //       formId: event.eventFormId,
  //       isAuth: true
  //     }));
  //   }
  // }, [event]);

  console.log(event?.form);
  const handleJoinEvent = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      maxWidth={false}
      onClose={() => setOpen(false)}
      scroll={'paper'}
    >
      <DialogTitle>{event ? event.title : '活动报名'}</DialogTitle>
      <DialogContent dividers>
        {/* <Box minHeight="600px" minWidth="600px"></Box> */}
        <DynamicForm formItemList={event?.form?.formItems?.items} />
      </DialogContent>

      <DialogActions>
        <Button onClick={handleJoinEvent}>提交</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventJoinForm;
