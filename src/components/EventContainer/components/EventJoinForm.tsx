/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * @Author: 李佳修
 * @Date: 2022-06-15 14:38:54
 * @LastEditTime: 2022-06-20 01:22:42
 * @LastEditors: Shen Shu
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/EventJoinForm.tsx
 */

import { Dialog, DialogTitle } from '@mui/material';

import DynamicForm from 'components/DynamicForm';
// import { Event } from 'redux/event/eventSlice';
import React from 'react';

interface EventJoinFormProp {
  open: boolean;
  event: any;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventJoinForm: React.FC<EventJoinFormProp> = ({
  open,
  setOpen,
  event,
}) => {
  return (
    <Dialog
      open={open}
      // maxWidth="xs"
      fullWidth
      onClose={() => setOpen(false)}
      scroll={'paper'}
    >
      <DialogTitle>{event ? event.title : '活动报名'}</DialogTitle>

      <DynamicForm
        formItemList={event?.form?.formItems?.items}
        setOpen={setOpen}
        eventId={event?.id}
      />
    </Dialog>
  );
};

export default EventJoinForm;
