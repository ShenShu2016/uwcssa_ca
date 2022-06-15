/*
 * @Author: 李佳修
 * @Date: 2022-06-15 14:38:54
 * @LastEditTime: 2022-06-15 17:33:48
 * @LastEditors: 李佳修
 * @FilePath: /uwcssa_ca/src/components/EventContainer/components/EventJoinForm.tsx
 */
import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@mui/material';
import { Event } from 'redux/event/eventSlice';
import Box from '@mui/material/Box';

interface EventJoinFormProp {
    open: boolean;
    event: Event;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const EventJoinForm: React.FC<EventJoinFormProp> = ({ open, setOpen, event=null }) => {

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
        <Box minHeight='456px' minWidth='600px'>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleJoinEvent}>提交</Button>
      </DialogActions>
    </Dialog>
  );
};

export default EventJoinForm;