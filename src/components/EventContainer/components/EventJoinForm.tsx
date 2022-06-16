/*
 * @Author: 李佳修
 * @Date: 2022-06-15 14:38:54
 * @LastEditTime: 2022-06-16 16:17:37
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/EventJoinForm.tsx
 */
import React, { useEffect } from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Event } from 'redux/event/eventSlice';
import { fetchForm } from 'redux/form/formSlice';
import { useAppSelector, useAppDispatch } from 'redux/hooks';
import Box from '@mui/material/Box';

interface EventJoinFormProp {
    open: boolean;
    event: Event;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventJoinForm: React.FC<EventJoinFormProp> = ({ open, setOpen, event }) => {
  const form = useAppSelector(state => state.form);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (event?.eventFormId) {
      dispatch(fetchForm({
        formId: event.eventFormId,
        isAuth: true
      }));
    }
  }, [event]);

  console.log(form);
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
        <Box minHeight='600px' minWidth='600px'>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleJoinEvent}>提交</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventJoinForm;